/**
 * GitHub Pages project sites: https://user.github.io/REPO_NAME/
 * Injects <base href="/REPO_NAME/"> so relative assets (images/, style.css, *.js) resolve correctly.
 * Override: <meta name="mf-base-path" content="/your-repo/">
 */
(function () {
  "use strict";

  const FILE_SEGMENT = /\.(html?|css|js|json|xml|txt|map|png|jpe?g|webp|gif|svg|ico)$/i;

  function detectBasePath() {
    const meta = document.querySelector('meta[name="mf-base-path"]');
    if (meta?.content != null) {
      const manual = meta.content.trim();
      if (!manual || manual === "/") return "";
      return manual.endsWith("/") ? manual : `${manual}/`;
    }

    const { hostname, pathname } = window.location;
    if (hostname !== "github.io" && !hostname.endsWith(".github.io")) {
      return "";
    }

    const parts = pathname.split("/").filter(Boolean);
    if (!parts.length || FILE_SEGMENT.test(parts[0])) {
      return "";
    }

    return `/${parts[0]}/`;
  }

  const basePath = detectBasePath();
  window.MF_BASE_PATH = basePath;

  if (basePath) {
    const base = document.createElement("base");
    base.href = new URL(basePath, window.location.href).href;
    document.head.appendChild(base);
  }
})();