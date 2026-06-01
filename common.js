/**
 * MedFactory — Shared UI (header, cart, toast, reveal)
 */
window.MedFactory = (function () {
  "use strict";

  function resolveAsset(path) {
    if (!path || /^https?:\/\//i.test(path) || path.startsWith("data:")) {
      return path;
    }

    const base = window.MF_BASE_PATH || "";
    const normalized = path.replace(/^\.?\//, "");

    if (!base) return normalized;

    return base.endsWith("/") ? base + normalized : `${base}/${normalized}`;
  }

  function fixAssetPaths() {
    document.querySelectorAll("img[src]").forEach((img) => {
      const src = img.getAttribute("src");
      if (!src || /^https?:\/\//i.test(src) || src.startsWith("data:")) return;

      const fixed = resolveAsset(src);
      if (fixed !== src) img.src = fixed;
    });
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let cartCount = 0;
  let toastTimeout = null;

  const header = () => document.getElementById("header");
  const announcement = () => document.querySelector(".announcement");
  const cartBtn = () => document.querySelector(".cart-btn");
  const cartCountEl = () => document.querySelector(".cart-btn__count");
  const toast = () => document.getElementById("toast");
  const toastMessage = () => document.getElementById("toast-message");

  function updateCartUI() {
    const btn = cartBtn();
    const countEl = cartCountEl();
    if (!btn || !countEl) return;
    btn.classList.toggle("has-items", cartCount > 0);
    countEl.textContent = String(cartCount);
    const label = window.MedFactoryI18n
      ? `${window.MedFactoryI18n.t("nav.cart")}, ${cartCount}`
      : `Cart, ${cartCount} item${cartCount === 1 ? "" : "s"}`;
    btn.setAttribute("aria-label", label);
  }

  function showToast(message) {
    const t = toast();
    const msg = toastMessage();
    if (!t || !msg) return;

    msg.textContent = message;
    t.hidden = false;
    t.classList.add("is-visible");

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      t.classList.remove("is-visible");
      setTimeout(() => {
        t.hidden = true;
      }, 320);
    }, 4000);
  }

  function addToCart(productName) {
    cartCount += 1;
    updateCartUI();
    const msg = window.MedFactoryI18n
      ? `${productName} — ${window.MedFactoryI18n.t("toast.added")}`
      : `${productName} added to cart`;
    showToast(msg);

    const btn = cartBtn();
    if (btn && !prefersReducedMotion) {
      btn.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.15)" },
          { transform: "scale(1)" },
        ],
        { duration: 300, easing: "ease-out" }
      );
    }
  }

  function initStickyHeader() {
    const el = header();
    if (!el) return;

    const onScroll = () => {
      el.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initAnnouncement() {
    const bar = announcement();
    const closeBtn = document.querySelector(".announcement__close");
    if (!bar || !closeBtn) return;

    if (sessionStorage.getItem("mf-announcement-dismissed") === "1") {
      bar.classList.add("is-hidden");
    }

    closeBtn.addEventListener("click", () => {
      bar.classList.add("is-hidden");
      sessionStorage.setItem("mf-announcement-dismissed", "1");
    });
  }

  function initMobileNav() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("nav");
    if (!menuToggle || !nav) return;

    const closeMenu = () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        window.MedFactoryI18n?.t("nav.menu.open") || "Open menu"
      );
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };

    const openMenu = () => {
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute(
        "aria-label",
        window.MedFactoryI18n?.t("nav.menu.close") || "Close menu"
      );
      nav.classList.add("is-open");
      document.body.classList.add("menu-open");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      if (isOpen) closeMenu();
      else openMenu();
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth >= 1024) closeMenu();
      },
      { passive: true }
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const id = anchor.getAttribute("href");
        if (!id || id === "#") return;

        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        const el = header();
        const bar = announcement();
        const headerOffset =
          (el?.offsetHeight || 72) +
          (bar && !bar.classList.contains("is-hidden") ? bar.offsetHeight : 0);

        const top =
          target.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
          top,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      });
    });
  }

  function initReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
  }

  function initNewsletter() {
    const form = document.querySelector(".newsletter");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input?.value) {
        const msg = window.MedFactoryI18n
          ? window.MedFactoryI18n.t("toast.newsletter")
          : "Thanks — you're on the list for restock alerts.";
        showToast(msg);
        input.value = "";
      }
    });
  }

  function initQuickAdd() {
    document.querySelectorAll(".product-card__quick-add").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(btn.getAttribute("data-product") || "Product");
      });
    });
  }

  function initShell() {
    fixAssetPaths();

    if (window.MedFactoryI18n) {
      window.MedFactoryI18n.initSwitcher();
    }
    initStickyHeader();
    initAnnouncement();
    initMobileNav();
    initSmoothScroll();
    initNewsletter();
    updateCartUI();

    if (window.MedFactoryTheme) {
      window.MedFactoryTheme.init();
    }

    window.addEventListener("mf:langchange", () => {
      updateCartUI();
    });

    const el = header();
    if (document.body.classList.contains("header-solid") && el) {
      el.classList.add("is-scrolled");
    }
  }

  return {
    initShell,
    initReveal,
    initQuickAdd,
    showToast,
    addToCart,
    updateCartUI,
    resolveAsset,
    fixAssetPaths,
    prefersReducedMotion,
  };
})();
