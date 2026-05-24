import { motion } from "motion/react";
import { Factory, Coffee, Fuel, Tractor, Building2, Mountain, Hospital, Truck } from "lucide-react";

const areas = [
  { icon: Factory, title: "Heavy Industries", desc: "Bulk fuel storage, boiler fuel lines and standby power for manufacturing plants and processors." },
  { icon: Coffee, title: "Coffee & Tea Farms", desc: "Diesel storage for dryers, generators and tractors — engineered for remote estates and factories." },
  { icon: Fuel, title: "Fuel Stations", desc: "Turnkey forecourts: tanks, pumps, canopies, branding, automation and ongoing maintenance." },
  { icon: Tractor, title: "Agriculture & Agribusiness", desc: "Fuel solutions for large-scale farms, irrigation pumps, greenhouses and food processing." },
  { icon: Building2, title: "Commercial & Real Estate", desc: "Generator fuel systems and solar hybrid setups for malls, offices and gated communities." },
  { icon: Mountain, title: "Mining & Quarries", desc: "On-site refuelling stations, bulk diesel tanks and dispensing equipment for remote operations." },
  { icon: Hospital, title: "Hospitals & Institutions", desc: "Reliable standby fuel and clean solar power for hospitals, schools and government facilities." },
  { icon: Truck, title: "Transport & Logistics", desc: "Fleet refuelling installations, fuel management and storage for transporters and depots." },
];

export function ApplicationAreas() {
  return (
    <section id="applications" className="relative py-20 sm:py-28 bg-brand-ink text-white overflow-hidden">
      {/* decorative */}
      <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-red/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-yellow/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow">Application Areas</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black uppercase">Powering the industries that build Kenya</h2>
          <p className="mt-4 text-white/70">
            We serve clients across every sector that depends on reliable fuel and energy — from coffee estates in Nyeri to manufacturing plants in Industrial Area and fuel stations along the Northern Corridor.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.08] hover:border-brand-yellow/50 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/20 text-brand-yellow group-hover:bg-brand-red group-hover:text-white transition-colors">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{a.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
