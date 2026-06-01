/**
 * MedFactory — Products Page
 * Filter · Search · Sort · Pagination
 */
(function () {
  "use strict";

  const MF = window.MedFactory;
  const I18n = () => window.MedFactoryI18n;
  const Catalog = window.MedFactoryCatalog;
  const PER_PAGE = 8;
  const CATEGORIES = Catalog.CATEGORIES;
  const PRODUCTS = Catalog.PRODUCTS;

  const state = {
    category: "all",
    search: "",
    sort: "featured",
    page: 1,
  };

  const gridEl = document.getElementById("products-grid");
  const emptyEl = document.getElementById("products-empty");
  const countEl = document.getElementById("products-count");
  const paginationEl = document.getElementById("pagination");
  const searchInput = document.getElementById("product-search");
  const sortSelect = document.getElementById("product-sort");
  const filterButtons = document.querySelectorAll("[data-filter]");
  const mobileFilterBtn = document.getElementById("filter-toggle");
  const filterSidebar = document.getElementById("filter-sidebar");
  const filterOverlay = document.getElementById("filter-overlay");
  const clearFiltersBtn = document.getElementById("clear-filters");
  const filterCloseBtn = document.getElementById("filter-close");
  const filterApplyBtn = document.getElementById("filter-apply");
  const emptyResetBtn = document.getElementById("empty-reset");

  function formatPrice(amount) {
    return I18n() ? I18n().formatPrice(amount) : `EGP ${amount.toLocaleString("en-EG")}`;
  }

  function pName(p) {
    return I18n() ? I18n().getProductField(p, "name") : p.name;
  }

  function pDesc(p) {
    return I18n() ? I18n().getProductField(p, "desc") : p.desc;
  }

  function pBadge(p) {
    if (!p.badge) return "";
    const b = I18n() ? I18n().getProductField(p, "badge") : p.badge;
    return b || p.badge;
  }

  function pCategoryLabel(p) {
    return I18n()
      ? I18n().getProductCategoryLabel(p.categoryLabel)
      : p.categoryLabel;
  }

  function getFilteredProducts() {
    let list = [...PRODUCTS];

    if (state.category !== "all") {
      list = list.filter((p) => p.category === state.category);
    }

    if (state.search.trim()) {
      const q = state.search.trim().toLowerCase();
      list = list.filter((p) => {
        const hay = [
          p.name,
          p.desc,
          pName(p),
          pDesc(p),
          p.categoryLabel,
          I18n() ? I18n().getCategoryLabel(p.category) : CATEGORIES[p.category].label,
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      });
    }

    switch (state.sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        list.sort((a, b) => pName(a).localeCompare(pName(b), I18n()?.isRtl() ? "ar" : "en"));
        break;
      case "newest":
        list.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "featured":
      default:
        list.sort((a, b) => b.featured - a.featured);
        break;
    }

    return list;
  }

  function getPaginatedSlice(list) {
    const totalPages = Math.max(1, Math.ceil(list.length / PER_PAGE));
    if (state.page > totalPages) state.page = totalPages;
    if (state.page < 1) state.page = 1;

    const start = (state.page - 1) * PER_PAGE;
    return {
      items: list.slice(start, start + PER_PAGE),
      total: list.length,
      totalPages,
    };
  }

  function renderProductCard(product) {
    const name = pName(product);
    const badgeVal = pBadge(product);
    const badgeClass =
      product.badge === "Lab essential" || badgeVal === "أساسي للمعمل"
        ? "badge--accent"
        : "";
    const badgeHtml = badgeVal
      ? `<span class="badge ${badgeClass}">${badgeVal}</span>`
      : "";
    const addLabel = I18n() ? I18n().t("btn.addCart") : "Add to cart";
    const compareHtml = product.compareAt
      ? `<span class="price price--compare">${formatPrice(product.compareAt)}</span>`
      : "";

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-card__media">
          ${badgeHtml}
          <a href="product.html?id=${product.id}" class="product-card__link" aria-label="View ${name}">
            <img src="${MF.resolveAsset(product.image)}" alt="${name}" width="400" height="400" loading="lazy">
          </a>
          <button type="button" class="product-card__quick-add" data-product="${name}">${addLabel}</button>
        </div>
        <div class="product-card__body">
          <p class="product-card__category">${pCategoryLabel(product)}</p>
          <div class="product-card__rating" aria-label="4.9 out of 5">
            <span class="stars stars--sm" aria-hidden="true">★★★★★</span>
            <span class="product-card__rating-score">${product.rating || "4.9"}</span>
          </div>
          <h3><a href="product.html?id=${product.id}">${name}</a></h3>
          <p class="product-card__desc">${pDesc(product)}</p>
          <div class="product-card__price">
            <span class="price">${formatPrice(product.price)}</span>
            ${compareHtml}
          </div>
        </div>
      </article>
    `;
  }

  function renderPagination(totalPages) {
    if (!paginationEl) return;

    if (totalPages <= 1) {
      paginationEl.innerHTML = "";
      paginationEl.hidden = true;
      return;
    }

    paginationEl.hidden = false;
    let html = "";

    html += `<button type="button" class="pagination__btn" data-page="prev" ${
      state.page <= 1 ? "disabled" : ""
    } aria-label="${I18n()?.t("products.pagination.prev") || "Previous page"}">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
    </button>`;

    html += `<div class="pagination__pages" role="group" aria-label="${I18n()?.t("products.pagination.pages") || "Pages"}">`;

    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === state.page;
      html += `<button type="button" class="pagination__page ${
        isActive ? "is-active" : ""
      }" data-page="${i}" ${isActive ? 'aria-current="page"' : ""}>${i}</button>`;
    }

    html += `</div>`;

    html += `<button type="button" class="pagination__btn" data-page="next" ${
      state.page >= totalPages ? "disabled" : ""
    } aria-label="${I18n()?.t("products.pagination.next") || "Next page"}">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
    </button>`;

    paginationEl.innerHTML = html;

    paginationEl.querySelectorAll("[data-page]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-page");
        if (val === "prev" && state.page > 1) state.page -= 1;
        else if (val === "next" && state.page < totalPages) state.page += 1;
        else if (val !== "prev" && val !== "next") state.page = parseInt(val, 10);
        render();
        scrollToGrid();
      });
    });
  }

  function updateCount(total, showing) {
    if (!countEl) return;

    if (total === 0) {
      countEl.textContent = I18n() ? I18n().t("products.empty.title") : "No models found";
      return;
    }

    if (I18n()) {
      countEl.textContent = I18n()
        .t("products.count")
        .replace("{n}", String(showing))
        .replace("{total}", String(total));
    } else {
      countEl.textContent = `Showing ${showing} of ${total} training models`;
    }
  }

  function updateFilterUI() {
    filterButtons.forEach((btn) => {
      const filter = btn.getAttribute("data-filter");
      const isActive = filter === state.category;
      btn.classList.toggle("filter-chip--active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    if (sortSelect && sortSelect.value !== state.sort) {
      sortSelect.value = state.sort;
    }
  }

  function syncURL() {
    const params = new URLSearchParams();
    if (state.category !== "all") params.set("category", state.category);
    if (state.search) params.set("q", state.search);
    if (state.sort !== "featured") params.set("sort", state.sort);
    if (state.page > 1) params.set("page", String(state.page));

    const qs = params.toString();
    const url = qs
      ? `${window.location.pathname}?${qs}`
      : window.location.pathname;
    window.history.replaceState({}, "", url);
  }

  function readURL() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && CATEGORIES[cat]) state.category = cat;
    const q = params.get("q");
    if (q) state.search = q;
    const sort = params.get("sort");
    if (sort) state.sort = sort;
    const page = parseInt(params.get("page") || "1", 10);
    if (!Number.isNaN(page)) state.page = page;
    if (searchInput) searchInput.value = state.search;
  }

  function render() {
    const filtered = getFilteredProducts();
    const { items, total, totalPages } = getPaginatedSlice(filtered);

    updateCount(total, items.length);
    updateFilterUI();
    syncURL();

    if (!gridEl) return;

    if (total === 0) {
      gridEl.innerHTML = "";
      if (emptyEl) emptyEl.hidden = false;
    } else {
      if (emptyEl) emptyEl.hidden = true;
      gridEl.style.opacity = "0";
      gridEl.innerHTML = items.map(renderProductCard).join("");
      requestAnimationFrame(() => {
        gridEl.style.transition = "opacity 0.25s ease-out";
        gridEl.style.opacity = "1";
      });
      gridEl.querySelectorAll(".product-card__quick-add").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          MF.addToCart(btn.getAttribute("data-product") || "Product");
        });
      });
    }

    renderPagination(totalPages);
  }

  function scrollToGrid() {
    const toolbar = document.querySelector(".shop-toolbar");
    if (!toolbar) return;
    const header = document.getElementById("header");
    const offset = (header?.offsetHeight || 72) + 16;
    const top = toolbar.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: MF.prefersReducedMotion ? "auto" : "smooth",
    });
  }

  function openMobileFilters() {
    filterSidebar?.classList.add("is-open");
    filterOverlay?.classList.add("is-visible");
    document.body.classList.add("menu-open");
    mobileFilterBtn?.setAttribute("aria-expanded", "true");
  }

  function closeMobileFilters() {
    filterSidebar?.classList.remove("is-open");
    filterOverlay?.classList.remove("is-visible");
    document.body.classList.remove("menu-open");
    mobileFilterBtn?.setAttribute("aria-expanded", "false");
  }

  function initFilters() {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        state.category = btn.getAttribute("data-filter") || "all";
        state.page = 1;
        render();
        closeMobileFilters();
      });
    });

    const resetAll = () => {
      state.category = "all";
      state.search = "";
      state.sort = "featured";
      state.page = 1;
      if (searchInput) searchInput.value = "";
      if (sortSelect) sortSelect.value = "featured";
      render();
      closeMobileFilters();
    };

    clearFiltersBtn?.addEventListener("click", resetAll);
    emptyResetBtn?.addEventListener("click", resetAll);
    filterCloseBtn?.addEventListener("click", closeMobileFilters);
    filterApplyBtn?.addEventListener("click", closeMobileFilters);
  }

  function initSearch() {
    if (!searchInput) return;

    let debounce;
    searchInput.addEventListener("input", () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        state.search = searchInput.value;
        state.page = 1;
        render();
      }, 280);
    });
  }

  function initSort() {
    sortSelect?.addEventListener("change", () => {
      state.sort = sortSelect.value;
      state.page = 1;
      render();
    });
  }

  function initMobileFilterDrawer() {
    mobileFilterBtn?.addEventListener("click", () => {
      const open = mobileFilterBtn.getAttribute("aria-expanded") === "true";
      if (open) closeMobileFilters();
      else openMobileFilters();
    });

    filterOverlay?.addEventListener("click", closeMobileFilters);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobileFilters();
    });
  }

  function init() {
    readURL();
    MF.initShell();
    MF.initReveal();
    initFilters();
    initSearch();
    initSort();
    initMobileFilterDrawer();
    render();
    window.addEventListener("mf:langchange", () => {
      render();
      if (window.MedFactoryI18n) window.MedFactoryI18n.applyDom();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
