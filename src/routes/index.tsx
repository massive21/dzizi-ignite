import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ApplicationAreas } from "@/components/ApplicationAreas";
import { Clients } from "@/components/Clients";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "D'zizi Petroleum Services Limited — Fuel & Energy Engineering in Kenya" },
      { name: "description", content: "Kenyan petroleum, forecourt and solar engineering for industries, coffee farms, fuel stations and large estates. Design, installation and maintenance." },
      { property: "og:title", content: "D'zizi Petroleum Services Limited" },
      { property: "og:description", content: "Trusted fuel system, tank installation, hydrotesting and solar solutions across Kenya." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ApplicationAreas />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
