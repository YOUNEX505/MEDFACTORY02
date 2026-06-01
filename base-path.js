/**
 * GitHub Pages project sites live at https://user.github.io/REPO_NAME/
 * Image paths like images/foo.jpg must be prefixed with /REPO_NAME/ on those hosts.
 */
(function () {
  "use strict";

  function detectBasePath() {
    const host = window.location.hostname;
    if (host !== "github.io" && !host.endsWith(".github.io")) {
      return "";
    }

    const parts = window.location.pathname.split("/").filter(Boolean);
    if (!parts.length) return "";

    const first = parts[0];
    if (/\.(html?|css|js|json|xml|txt|map|png|jpe?g|webp|gif|svg)$/i.test(first)) {
      return "";
    }

    return `/${first}/`;
  }

  const basePath = detectBasePath();
  window.MF_BASE_PATH = basePath;

  if (basePath) {
    const base = document.createElement("base");
    base.href = basePath;
    document.head.appendChild(base);
  }
})();
