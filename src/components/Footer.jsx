import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-sm text-sub md:flex-row md:items-center md:justify-between">
        <Logo />
        <div className="-my-3 flex flex-wrap gap-x-8">
          <a href="#features" className="py-3 hover:text-ink">Product</a>
          <a href="#use-cases" className="py-3 hover:text-ink">Use cases</a>
          <a href="#security" className="py-3 hover:text-ink">Security</a>
          <a href="mailto:hello@nexerp.io" className="py-3 hover:text-ink">Contact</a>
        </div>
        <p className="text-muted">© 2026 NEXengage</p>
      </div>
    </footer>
  );
}
