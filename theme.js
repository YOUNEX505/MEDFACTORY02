/**
 * MedFactory — Premium theme utilities (search, FAB, dock, back-to-top)
 */
window.MedFactoryTheme = (function () {
  "use strict";

  const WA_NUMBER = "201000000000";
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function t(key) {
    return window.MedFactoryI18n?.t(key) || key;
  }

  function injectShell() {
    if (document.getElementById("mf-search-modal")) return;

    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="search-modal" id="mf-search-modal" role="dialog" aria-modal="true" aria-labelledby="search-modal-title" hidden>
        <div class="search-modal__backdrop" data-search-close tabindex="-1"></div>
        <div class="search-modal__panel">
          <header class="search-modal__header">
            <h2 id="search-modal-title" class="visually-hidden" data-i18n="theme.search.title">Search products</h2>
            <form class="search-modal__form" id="search-form" action="products.html" method="get" role="search">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input type="search" name="q" id="search-input" autocomplete="off" data-i18n-placeholder="products.search">
              <button type="button" class="search-modal__close" data-search-close data-i18n-aria="theme.search.close">&times;</button>
            </form>
          </header>
          <div class="search-modal__body">
            <p class="search-modal__hint" data-i18n="theme.search.hint">Try: dummy head, endo teeth, dental casts…</p>
            <div class="search-modal__quick">
              <span class="search-modal__quick-label" data-i18n="theme.search.popular">Popular</span>
              <div class="search-modal__tags">
                <a href="products.html?category=dummy-heads" class="search-tag" data-i18n="products.filter.dummy">Dummy Heads</a>
                <a href="products.html?category=endo-teeth" class="search-tag" data-i18n="products.filter.endo">Endo Teeth</a>
                <a href="products.html?category=dental-casts" class="search-tag" data-i18n="products.filter.casts">Dental Casts</a>
                <a href="product.html?id=dh-001" class="search-tag" data-i18n="home.hero.cta1">Shop Dummy Head</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="https://wa.me/${WA_NUMBER}" class="wa-fab" id="wa-fab" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <button type="button" class="back-to-top" id="back-to-top" aria-label="Back to top" hidden>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>
      </button>

      <nav class="mobile-dock" id="mobile-dock" aria-label="Mobile navigation">
        <a href="index.html" class="mobile-dock__item" data-dock="home">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>
          <span data-i18n="theme.dock.home">Home</span>
        </a>
        <a href="products.html" class="mobile-dock__item" data-dock="shop">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span data-i18n="theme.dock.shop">Shop</span>
        </a>
        <a href="https://wa.me/${WA_NUMBER}" class="mobile-dock__item mobile-dock__item--wa" target="_blank" rel="noopener noreferrer" data-dock="whatsapp">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span data-i18n="theme.dock.whatsapp">WhatsApp</span>
        </a>
        <a href="contact.html" class="mobile-dock__item" data-dock="contact">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span data-i18n="theme.dock.contact">Contact</span>
        </a>
      </nav>
    `
    );

    if (window.MedFactoryI18n) window.MedFactoryI18n.applyDom();
    setActiveDockItem();
  }

  function setActiveDockItem() {
    const dock = document.getElementById("mobile-dock");
    if (!dock) return;
    const path = window.location.pathname.split("/").pop() || "index.html";
    dock.querySelectorAll(".mobile-dock__item").forEach((item) => {
      item.classList.remove("is-active");
    });
    if (path === "index.html" || path === "") {
      dock.querySelector('[data-dock="home"]')?.classList.add("is-active");
    } else if (path === "products.html" || path === "product.html") {
      dock.querySelector('[data-dock="shop"]')?.classList.add("is-active");
    } else if (path === "contact.html") {
      dock.querySelector('[data-dock="contact"]')?.classList.add("is-active");
    }
  }

  function openSearch() {
    const modal = document.getElementById("mf-search-modal");
    const input = document.getElementById("search-input");
    if (!modal) return;
    modal.hidden = false;
    document.body.classList.add("search-open");
    requestAnimationFrame(() => input?.focus());
  }

  function closeSearch() {
    const modal = document.getElementById("mf-search-modal");
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("search-open");
  }

  function initSearch() {
    injectShell();

    document.querySelectorAll("[data-search-open]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openSearch();
      });
    });

    document.querySelectorAll("[data-search-close]").forEach((el) => {
      el.addEventListener("click", closeSearch);
    });

    const form = document.getElementById("search-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = document.getElementById("search-input")?.value.trim();
      window.location.href = q
        ? `products.html?q=${encodeURIComponent(q)}`
        : "products.html";
    });

    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      }
      if (e.key === "Escape") closeSearch();
    });
  }

  function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    const onScroll = () => {
      btn.hidden = window.scrollY < 480;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  }

  function initDockVisibility() {
    const dock = document.getElementById("mobile-dock");
    const fab = document.getElementById("wa-fab");
    if (!dock) return;

    if (document.body.classList.contains("page-product")) {
      dock.hidden = true;
      document.body.classList.remove("has-mobile-dock");
      if (fab) fab.classList.add("wa-fab--pdp");
      return;
    }

    document.body.classList.add("has-mobile-dock");
  }

  function init() {
    injectShell();
    initSearch();
    initBackToTop();
    initDockVisibility();

    window.addEventListener("mf:langchange", () => {
      if (window.MedFactoryI18n) window.MedFactoryI18n.applyDom();
      const fab = document.getElementById("wa-fab");
      if (fab) fab.setAttribute("aria-label", t("btn.whatsapp"));
      const btt = document.getElementById("back-to-top");
      if (btt) btt.setAttribute("aria-label", t("theme.backTop"));
    });
  }

  return { init, openSearch, closeSearch };
})();
