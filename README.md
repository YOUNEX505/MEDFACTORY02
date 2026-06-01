111111111111111111111111111111111# MedFactory Homepage

Premium dental training products storefront — static HTML/CSS/JS prototype.

## Open locally

1. Open `index.html` in a browser, or
2. Run a local server:

```bash
cd C:\Users\HP\Projects\medfactory
npx --yes serve .
```

Then visit `http://localhost:3000`

Example product page: `http://localhost:3000/product.html?id=dh-001`

## Files

- `index.html` — homepage
- `about.html` — about us (story, mission, vision, trust, quality, shipping)
- `products.html` — shop page (filter, search, sort, pagination)
- `product.html` — product details (gallery, zoom, specs, related)
- `products-data.js` — shared product catalog
- `style.css` — mobile-first design system + components
- `common.js` — shared header, cart, toast
- `script.js` — homepage-specific scripts
- `products.js` — shop page logic
- `product.js` — product page logic
- `about.js` — about page animations & stats

## Language

- Default language: **Arabic** (stored in `localStorage` key `mf-lang`)
- Use the **عربي / EN** switcher in the header on any page

## Product images

Real product photos live in `images/` (sourced from your uploads).

### Git / GitHub Pages

Images only appear on GitHub if the `images/` folder is **committed and pushed**:

```bash
git add images/
git add base-path.js .nojekyll
git commit -m "Add product images and GitHub Pages asset paths"
git push
```

In the repo: **Settings → Pages → Deploy from branch** (usually `main`, folder `/` root).

For project sites (`https://USER.github.io/REPO-NAME/`), `base-path.js` sets the correct base URL so `images/*.jpg` load correctly.

Required image files (referenced by the site):

- `articulator.jpg`
- `dental-casts-kit.jpg`
- `dummy-head-open.jpg`
- `dummy-head-skull.jpg`
- `endo-teeth-bulk.jpg`
- `endo-teeth-red-roots.jpg`
- `mandible-cast.jpg`
- `typodont-1.jpg`
- `typodont-flatlay.jpg`
- `typodont-open.jpg`

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| Shop | `products.html` |
| Product | `product.html?id=...` |
| About | `about.html` |
| Contact | `contact.html` |

## Customize

- Replace WhatsApp link: search for `wa.me/201000000000`
- Edit translations in `i18n.js` and `products-i18n.js`
