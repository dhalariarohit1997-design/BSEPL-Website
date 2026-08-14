import { useState, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { UploadCloud, FileCheck2, Loader2, ArrowRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const layerOptions = ["1 Layer", "2 Layer", "3 Layer", "4 Layer"];

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "",
    layers: "2 Layer", quantity: "", message: "",
  });
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files?.[0]) setFile(e.dataTransfer.files[0]);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.quantity) {
      toast.error("Please fill in your name, email and quantity.");
      return;
    }
    setLoading(true);
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      if (file) data.append("file", file);
      await axios.post(`${API}/quote`, data, { headers: { "Content-Type": "multipart/form-data" } });
      toast.success("Quote request received. We'll be in touch shortly.");
      setForm({ name: "", email: "", company: "", phone: "", layers: "2 Layer", quantity: "", message: "" });
      setFile(null);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-[#0A0A0A] border border-[#262626] focus:border-copper outline-none px-4 py-4 font-mono text-sm text-white placeholder:text-[#525252] transition-colors duration-300 rounded-none";

  return (
    <section id="quote" data-testid="quote-section" className="border-t border-[#262626] bg-[#0A0A0A]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper mb-6">/ Request a Quote</p>
          <h2 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl mb-8">
            Send Us<br />Your Board.
          </h2>
          <p className="font-mono text-sm text-[#A3A3A3] leading-relaxed max-w-sm">
            Attach your Gerber or design files (ZIP), tell us the spec, and get a
            fabrication quote back fast. Up to 4 layers, proto to production.
          </p>
        </div>

        <form onSubmit={submit} data-testid="quote-form" className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input data-testid="quote-name" className={inputCls} placeholder="Full name *" value={form.name} onChange={set("name")} />
          <input data-testid="quote-email" type="email" className={inputCls} placeholder="Email *" value={form.email} onChange={set("email")} />
          <input data-testid="quote-company" className={inputCls} placeholder="Company" value={form.company} onChange={set("company")} />
          <input data-testid="quote-phone" className={inputCls} placeholder="Phone" value={form.phone} onChange={set("phone")} />

          <select data-testid="quote-layers" className={inputCls} value={form.layers} onChange={set("layers")}>
            {layerOptions.map((o) => <option key={o} value={o} className="bg-[#0A0A0A]">{o}</option>)}
          </select>
          <input data-testid="quote-quantity" className={inputCls} placeholder="Quantity (pcs) *" value={form.quantity} onChange={set("quantity")} />

          <textarea data-testid="quote-message" rows={4} className={`${inputCls} md:col-span-2 resize-none`} placeholder="Project details — dimensions, finish, deadline..." value={form.message} onChange={set("message")} />

          <div
            data-testid="quote-dropzone"
            onClick={() => fileRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
            className={`md:col-span-2 cursor-pointer border border-dashed px-6 py-10 flex flex-col items-center justify-center text-center transition-colors duration-300 ${
              dragging ? "border-copper bg-copper/5" : "border-[#404040] hover:border-copper"
            }`}
          >
            <input ref={fileRef} type="file" data-testid="quote-file-input" className="hidden" accept=".zip,.rar,.gbr,.zip,.7z,.rar,.gerber,.pcb,application/zip"
              onChange={(e) => setFile(e.target.files?.[0] || null)} />
            {file ? (
              <div className="flex items-center gap-3 font-mono text-sm text-copper">
                <FileCheck2 className="w-5 h-5" /> {file.name}
              </div>
            ) : (
              <>
                <UploadCloud className="w-7 h-7 text-[#525252] mb-3" strokeWidth={1.5} />
                <span className="font-mono text-sm text-[#A3A3A3]">Drop Gerber / ZIP files here, or click to browse</span>
              </>
            )}
          </div>

          <button
            data-testid="quote-submit-button"
            type="submit"
            disabled={loading}
            className="md:col-span-2 group flex items-center justify-center gap-3 bg-copper hover:bg-copper-hover disabled:opacity-60 text-[#050505] font-mono font-700 uppercase tracking-widest text-sm px-6 py-5 transition-colors duration-300"
          >
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting</> : <>Request Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /></>}
          </button>
        </form>
      </div>
    </section>
  );
}
