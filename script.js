/**
 * MedFactory Homepage — page-specific scripts
 */
(function () {
  "use strict";

  const MF = window.MedFactory;

  function initFaq() {
    const triggers = document.querySelectorAll(".faq-item__trigger");
    if (!triggers.length) return;

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const expanded = trigger.getAttribute("aria-expanded") === "true";
        const panelId = trigger.getAttribute("aria-controls");
        const panel = panelId ? document.getElementById(panelId) : null;

        triggers.forEach((other) => {
          if (other === trigger) return;
          other.setAttribute("aria-expanded", "false");
          const otherPanelId = other.getAttribute("aria-controls");
          const otherPanel = otherPanelId
            ? document.getElementById(otherPanelId)
            : null;
          if (otherPanel) otherPanel.hidden = true;
        });

        if (expanded) {
          trigger.setAttribute("aria-expanded", "false");
          if (panel) panel.hidden = true;
        } else {
          trigger.setAttribute("aria-expanded", "true");
          if (panel) panel.hidden = false;
        }
      });
    });
  }

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

  function initNavHighlight() {
    if (window.innerWidth < 1024) return;

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('.nav__list a[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    const map = new Map();
    navLinks.forEach((link) => {
      const id = link.getAttribute("href")?.slice(1);
      if (id) map.set(id, link);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((l) => (l.style.color = ""));
          const active = map.get(entry.target.id);
          if (active) active.style.color = "var(--dark-900)";
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      if (map.has(s.id)) observer.observe(s);
    });
  }

  function updateHomeProducts() {
    const I18n = window.MedFactoryI18n;
    if (!I18n) return;
    const catalog = window.MedFactoryCatalog?.PRODUCTS || [];

    document.querySelectorAll("[data-product-id][data-product-field]").forEach((el) => {
      const id = el.getAttribute("data-product-id");
      const field = el.getAttribute("data-product-field");
      const product = catalog.find((p) => p.id === id);
      if (!product) return;

      if (field === "categoryLabel") {
        el.textContent = I18n.getProductCategoryLabel(product.categoryLabel);
      } else {
        el.textContent = I18n.getProductField(product, field);
      }
    });

    const priceMap = [
      { id: "dh-001", sel: "#product-dummy-head .price" },
      { id: "et-001", sel: "#product-endo-teeth .price:not(.price--unit)" },
      { id: "dc-001", sel: "#product-dental-casts .price" },
    ];
    priceMap.forEach(({ id, sel }) => {
      const product = catalog.find((p) => p.id === id);
      const el = document.querySelector(sel);
      if (product && el) el.textContent = I18n.formatPrice(product.price);
    });
  }

  function init() {
    MF.initShell();
    MF.initReveal();
    MF.initQuickAdd();
    initFaq();
    initStatsCounter();
    initNavHighlight();
    updateHomeProducts();
    window.addEventListener("mf:langchange", () => {
      updateHomeProducts();
      if (window.MedFactoryI18n) window.MedFactoryI18n.applyDom();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
