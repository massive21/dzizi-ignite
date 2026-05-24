import { motion } from "motion/react";
import logo from "@/assets/dzizi/logo.jpeg";

const WHATSAPP_URL = "https://wa.me/254702587919?text=Hello%20D%27zizi%20Petroleum%2C%20I%27d%20like%20to%20request%20a%20quote.";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#applications", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 glass border-b border-border/60"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="D'zizi Petroleum Services Limited logo" className="h-9 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative text-foreground/80 hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-red after:transition-all hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-brand-red/90 transition"
        >
          Get a Quote
        </a>
      </nav>
    </motion.header>
  );
}
