import { useState } from "react";
import Logo from "./Logo.jsx";

const LINKS = [
  ["Product", "#features"],
  ["Use cases", "#use-cases"],
  ["Results", "#results"],
  ["Security", "#security"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/50 bg-page/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <div className="hidden items-center gap-10 text-sm text-sub md:flex">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-ink">{label}</a>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <a href="https://nexgpt.nexerp.io/login" className="btn text-ink">Login</a>
          <a href="#cta" className="btn-light">Book a demo</a>
          <a href="https://nexgpt.nexerp.io" className="btn-dark">Try for free</a>
        </div>
        <button className="-mr-2.5 flex h-11 w-11 flex-col items-center justify-center md:hidden" aria-label="Menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="flex flex-col border-t border-line/50 px-6 py-3 text-sub md:hidden">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="py-2.5" onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="https://nexgpt.nexerp.io/login" className="py-2.5">Login</a>
          <div className="mt-2 grid grid-cols-2 gap-3 pb-1">
            <a href="#cta" className="btn-light min-h-11" onClick={() => setOpen(false)}>Book a demo</a>
            <a href="https://nexgpt.nexerp.io" className="btn-dark min-h-11">Try for free</a>
          </div>
        </div>
      )}
    </header>
  );
}
