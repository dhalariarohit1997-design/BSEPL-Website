from fastapi import FastAPI, APIRouter, UploadFile, File, Form, HTTPException, Header, Query
from fastapi.responses import Response
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import uuid
import requests
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# ---------- Object storage ----------
STORAGE_BASE = (os.environ.get("INTEGRATION_PROXY_URL") or "").strip() or "https://integrations.emergentagent.com"
STORAGE_URL = STORAGE_BASE.rstrip("/") + "/objstore/api/v1/storage"
EMERGENT_KEY = os.environ.get("EMERGENT_LLM_KEY")
APP_NAME = "kundli-pcb"
storage_key = None


def init_storage(force: bool = False):
    global storage_key
    if storage_key and not force:
        return storage_key
    resp = requests.post(f"{STORAGE_URL}/init", json={"emergent_key": EMERGENT_KEY}, timeout=30)
    resp.raise_for_status()
    storage_key = resp.json()["storage_key"]
    return storage_key


def put_object(path: str, data: bytes, content_type: str) -> dict:
    key = init_storage()
    resp = requests.put(
        f"{STORAGE_URL}/objects/{path}",
        headers={"X-Storage-Key": key, "Content-Type": content_type},
        data=data, timeout=120,
    )
    if resp.status_code == 404:
        key = init_storage(force=True)
        resp = requests.put(
            f"{STORAGE_URL}/objects/{path}",
            headers={"X-Storage-Key": key, "Content-Type": content_type},
            data=data, timeout=120,
        )
    resp.raise_for_status()
    return resp.json()


def get_object(path: str):
    key = init_storage()
    resp = requests.get(f"{STORAGE_URL}/objects/{path}", headers={"X-Storage-Key": key}, timeout=60)
    if resp.status_code == 404:
        key = init_storage(force=True)
        resp = requests.get(f"{STORAGE_URL}/objects/{path}", headers={"X-Storage-Key": key}, timeout=60)
    resp.raise_for_status()
    return resp.content, resp.headers.get("Content-Type", "application/octet-stream")


# ---------- Models ----------
class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    phone: Optional[str] = None
    layers: str
    quantity: str
    message: Optional[str] = None
    file_path: Optional[str] = None
    file_name: Optional[str] = None
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "Kundli PCB API"}


@api_router.post("/quote", response_model=QuoteRequest)
async def create_quote(
    name: str = Form(...),
    email: str = Form(...),
    layers: str = Form(...),
    quantity: str = Form(...),
    company: Optional[str] = Form(None),
    phone: Optional[str] = Form(None),
    message: Optional[str] = Form(None),
    file: Optional[UploadFile] = File(None),
):
    file_path = None
    file_name = None
    if file is not None and file.filename:
        ext = file.filename.split(".")[-1] if "." in file.filename else "bin"
        path = f"{APP_NAME}/uploads/{uuid.uuid4()}.{ext}"
        data = await file.read()
        try:
            result = put_object(path, data, file.content_type or "application/octet-stream")
            file_path = result["path"]
            file_name = file.filename
        except Exception as e:
            logger.error(f"File upload failed: {e}")
            raise HTTPException(status_code=502, detail="File upload failed. Please try again.")

    quote = QuoteRequest(
        name=name, email=email, company=company, phone=phone,
        layers=layers, quantity=quantity, message=message,
        file_path=file_path, file_name=file_name,
    )
    await db.quotes.insert_one(quote.model_dump())
    return quote


@api_router.get("/quotes", response_model=List[QuoteRequest])
async def list_quotes():
    docs = await db.quotes.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return docs


@api_router.get("/files/{path:path}")
async def download_file(path: str):
    record = await db.quotes.find_one({"file_path": path}, {"_id": 0})
    if not record:
        raise HTTPException(status_code=404, detail="File not found")
    data, content_type = get_object(path)
    return Response(content=data, media_type=content_type)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def startup():
    try:
        init_storage()
        logger.info("Storage initialized")
    except Exception as e:
        logger.error(f"Storage init failed: {e}")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
