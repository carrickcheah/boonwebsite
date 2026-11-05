import { BotOff, Lock, ShieldCheck } from "lucide-react";

const ITEMS = [
  [Lock, "Your data stays yours", "Each business's data is kept apart; one tenant can never see another."],
  [BotOff, "Not used to train AI", "Your conversations are never used to train models."],
  [ShieldCheck, "Safe replies", "Guards stop wrong prices, invented branches and refund promises before they reach a customer."],
];

export default function Security() {
  return (
    <section id="security" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="section-title max-w-4xl">Built for security. Designed for peace of mind.</h2>
        <div className="mt-14 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <img src="/img/security.jpg" alt="Separate, protected data for every business" width="1536" height="1024" loading="lazy" className="w-full rounded-2xl" />
          <div className="space-y-8">
            {ITEMS.map(([Icon, title, text]) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal/10 text-teal-strong"><Icon size={20} aria-hidden="true" /></span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-body">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
