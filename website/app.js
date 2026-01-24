// Replace this URL once the Scanium Google Play listing is live.
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.scanium.app";

const playStoreLinks = document.querySelectorAll("[data-play-store-link]");
playStoreLinks.forEach((link) => {
  link.setAttribute("href", PLAY_STORE_URL);
  link.setAttribute("rel", "noopener");
  link.setAttribute("target", "_blank");
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const animatedElements = document.querySelectorAll(".reveal");
const siteHeader = document.querySelector(".site-header");

if (!prefersReducedMotion) {
  document.body.classList.add("has-animations");

  if (siteHeader) {
    requestAnimationFrame(() => {
      siteHeader.classList.add("is-visible");
    });
  }

  animatedElements.forEach((element) => {
    const delay = Number(element.dataset.delay || 0);
    window.setTimeout(() => {
      element.classList.add("is-visible");
    }, delay);
  });
}
