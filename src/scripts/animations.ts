import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

const header = document.getElementById("site-header");
if (header) {
  const updateHeader = () => {
    if (window.scrollY > 24) {
      header.classList.add("header-solid");
    } else {
      header.classList.remove("header-solid");
    }
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (!prefersReducedMotion) {
  gsap.from("#hero-title span, #hero-title", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.08,
    ease: "power2.out",
  });

  if (!isSmallScreen) {
    gsap.to(".hero-bg-layer", {
      yPercent: 30,
      scrollTrigger: {
        trigger: ".hero",
        scrub: true,
      },
    });

    gsap.to(".hero-mid-layer", {
      yPercent: 15,
      scrollTrigger: {
        trigger: ".hero",
        scrub: true,
      },
    });
  }

  gsap.from(".feature-card", {
    y: 60,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".features-grid",
      start: "top 80%",
    },
  });

  gsap.from(".step", {
    y: 40,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".how-it-works",
      start: "top 70%",
      end: "bottom 50%",
      scrub: 1,
    },
  });

  gsap.utils.toArray<HTMLElement>(".use-case").forEach((el, i) => {
    gsap.from(el, {
      x: i % 2 === 0 ? -80 : 80,
      opacity: 0,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });
}
