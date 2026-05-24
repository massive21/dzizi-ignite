import { motion } from "motion/react";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const PHONE = "+254702587919";
const PHONE_TEL = "+254702587919";
const WHATSAPP_URL = "https://wa.me/254702587919?text=Hello%20D%27zizi%20Petroleum%2C%20I%27d%20like%20to%20request%20a%20quote.";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert([form]);
    setLoading(false);
    if (error) {
      toast.error("Could not send. Please try WhatsApp instead.");
      return;
    }
    toast.success("Thanks! Our team will get back to you shortly.");
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
  }
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-br from-brand-red to-[oklch(0.45_0.2_27)] text-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center"
      >
        <h2 className="text-4xl sm:text-6xl font-black uppercase text-balance">Ready to power your operation?</h2>
        <p className="mt-5 max-w-2xl mx-auto text-white/85">
          Tell us about your site — fuel station, coffee factory, plant or farm. We'll design a solution that's safe, compliant and built to last.
        </p>

        <div className="mt-10 grid lg:grid-cols-5 gap-6 text-left">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, label: "Call / WhatsApp", value: PHONE, href: `tel:${PHONE_TEL}` },
              { icon: Mail, label: "Email", value: "info@dzizipetroleum.com", href: "mailto:info@dzizipetroleum.com" },
              { icon: MapPin, label: "Office", value: "Nairobi, Kenya" },
            ].map((c) => (
              <a key={c.label} href={c.href ?? "#"} className="block rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-5 hover:bg-white/15 transition">
                <c.icon className="h-5 w-5 text-brand-yellow" />
                <p className="mt-3 text-xs uppercase tracking-widest text-white/70">{c.label}</p>
                <p className="font-semibold mt-1">{c.value}</p>
              </a>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-white text-brand-red font-semibold px-5 py-2.5 hover:bg-brand-yellow hover:text-brand-ink transition">
                Chat on WhatsApp
              </a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center rounded-full border border-white/40 px-5 py-2.5 font-semibold hover:bg-white/10 transition">
                Call Now
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-6 space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="w-full rounded-lg bg-white/95 text-brand-ink placeholder:text-brand-ink/50 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-yellow" />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className="w-full rounded-lg bg-white/95 text-brand-ink placeholder:text-brand-ink/50 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-yellow" />
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone number" className="w-full rounded-lg bg-white/95 text-brand-ink placeholder:text-brand-ink/50 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-yellow" />
              <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company / Estate" className="w-full rounded-lg bg-white/95 text-brand-ink placeholder:text-brand-ink/50 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-yellow" />
            </div>
            <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your site or project…" rows={4} className="w-full rounded-lg bg-white/95 text-brand-ink placeholder:text-brand-ink/50 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-yellow" />
            <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow text-brand-ink font-semibold px-6 py-3 hover:bg-white transition disabled:opacity-60">
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {loading ? "Sending…" : "Send Request"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
