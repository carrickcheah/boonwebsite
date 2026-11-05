import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Showcase from "./components/Showcase.jsx";
import Features from "./components/Features.jsx";
import InboxSection from "./components/InboxSection.jsx";
import Numbers from "./components/Numbers.jsx";
import UseCases from "./components/UseCases.jsx";
import Results from "./components/Results.jsx";
import Security from "./components/Security.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only rounded-md bg-ink px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]">Skip to content</a>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <Showcase />
        <Features />
        <InboxSection />
        <Numbers />
        <UseCases />
        <Results />
        <Security />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
