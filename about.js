/**
 * MedFactory — About Page
 */
(function () {
  "use strict";

  const MF = window.MedFactory;

  function initStatsCounter() {
    const statsSection = document.querySelector(".stats");
    if (!statsSection) return;

    const numbers = statsSection.querySelectorAll(".stat__number[data-count]");
    if (!numbers.length) return;

    const animateValue = (el) => {
      const target = parseFloat(el.getAttribute("data-count") || "0");
      const decimal = parseInt(el.getAttribute("data-decimal") || "0", 10);
      const duration = MF.prefersReducedMotion ? 0 : 1200;
      const start = performance.now();

      const tick = (now) => {
        const elapsed = now - start;
        const progress = duration === 0 ? 1 : Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;

        el.textContent =
          decimal > 0 ? current.toFixed(decimal) : Math.floor(current).toString();

        if (progress < 1) requestAnimationFrame(tick);
        else {
          el.textContent =
            decimal > 0 ? target.toFixed(decimal) : String(Math.floor(target));
        }
      };

      requestAnimationFrame(tick);
    };

    if (MF.prefersReducedMotion) {
      numbers.forEach((el) => {
        const target = el.getAttribute("data-count");
        const decimal = el.getAttribute("data-decimal");
        el.textContent =
          decimal && parseInt(decimal, 10) > 0
            ? parseFloat(target).toFixed(parseInt(decimal, 10))
            : target;
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target
            .querySelectorAll(".stat__number[data-count]")
            .forEach(animateValue);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(statsSection);
  }

  function init() {
    MF.initShell();
    MF.initReveal();
    initStatsCounter();
    window.addEventListener("mf:langchange", () => {
      if (window.MedFactoryI18n) window.MedFactoryI18n.applyDom();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
