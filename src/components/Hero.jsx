
const CHANNELS = ["WhatsApp", "Facebook", "Instagram", "Telegram", "Web chat"];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pt-20 pb-28 md:grid-cols-2 md:pt-28">
      <div>
        <h1 className="text-[2.75rem] leading-[1.1] font-semibold tracking-tight text-balance lg:text-6xl">
          The AI Contact Centre that sells while you sleep
        </h1>
        <p className="mt-6 max-w-lg text-body">
          AI answers your customers on WhatsApp, Facebook and Instagram, follows up every lead on day 2 and day 7,
          and keeps every conversation in one inbox for your team.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="https://nexgpt.nexerp.io" className="btn-dark px-6 py-3">Try for free</a>
          <a href="#cta" className="btn-light px-6 py-3">Book a demo</a>
        </div>
        <p className="mt-12 text-xs text-muted">Supported platforms</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {CHANNELS.map((c) => (
            <span key={c} className="chip rounded-full bg-ink/5 px-3 py-1 text-xs text-sub">{c}</span>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-10 -z-10 rounded-full bg-teal/25 blur-3xl" />
        <img src="/img/hero.jpg" alt="AI inbox with WhatsApp, Instagram and Facebook chats" width="1536" height="1024" fetchPriority="high" className="float w-full rounded-2xl" />
      </div>
    </section>
  );
}
