// Replace this URL once the Scanium Google Play listing is live.
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.scanium.app";

const playStoreLinks = document.querySelectorAll("[data-play-store-link]");
playStoreLinks.forEach((link) => {
  link.setAttribute("href", PLAY_STORE_URL);
  link.setAttribute("rel", "noopener");
  link.setAttribute("target", "_blank");
});

// ============================================================================
// Language Detection and Auto-Redirect
// ============================================================================

/**
 * Detect the user's preferred language.
 * Priority: localStorage > browser preference > default (English)
 */
function detectLanguage() {
  // Check localStorage first (user's previous selection).
  const saved = localStorage.getItem("scanium-lang");
  if (saved) return saved;

  // Check browser preference.
  const browserLang = navigator.language || navigator.userLanguage;

  // Handle Brazilian Portuguese specifically.
  if (browserLang.startsWith("pt-BR") || browserLang.startsWith("pt_BR")) {
    return "pt-BR";
  }

  // Extract primary language code (e.g., "en" from "en-US").
  const langCode = browserLang.split("-")[0].split("_")[0].toLowerCase();

  // Check if the language is supported.
  const supported = ["en", "de", "es", "fr", "it", "pt"];
  return supported.includes(langCode) ? langCode : "en";
}

/**
 * Auto-redirect to appropriate language on first visit.
 * Only runs on the English homepage.
 */
function handleLanguageRedirect() {
  const currentPath = window.location.pathname;

  // Only redirect from English homepage.
  const isEnglishHomepage =
    currentPath === "/website/" ||
    currentPath === "/website/index.html" ||
    currentPath === "/" ||
    currentPath === "/index.html";

  if (!isEnglishHomepage) {
    return; // Not on homepage, skip redirect.
  }

  // Don't redirect if user manually selected a language.
  if (localStorage.getItem("scanium-lang-manual")) {
    return; // User chose English explicitly.
  }

  const detectedLang = detectLanguage();

  // Only redirect if detected language is not English.
  if (detectedLang !== "en") {
    localStorage.setItem("scanium-lang", detectedLang);

    // Construct redirect URL.
    const baseUrl = currentPath.startsWith("/website/") ? "/website" : "";
    const redirectUrl = `${baseUrl}/${detectedLang}/`;

    // Redirect to detected language.
    window.location.href = redirectUrl;
  }
}

// Run language detection on page load.
handleLanguageRedirect();

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
