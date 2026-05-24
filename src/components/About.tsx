import { motion } from "motion/react";
import { ShieldCheck, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Years in the field" },
  { icon: Award, value: "150+", label: "Projects delivered" },
  { icon: Users, value: "40+", label: "Industrial clients" },
  { icon: ShieldCheck, value: "100%", label: "EPRA compliance" },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red">About D'zizi</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black uppercase">A Kenyan engineering team you can rely on</h2>
          <p className="mt-5 text-muted-foreground">
            D'zizi Petroleum Services Limited is a Kenyan-owned engineering company delivering safe, compliant and cost-effective fuel and energy systems. Our team combines decades of forecourt, mechanical and electrical experience with a deep understanding of the local industrial landscape.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Licensed and EPRA-aligned installations",
              "Nationwide field response across Kenya",
              "Quality equipment from trusted global brands",
              "Single-point accountability — design to maintenance",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-red" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-lg transition"
            >
              <s.icon className="h-6 w-6 text-brand-red" />
              <p className="mt-4 font-display text-4xl font-black">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
