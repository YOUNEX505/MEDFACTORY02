/**
 * MedFactory — Product Details Page
 */
(function () {
  "use strict";

  const MF = window.MedFactory;
  const I18n = () => window.MedFactoryI18n;
  const Catalog = window.MedFactoryCatalog;
  const WHATSAPP = "201000000000";

  let currentProduct = null;
  let activeImageIndex = 0;
  let zoomInited = false;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "dh-001";

  const els = {
    pdp: document.getElementById("pdp"),
    notFound: document.getElementById("pdp-not-found"),
    breadcrumb: document.getElementById("breadcrumb"),
    thumbs: document.getElementById("gallery-thumbs"),
    mainImg: document.getElementById("gallery-main"),
    zoomWrap: document.getElementById("gallery-zoom"),
    zoomHint: document.getElementById("zoom-hint"),
    expand: document.getElementById("gallery-expand"),
    category: document.getElementById("pdp-category"),
    title: document.getElementById("pdp-title"),
    price: document.getElementById("pdp-price"),
    desc: document.getElementById("pdp-desc"),
    sku: document.getElementById("pdp-sku"),
    stock: document.getElementById("pdp-stock"),
    features: document.getElementById("pdp-features"),
    specs: document.querySelector("#pdp-specs tbody"),
    related: document.getElementById("related-products"),
    relatedLink: document.getElementById("related-category-link"),
    qty: document.getElementById("qty"),
    qtyMinus: document.getElementById("qty-minus"),
    qtyPlus: document.getElementById("qty-plus"),
    addCart: document.getElementById("btn-add-cart"),
    buyNow: document.getElementById("btn-buy-now"),
    whatsapp: document.getElementById("btn-whatsapp"),
    sticky: document.getElementById("pdp-sticky"),
    stickyPrice: document.getElementById("sticky-price"),
    stickyName: document.getElementById("sticky-name"),
    stickyAdd: document.getElementById("sticky-add-cart"),
    lightbox: document.getElementById("lightbox"),
    lightboxImg: document.getElementById("lightbox-img"),
    lightboxClose: document.getElementById("lightbox-close"),
    schema: document.getElementById("product-schema"),
  };

  function formatPrice(n) {
    return I18n() ? I18n().formatPrice(n) : `EGP ${n.toLocaleString("en-EG")}`;
  }

  function pf(product, field) {
    return I18n() ? I18n().getProductField(product, field) : product[field];
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function getQty() {
    return Math.max(1, parseInt(els.qty?.value || "1", 10) || 1);
  }

  function getGallery(product) {
    return product.gallery?.length ? product.gallery : [product.image];
  }

  function assetUrl(src) {
    return MF.resolveAsset(src);
  }

  function toAbsoluteImageUrl(src) {
    return new URL(assetUrl(src), window.location.origin).href;
  }

  function setMainImage(index) {
    if (!currentProduct) return;
    const gallery = getGallery(currentProduct);
    activeImageIndex = index;
    const src = assetUrl(gallery[index]);
    els.mainImg.src = src;
    els.mainImg.alt = `${pf(currentProduct, "name")} — ${index + 1}`;

    els.thumbs?.querySelectorAll(".pdp-thumb").forEach((btn, i) => {
      btn.classList.toggle("is-active", i === index);
      btn.setAttribute("aria-selected", i === index ? "true" : "false");
    });

    if (els.lightbox && !els.lightbox.hidden) {
      els.lightboxImg.src = src;
      els.lightboxImg.alt = els.mainImg.alt;
    }
  }

  function renderGallery(product) {
    const gallery = getGallery(product);
    els.thumbs.innerHTML = gallery
      .map(
        (src, i) => `
      <button type="button" class="pdp-thumb ${i === 0 ? "is-active" : ""}" role="tab" aria-selected="${i === 0}" aria-label="View image ${i + 1}" data-index="${i}">
        <img src="${assetUrl(src)}" alt="" width="80" height="80" loading="lazy">
      </button>
    `
      )
      .join("");

    els.thumbs.querySelectorAll(".pdp-thumb").forEach((btn) => {
      btn.addEventListener("click", () => {
        setMainImage(parseInt(btn.getAttribute("data-index"), 10));
      });
    });

    setMainImage(0);
  }

  function initZoom() {
    const wrap = els.zoomWrap;
    const img = els.mainImg;
    if (!wrap || !img) return;

    const canHover = window.matchMedia("(hover: hover)").matches;

    if (!canHover || MF.prefersReducedMotion) {
      if (els.zoomHint)
      els.zoomHint.textContent = I18n()
        ? I18n().t("product.zoomTap")
        : "Tap to enlarge";
      return;
    }

    if (zoomInited) return;
    zoomInited = true;
    wrap.classList.add("pdp-gallery__zoom--enabled");

    wrap.addEventListener("mousemove", (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = "scale(2.2)";
      wrap.classList.add("is-zooming");
    });

    wrap.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      wrap.classList.remove("is-zooming");
    });
  }

  function openLightbox() {
    if (!els.lightbox) return;
    els.lightboxImg.src = els.mainImg.src;
    els.lightboxImg.alt = els.mainImg.alt;
    els.lightbox.hidden = false;
    document.body.classList.add("menu-open");
    els.lightboxClose?.focus();
  }

  function closeLightbox() {
    if (!els.lightbox) return;
    els.lightbox.hidden = true;
    document.body.classList.remove("menu-open");
  }

  function renderBreadcrumb(product) {
    const catLabel = I18n()
      ? I18n().getCategoryLabel(product.category)
      : Catalog.CATEGORIES[product.category]?.label || "Products";
    els.breadcrumb.innerHTML = `
      <li><a href="index.html">${escapeHtml(I18n()?.t("product.breadcrumb.home") || "Home")}</a></li>
      <li><a href="products.html">${escapeHtml(I18n()?.t("product.breadcrumb.shop") || "Shop")}</a></li>
      <li><a href="products.html?category=${product.category}">${escapeHtml(catLabel)}</a></li>
      <li aria-current="page">${escapeHtml(pf(product, "name"))}</li>
    `;
  }

  function renderPrice(product) {
    const compare = product.compareAt
      ? `<span class="price price--compare">${formatPrice(product.compareAt)}</span>`
      : "";
    const badgeVal = pf(product, "badge") || product.badge;
    const badge = badgeVal ? `<span class="badge">${escapeHtml(badgeVal)}</span>` : "";

    els.price.innerHTML = `
      ${badge}
      <span class="price price--xl">${formatPrice(product.price)}</span>
      ${compare}
    `;
  }

  function renderStock(product) {
    if (product.inStock) {
      els.stock.innerHTML = `<span class="pdp-stock pdp-stock--in"><span class="pdp-stock__dot"></span> ${escapeHtml(I18n()?.t("product.inStock") || "In stock")}</span>`;
    } else {
      els.stock.innerHTML = `<span class="pdp-stock pdp-stock--out">${escapeHtml(I18n()?.t("product.outStock") || "Out of stock")}</span>`;
    }
  }

  function renderFeatures(product) {
    const list = pf(product, "features") || product.features || [];
    els.features.innerHTML = list.map((f) => `<li>${escapeHtml(f)}</li>`).join("");
  }

  function renderSpecs(product) {
    const specs = pf(product, "specifications") || product.specifications || {};
    els.specs.innerHTML = Object.entries(specs)
      .map(
        ([key, val]) =>
          `<tr><th scope="row">${escapeHtml(key)}</th><td>${escapeHtml(val)}</td></tr>`
      )
      .join("");
  }

  function renderRelatedCard(p) {
    const name = pf(p, "name");
    const badgeVal = pf(p, "badge") || p.badge;
    const badgeClass = p.badge === "Lab essential" ? "badge--accent" : "";
    const badge = badgeVal
      ? `<span class="badge ${badgeClass}">${escapeHtml(badgeVal)}</span>`
      : "";
    return `
      <article class="product-card">
        <div class="product-card__media">
          ${badge}
          <a href="product.html?id=${p.id}" class="product-card__link">
            <img src="${assetUrl(p.image)}" alt="${escapeHtml(name)}" width="400" height="400" loading="lazy">
          </a>
        </div>
        <div class="product-card__body">
          <p class="product-card__category">${escapeHtml(p.categoryLabel)}</p>
          <h3><a href="product.html?id=${p.id}">${escapeHtml(name)}</a></h3>
          <div class="product-card__price">
            <span class="price">${formatPrice(p.price)}</span>
          </div>
        </div>
      </article>
    `;
  }

  function renderRelated(product) {
    const related = Catalog.getRelated(product, 4);
    if (els.relatedLink) {
      els.relatedLink.href = `products.html?category=${product.category}`;
    }
  els.related.innerHTML =
      related.length > 0
        ? related.map(renderRelatedCard).join("")
        : `<p class="pdp-related-empty">${I18n()?.t("product.related.empty") || 'Browse our <a href="products.html">full catalog</a> for more training models.'}</p>`;
  }

  function updateMeta(product) {
    const name = pf(product, "name");
    const gallery = getGallery(product);
    const absoluteGallery = gallery.map(toAbsoluteImageUrl);
    document.title = I18n()
      ? I18n().t("product.pageTitle").replace("{name}", name)
      : `${name} — MedFactory`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = pf(product, "longDesc") || pf(product, "desc");

    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = `https://medfactory.eg/product?id=${product.id}`;
      document.head.appendChild(link);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      m.content = product.name;
      document.head.appendChild(m);
    } else {
      ogTitle.content = name;
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:image");
      m.content = absoluteGallery[0];
      document.head.appendChild(m);
    } else {
      ogImage.content = absoluteGallery[0];
    }

    if (els.schema) {
      els.schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: name,
        description: pf(product, "longDesc") || pf(product, "desc"),
        sku: product.sku,
        image: absoluteGallery,
        brand: { "@type": "Brand", name: "MedFactory" },
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "EGP",
          availability: product.inStock
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
        },
      });
    }
  }

  function buildWhatsAppUrl(product, qty) {
    const name = pf(product, "name");
    const text =
      I18n()?.isRtl()
        ? `مرحباً MedFactory، أريد طلب:\n\n*${name}*\nرمز: ${product.sku}\nالكمية: ${qty}\nالسعر: ${formatPrice(product.price)}\n\nيرجى تأكيد التوفر والشحن لمحافظتي.`
        : `Hi MedFactory, I'd like to order:\n\n*${name}*\nSKU: ${product.sku}\nQuantity: ${qty}\nPrice: ${formatPrice(product.price)} each\n\nPlease confirm availability and delivery to my city.`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  }

  function addToCart() {
    if (!currentProduct) return;
    const qty = getQty();
    const name = pf(currentProduct, "name");
    for (let i = 0; i < qty; i++) {
      MF.addToCart(name);
    }
  }

  function buyNow() {
    if (!currentProduct) return;
    addToCart();
    MF.showToast(I18n()?.t("toast.checkout") || "Redirecting to checkout…");
    setTimeout(() => {
      MF.showToast(
        I18n()?.t("toast.checkoutSoon") ||
          "Checkout coming soon — use WhatsApp to complete your order today."
      );
    }, 1200);
  }

  function initQuantity() {
    els.qtyMinus?.addEventListener("click", () => {
      const v = getQty();
      if (v > 1) els.qty.value = String(v - 1);
    });
    els.qtyPlus?.addEventListener("click", () => {
      els.qty.value = String(getQty() + 1);
    });
    els.qty?.addEventListener("change", () => {
      if (getQty() < 1) els.qty.value = "1";
      if (els.whatsapp && currentProduct) {
        els.whatsapp.href = buildWhatsAppUrl(currentProduct, getQty());
      }
    });
  }

  function initActions() {
    els.addCart?.addEventListener("click", addToCart);
    els.stickyAdd?.addEventListener("click", addToCart);
    els.buyNow?.addEventListener("click", buyNow);
  }

  function initStickyBar(product) {
    if (!els.sticky) return;

    els.stickyPrice.textContent = formatPrice(product.price);
    els.stickyName.textContent = product.name;

    const onScroll = () => {
      const gallery = document.querySelector(".pdp-gallery");
      if (!gallery) return;
      const past = gallery.getBoundingClientRect().bottom < 80;
      els.sticky.hidden = !past;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function renderProduct(product) {
    currentProduct = product;
    els.pdp.hidden = false;
    els.notFound.hidden = true;

    renderBreadcrumb(product);
    renderGallery(product);
    initZoom();
    if (els.zoomHint && I18n()) {
      const canHover = window.matchMedia("(hover: hover)").matches;
      els.zoomHint.textContent = canHover
        ? I18n().t("product.zoom")
        : I18n().t("product.zoomTap");
    }

    const catMap = { Simulation: "محاكاة", Endodontics: "علاج الجذور", Prosthodontics: "التعويضات", Kit: "طقم" };
    els.category.textContent = I18n()?.isRtl()
      ? catMap[product.categoryLabel] || product.categoryLabel
      : product.categoryLabel;
    els.title.textContent = pf(product, "name");
    els.desc.textContent = pf(product, "longDesc") || pf(product, "desc");
    els.sku.textContent = I18n()?.isRtl()
      ? `رمز المنتج: ${product.sku}`
      : `SKU: ${product.sku}`;

    renderPrice(product);
    renderStock(product);
    renderFeatures(product);
    renderSpecs(product);
    renderRelated(product);
    updateMeta(product);

    if (els.whatsapp) {
      els.whatsapp.href = buildWhatsAppUrl(product, getQty());
    }

    if (els.stickyPrice) els.stickyPrice.textContent = formatPrice(product.price);
    if (els.stickyName) els.stickyName.textContent = pf(product, "name");

    initStickyBar(product);
    MF.initReveal();
  }

  function showNotFound() {
    els.pdp.hidden = true;
    els.notFound.hidden = false;
    document.title = I18n()
      ? I18n().t("meta.title.notFound")
      : "Training model not found — MedFactory";
  }

  function init() {
    MF.initShell();

    const product = Catalog.getById(productId);
    if (!product) {
      showNotFound();
      return;
    }

    renderProduct(product);
    initQuantity();
    initActions();

    els.expand?.addEventListener("click", openLightbox);
    els.mainImg?.addEventListener("click", () => {
      if (!window.matchMedia("(hover: hover)").matches) openLightbox();
    });

    els.lightboxClose?.addEventListener("click", closeLightbox);
    els.lightbox?.addEventListener("click", (e) => {
      if (e.target === els.lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });

    window.addEventListener("mf:langchange", () => {
      if (currentProduct) {
        renderProduct(currentProduct);
      } else if (els.notFound && !els.notFound.hidden) {
        document.title = I18n().t("meta.title.notFound");
      }
      if (window.MedFactoryI18n) window.MedFactoryI18n.applyDom();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
