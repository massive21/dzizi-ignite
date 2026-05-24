import logo from "@/assets/dzizi/logo.jpeg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="D'zizi Petroleum Services Limited" className="h-10 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Petroleum, forecourt and solar engineering for Kenya's industries, farms and fuel retailers.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold uppercase">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a className="hover:text-brand-red" href="/#services">Services</a></li>
            <li><a className="hover:text-brand-red" href="/#applications">Industries</a></li>
            <li><a className="hover:text-brand-red" href="/projects">Recent Projects</a></li>
            <li><a className="hover:text-brand-red" href="/#about">About</a></li>
            <li><a className="hover:text-brand-red" href="/#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold uppercase">Get in touch</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Nairobi, Kenya</li>
            <li><a className="hover:text-brand-red" href="mailto:info@dzizipetroleum.com">info@dzizipetroleum.com</a></li>
            <li><a className="hover:text-brand-red" href="tel:+254702587919">+254 702 587 919</a></li>
            <li><a className="hover:text-brand-red" href="https://wa.me/254702587919" target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} D'zizi Petroleum Services Limited. All rights reserved.
      </div>
    </footer>
  );
}
