import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Same feel as the reference site: every heading, line, card, button and picture
// fades up 1.25rem as it enters the screen, siblings one after another.
const ANIMATED = "main h1, main h2, main h3, main p, main img, main a, main li, main .card, main .chip";
const seen = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) {
    const el = e.target;
    // Once faded in, drop the reveal styles: its delay and transition would otherwise slow every hover.
    el.addEventListener("transitionend", function done(ev) {
      if (ev.target !== el) return;
      el.removeEventListener("transitionend", done);
      el.classList.remove("reveal", "shown");
      el.style.transitionDelay = "";
    });
    el.classList.add("shown");
    seen.unobserve(el);
  }
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
function tag() {
  document.querySelectorAll(ANIMATED).forEach((el) => {
    if (el.dataset.rv || el.closest(".parallax") || el.parentElement.closest(".card, li, p, h1, h2, h3")) return;
    el.dataset.rv = "1";
    el.classList.add("reveal");
    const i = [...el.parentElement.children].indexOf(el);
    el.style.transitionDelay = `${Math.min(i, 6) * 90}ms`;
    seen.observe(el);
  });
}
new MutationObserver(tag).observe(document.body, { childList: true, subtree: true });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
