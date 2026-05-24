import { motion } from "motion/react";

const clients = ["Rubis", "Oryx", "Pacific", "Meru Oil", "UPDF", "Total", "KCB", "Bidco"];

export function Clients() {
  const row = [...clients, ...clients];
  return (
    <section id="clients" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Trusted Partners</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase">Working with Kenya's leading energy brands</h2>
        </div>

        <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div className="marquee-track flex gap-12 whitespace-nowrap">
            {row.map((c, i) => (
              <div key={i} className="flex items-center justify-center min-w-[180px] h-20 rounded-xl border border-border bg-white">
                <span className="font-display text-2xl font-bold tracking-wide text-brand-ink/80">{c}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
