export default function Cta() {
  return (
    <section id="cta" className="px-6 py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-ink px-8 py-20 text-center text-white [&_a:focus-visible]:outline-white">
        <div className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-teal/30 blur-3xl" />
        <h2 className="relative text-4xl font-semibold tracking-tight text-balance md:text-6xl">Try NEXengage free today</h2>
        <p className="relative mx-auto mt-5 max-w-xl text-white/70">Connect WhatsApp in minutes and let AI answer your next customer.</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://nexgpt.nexerp.io" className="btn bg-white px-6 py-3 text-ink hover:bg-white/90">Try for free</a>
          <a href="mailto:hello@nexerp.io" className="btn border border-white/30 px-6 py-3 text-white hover:bg-white/10">Book a demo</a>
        </div>
      </div>
    </section>
  );
}
