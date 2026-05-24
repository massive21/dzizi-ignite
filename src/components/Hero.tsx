import { motion } from "motion/react";
import hero from "@/assets/dzizi/hero.jpg";
import { Fuel, Wrench, Sun, HardHat } from "lucide-react";

const quickPoints = [
  { icon: Fuel, label: "Fuel Systems" },
  { icon: Wrench, label: "Maintenance & Fabrication" },
  { icon: HardHat, label: "Tank & Civil Works" },
  { icon: Sun, label: "Solar Solutions" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-ink"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Kenya · Petroleum & Energy Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] text-balance"
            >
              Fuel systems,{" "}
              <span className="text-brand-red">built right.</span>{" "}
              Energy that <span className="text-brand-yellow">powers Kenya.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              D'zizi Petroleum Services Limited designs, installs and maintains fuel,
              forecourt and solar systems for industries, coffee farms, fuel stations
              and large estates across Kenya and the region.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-ink/90 transition">
                Explore Our Services
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-brand-ink/20 bg-white px-6 py-3 text-sm font-semibold text-brand-ink hover:border-brand-red hover:text-brand-red transition">
                Talk to an Engineer
              </a>
            </motion.div>

            {/* Quick "what we do" chips so visitors know immediately */}
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } } }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {quickPoints.map((q) => (
                <motion.li
                  key={q.label}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-2 rounded-xl border border-border bg-white/80 px-3 py-2.5 text-sm font-medium"
                >
                  <q.icon className="h-4 w-4 text-brand-red" />
                  {q.label}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img src={hero} alt="D'zizi engineers servicing fuel station equipment" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-ink/40 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 sm:-left-8 top-8 rounded-2xl bg-white shadow-xl border border-border px-4 py-3"
            >
              <p className="text-xs text-muted-foreground">Safety & Compliance</p>
              <p className="font-display text-xl font-bold">EPRA-aligned</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-3 sm:-right-6 bottom-8 rounded-2xl bg-brand-yellow text-brand-ink shadow-xl px-4 py-3"
            >
              <p className="text-xs font-semibold uppercase">24/7</p>
              <p className="font-display text-xl font-bold">Field Response</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
