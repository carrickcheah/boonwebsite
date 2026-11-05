import { useEffect, useRef } from "react";
import { Bot, Megaphone, Package } from "lucide-react";

// Floating product cards around a teal glass panel. From lg up each card drifts at its
// own speed as the page scrolls (data-speed), plus a slow idle float; travel is capped so
// a card cannot reach the next section. Below lg the cards are a plain grid. Demo data only.
function Card({ className, speed, children }) {
  return (
    <div data-speed={speed} className={`parallax lg:absolute ${className}`}>
      <div className="bob h-full rounded-xl border border-white/70 bg-white/80 shadow-[0_24px_50px_-20px_rgba(15,23,42,.25)] backdrop-blur">
        {children}
      </div>
    </div>
  );
}

function Avatar({ letter, color }) {
  return <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-lg font-semibold text-white ${color}`}>{letter}</span>;
}

export default function Showcase() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    const cards = root.querySelectorAll(".parallax");
    const free = window.matchMedia("(min-width: 64rem) and (prefers-reduced-motion: no-preference)");
    let raf = 0;
    const move = () => {
      raf = 0;
      if (!free.matches) {
        cards.forEach((c) => { c.style.transform = ""; });
        return;
      }
      const r = root.getBoundingClientRect();
      const raw = (window.innerHeight / 2 - (r.top + r.height / 2)) / window.innerHeight;
      const progress = Math.max(-0.5, Math.min(0.5, raw));
      cards.forEach((c) => {
        c.style.transform = `translate3d(0, ${progress * Number(c.dataset.speed) * -100}px, 0)`;
      });
    };
    const request = () => { if (!raf) raf = requestAnimationFrame(move); };
    move();
    window.addEventListener("scroll", request, { passive: true });
    free.addEventListener("change", request);
    return () => {
      window.removeEventListener("scroll", request);
      free.removeEventListener("change", request);
    };
  }, []);

  return (
    <section ref={ref} className="relative mx-auto max-w-6xl px-6 lg:h-[780px]">
      {/* teal glass panel */}
      <div className="absolute inset-x-6 inset-y-0 rounded-2xl bg-gradient-to-b from-teal/25 via-teal/15 to-teal/5 lg:inset-x-auto lg:top-1/2 lg:left-1/2 lg:h-[480px] lg:w-[420px] lg:-translate-x-1/2 lg:-translate-y-1/2" />
      <div className="relative grid gap-4 p-5 sm:grid-cols-2 lg:block lg:h-full lg:p-0">
        <p className="mx-auto max-w-52 py-4 text-center text-base leading-6 font-medium sm:col-span-2 lg:absolute lg:top-[42%] lg:left-1/2 lg:w-52 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:py-0">
          Everything you need in a modern customer chat tool
        </p>

        <Card speed="0.6" className="lg:top-[8%] lg:left-[1%] lg:w-80">
          <div className="p-4">
            <p className="text-sm font-medium">AI reply rate</p>
            <svg viewBox="0 0 280 90" className="mt-3 w-full" aria-hidden="true">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#2bb6a3" stopOpacity=".25" />
                  <stop offset="1" stopColor="#2bb6a3" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 60 C30 30 50 30 70 50 S110 95 130 60 S170 5 200 25 S250 30 280 25 L280 90 L0 90Z" fill="url(#g)" />
              <path d="M0 60 C30 30 50 30 70 50 S110 95 130 60 S170 5 200 25 S250 30 280 25" fill="none" stroke="#2bb6a3" strokeWidth="2" />
            </svg>
            <span className="mt-1 inline-block rounded bg-ink/70 px-2 py-0.5 text-xs text-white">96% · this week</span>
          </div>
        </Card>

        <Card speed="1.1" className="lg:top-[6%] lg:right-[6%]">
          <div className="flex items-center gap-3 px-5 py-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white"><Bot size={20} aria-hidden="true" /></span>
            <span className="text-xl font-medium">AI agent</span>
          </div>
        </Card>

        <Card speed="0.9" className="lg:top-[28%] lg:right-[1%] lg:w-72">
          <div className="flex items-center gap-4 p-4">
            <Avatar letter="R" color="bg-sky-700" />
            <div className="flex-1">
              <p className="font-medium">Rizal</p>
              <p className="text-sm text-body">Nak tukar tarikh booking</p>
            </div>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-red-600 text-sm text-white">1</span>
          </div>
        </Card>

        <Card speed="1.4" className="lg:top-[56%] lg:left-[4%] lg:w-64">
          <div className="flex items-center gap-4 p-4">
            <Avatar letter="A" color="bg-pink-600" />
            <div>
              <p className="font-medium">Aisyah</p>
              <p className="text-sm text-body">Berminat! 😍</p>
            </div>
          </div>
        </Card>

        <Card speed="0.4" className="lg:right-[1%] lg:bottom-[12%] lg:w-80">
          <div className="p-4">
            <div className="flex items-start gap-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-amber-100 text-amber-800"><Package size={28} aria-hidden="true" /></span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Order #1042</p>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">Paid</span>
                </div>
                <p className="mt-1 flex justify-between text-sm text-body"><span>Crystal ball 8cm</span><span>x1</span></p>
                <p className="flex justify-between text-sm text-body"><span>Postage</span><span>x1</span></p>
              </div>
            </div>
            <p className="mt-4 flex justify-between text-sm"><span className="text-body">Total</span><span className="font-semibold">RM 71.00</span></p>
          </div>
        </Card>

        <Card speed="0.8" className="sm:col-span-2 lg:bottom-[5%] lg:left-1/2 lg:w-60 lg:-ml-[7.5rem]">
          <div className="grid h-28 place-items-center rounded-t-xl bg-soft text-teal-strong"><Megaphone size={44} strokeWidth={1.5} aria-hidden="true" /></div>
          <div className="p-3">
            <p className="text-sm font-medium">11.11 sale is live!</p>
            <p className="mt-1 text-xs text-muted">Broadcast · 1,200 customers</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
