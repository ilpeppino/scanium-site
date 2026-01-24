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
      toggleActions: "restart none none reverse",
    },
  });

  const stepsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".how-it-works",
      start: "top 70%",
      end: "bottom 50%",
      scrub: 1,
    },
  });

  stepsTimeline.from(".step", {
    y: 40,
    opacity: 0,
    stagger: 0.2,
  });

  const howLine = document.querySelector(".how-it-works svg path");
  if (howLine) {
    const lineLength = howLine.getTotalLength();
    gsap.fromTo(
      howLine,
      { strokeDasharray: lineLength, strokeDashoffset: lineLength },
      {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: ".how-it-works",
          start: "top 75%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }

  const stepPulse = gsap.to(".step > div", {
    boxShadow: "0 0 18px rgba(0, 212, 255, 0.45)",
    repeat: -1,
    yoyo: true,
    duration: 1.6,
    ease: "sine.inOut",
    stagger: 0.2,
    paused: true,
  });

  ScrollTrigger.create({
    trigger: ".how-it-works",
    start: "top 70%",
    end: "bottom 50%",
    onEnter: () => stepPulse.play(),
    onEnterBack: () => stepPulse.play(),
    onLeave: () => stepPulse.pause(0),
    onLeaveBack: () => stepPulse.pause(0),
  });

  gsap.utils.toArray(".use-case").forEach((el, i) => {
    gsap.from(el, {
      x: i % 2 === 0 ? -80 : 80,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "restart none none reverse",
      },
    });
  });

  gsap.from("#download .glow-border", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#download",
      start: "top 80%",
      toggleActions: "restart none none reverse",
    },
  });

  gsap.from("footer", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
      toggleActions: "restart none none reverse",
    },
  });
}
