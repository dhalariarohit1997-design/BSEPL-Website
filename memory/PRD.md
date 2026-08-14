# Kundli PCB — Marketing Website + Quote System

## Problem Statement
Business website for a printed circuit board manufacturer in Kundli, Haryana that manufactures up to 4-layer PCBs. Needs: Home, About, Capabilities, Gallery, Contact + a "Request a Quote" form with Gerber/ZIP file upload that saves inquiries.

## Architecture
- **Frontend**: React 19 single-page site. Sections: Navbar, Kinetic Hero (framer-motion masked reveal + scroll parallax), Ticker (react-fast-marquee), Manifesto chapters, Capabilities bento, Spotlight Gallery, Quote form, Contact footer. Smooth scroll via `lenis`. Dark industrial-brutalist theme (Outfit + JetBrains Mono, copper #D97706 accent). Toasts via sonner.
- **Backend**: FastAPI. `POST /api/quote` (multipart: fields + optional file), `GET /api/quotes`, `GET /api/files/{path}`. Files stored via Emergent Object Storage; quote metadata in MongoDB (`quotes` collection).
- **Storage**: Emergent object storage using EMERGENT_LLM_KEY, prefix `kundli-pcb/uploads/`.

## User Personas
- Hardware engineers / startups / OEMs needing PCB fabrication quotes.

## Implemented (2026-08-14)
- Populated site with real company data from BSEPL Company Profile: B.S. Electronics Pvt. Ltd. (est. 1996), address, real capabilities (single/double-sided & metal-clad specs, 18,500 sq.m/mo capacity), certifications (IATF 16949, ISO 9001/14001/45001, RoHS, UL 2025), and client/partner marquee (Polycab, Havells, Halonix, ERD, UTL Solar, Orient, IKIO, HPL, Livguard, Bluebird, Phoenix).
- Award-level animated marketing site (hero reveal, parallax, marquee, scroll reveals, hover micro-interactions).
- Quote request form with drag-drop Gerber/ZIP upload → object storage + MongoDB. Verified end-to-end (with & without file).
- Placeholder contact details (address/phone/email) for later update.

## Notes
- No authentication (public marketing site).
- Contact details are placeholders — user to replace real name/phone/email/address.

## Backlog (P1/P2)
- Admin dashboard to view/manage quote submissions.
- Email notification on new quote (Resend).
- Real content/photos, brand logo, real contact details.
