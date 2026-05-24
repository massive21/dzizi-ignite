import { motion } from "motion/react";
import fuel from "@/assets/dzizi/fuel-related.jpg";
import nonFuel from "@/assets/dzizi/non-fuel.jpg";
import solar from "@/assets/dzizi/solar.jpg";
import tank from "@/assets/dzizi/tank.jpg";
import hydro from "@/assets/dzizi/hydrotesting.jpg";
import pump from "@/assets/dzizi/pump.jpg";

const services = [
  { img: fuel, title: "Fuel Related Services", desc: "Dispenser installation, calibration, pump maintenance and forecourt automation for fuel stations." },
  { img: tank, title: "Tank Installation", desc: "Underground and above-ground storage tank supply, installation and decommissioning." },
  { img: hydro, title: "Hydrotesting & Inspection", desc: "Pressure and integrity testing for petroleum tanks to meet safety and regulatory standards." },
  { img: nonFuel, title: "Civil & Fabrication Works", desc: "Forecourt construction, canopy fabrication, electrical and mechanical installations." },
  { img: solar, title: "Solar Energy Systems", desc: "Off-grid and hybrid solar for industries, farms and fuel stations — clean, reliable power." },
  { img: pump, title: "Equipment Sales", desc: "Pumps, compressors, generators, air gauges and quality petroleum equipment." },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red">What we do</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black uppercase">End-to-end petroleum & energy services</h2>
          <p className="mt-4 text-muted-foreground">
            From a single dispenser to a complete forecourt, from a coffee factory's bulk tank to a solar microgrid — we deliver turnkey engineering across Kenya.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-border shadow-sm hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <span className="absolute top-4 left-4 h-2 w-8 rounded-full bg-brand-yellow" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
