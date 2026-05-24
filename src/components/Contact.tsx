import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
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

        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
          {[
            { icon: Phone, label: "Call", value: "+254 700 000 000" },
            { icon: Mail, label: "Email", value: "info@dzizipetroleum.com" },
            { icon: MapPin, label: "Office", value: "Nairobi, Kenya" },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-5">
              <c.icon className="h-5 w-5 text-brand-yellow" />
              <p className="mt-3 text-xs uppercase tracking-widest text-white/70">{c.label}</p>
              <p className="font-semibold mt-1">{c.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a href="mailto:info@dzizipetroleum.com" className="inline-flex items-center rounded-full bg-white text-brand-red font-semibold px-6 py-3 hover:bg-brand-yellow hover:text-brand-ink transition">
            Request a Quote
          </a>
          <a href="tel:+254700000000" className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10 transition">
            Talk to an Engineer
          </a>
        </div>
      </motion.div>
    </section>
  );
}
