import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MapPin, Calendar, Building2, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import fuel from "@/assets/dzizi/fuel-related.jpg";
import nonFuel from "@/assets/dzizi/non-fuel.jpg";
import solar from "@/assets/dzizi/solar.jpg";
import tank from "@/assets/dzizi/tank.jpg";
import hydro from "@/assets/dzizi/hydrotesting.jpg";
import pump from "@/assets/dzizi/pump.jpg";

const categoryImage: Record<string, string> = {
  "Coffee Farms": tank,
  "Fuel Stations": fuel,
  "Hydrotesting": hydro,
  "Solar Solutions": solar,
  "Transport & Logistics": pump,
  "Hospitals & Institutions": nonFuel,
};

type Project = {
  id: string;
  title: string;
  client: string | null;
  location: string | null;
  category: string;
  description: string;
  image_url: string | null;
  completed_at: string | null;
};

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Recent Projects — D'zizi Petroleum Services Limited" },
      { name: "description", content: "Recent fuel system, forecourt, hydrotesting, solar and standby power projects delivered by D'zizi Petroleum across Kenya." },
      { property: "og:title", content: "Recent Projects — D'zizi Petroleum Services" },
      { property: "og:description", content: "A selection of recent installations and upgrades across coffee farms, fuel stations, industries and hospitals." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .order("sort_order", { ascending: true });
      setProjects((data ?? []) as Project[]);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-10">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-red transition">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </a>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-5xl sm:text-6xl font-black uppercase text-balance"
          >
            Recent <span className="text-brand-red">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-muted-foreground"
          >
            A selection of installations and upgrades we've delivered across Kenya — from coffee estates and manufacturing plants to fuel stations and hospitals.
          </motion.p>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-80 rounded-2xl bg-muted/40 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => {
                const img = p.image_url || categoryImage[p.category] || fuel;
                return (
                  <motion.article
                    key={p.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={img} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-brand-yellow text-brand-ink text-xs font-bold uppercase tracking-wider px-3 py-1">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl font-bold leading-tight">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.description}</p>
                      <dl className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                        {p.client && (
                          <div className="flex items-center gap-2"><Building2 className="h-3.5 w-3.5 text-brand-red" /> {p.client}</div>
                        )}
                        {p.location && (
                          <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-brand-red" /> {p.location}</div>
                        )}
                        {p.completed_at && (
                          <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-brand-red" /> Completed {new Date(p.completed_at).toLocaleDateString("en-KE", { month: "long", year: "numeric" })}</div>
                        )}
                      </dl>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
