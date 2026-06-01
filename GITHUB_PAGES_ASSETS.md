# GitHub Pages — Asset audit report

Generated after full project scan for deployment compatibility.

## Root cause (fixed)

| Issue | Impact | Fix |
|-------|--------|-----|
| Folder named `IMG` but code referenced `images/` | Worked on Windows locally; **404 on GitHub Pages** (Linux is case-sensitive) | Renamed `IMG/` → `images/` |
| Project URL `github.io/REPO/` without base | Some relative URLs break when path has no trailing slash | `base-path.js` injects `<base href="/REPO/">` |
| `base-path.js` loaded after `style.css` | Base not applied early enough | Moved script **before** stylesheet on all pages |

## Path audit summary

| Check | Result |
|-------|--------|
| Absolute paths like `/images/...` in HTML/CSS/JS | **None found** |
| All `img src` use relative `images/...` | **OK** |
| `background-image: url()` in CSS | **1** — inline SVG data URI only (no file path) |
| Favicon | **None** defined |
| Video `<source>` | **None** |
| Local font files | **None** — Google Fonts CDN only |
| Case-sensitive folder name | **Fixed** — `images` (lowercase) |

## Referenced image files (all present)

| File | Used in |
|------|---------|
| `images/articulator.jpg` | index, products-data |
| `images/dental-casts-kit.jpg` | index, about, contact, products-data |
| `images/dummy-head-open.jpg` | index, about, products-data |
| `images/dummy-head-skull.jpg` | products-data |
| `images/endo-teeth-bulk.jpg` | about, products-data |
| `images/endo-teeth-red-roots.jpg` | index, about, products-data |
| `images/mandible-cast.jpg` | products-data |
| `images/typodont-1.jpg` | products-data |
| `images/typodont-flatlay.jpg` | index, about, products-data |
| `images/typodont-open.jpg` | index, products-data |

## Unused assets (present, not referenced — OK)

| File | Note |
|------|------|
| `images/suture-kit.jpg` | Available for future products |
| `images/typodont-side.jpg` | Available for future products |
| `images/typodont-toys.jpg` | Available for future products |

## Missing assets

**None** — every referenced path matches a file under `images/`.

## Modified files

| File | Change |
|------|--------|
| `IMG/` → `images/` | Folder rename (case + name) |
| `base-path.js` | Robust GitHub Pages base detection + optional meta override |
| `common.js` | Normalize `/images/...`, fix img/source/video/icon paths |
| `products-data.js` | Document `IMAGE_DIR` constant |
| `index.html` | Load `base-path.js` before `style.css` |
| `products.html` | Same |
| `product.html` | Same |
| `about.html` | Same |
| `contact.html` | Same |
| `README.md` | Deployment notes (if updated) |

## Deploy checklist

1. Commit the **`images/`** folder (all `.jpg` files).
2. Keep **`.nojekyll`** at repo root.
3. GitHub **Settings → Pages →** deploy from `main` branch, `/ (root)`.
4. Open site at `https://USERNAME.github.io/REPOSITORY-NAME/` (with trailing slash).
5. Optional override: `<meta name="mf-base-path" content="/REPOSITORY-NAME/">` in `<head>`.

## GitHub Pages compatibility

**Yes** — relative asset paths, correct lowercase `images/` folder, base-path handling for project sites, and no broken local asset references.
