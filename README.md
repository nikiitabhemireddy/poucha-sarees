# Poucha Sarees — Website

A complete, responsive front-end for Poucha Sarees, built with plain HTML, CSS and JavaScript (no build tools required).

## Files

```
poucha-sarees/
├── index.html        → all page content and sections
├── css/style.css      → all styling (colors, type, layout, animations)
├── js/script.js       → nav, scroll reveal, testimonial slider, forms
└── assets/logo.jpg     → your logo, used in the header and footer
```

## Run it in VS Code

1. Unzip/copy this `poucha-sarees` folder anywhere on your machine and open it in VS Code (`File → Open Folder`).
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel if you don't have it.
3. Right-click `index.html` → **Open with Live Server**. The site opens at `http://localhost:5500` and reloads automatically as you edit.

No `npm install`, no build step — it's plain HTML/CSS/JS, so double-clicking `index.html` in a file explorer also works, though Live Server gives you auto-refresh.

## What to customize first

- **Product photos** — the collection and product cards currently use CSS gradient "swatches" (`.swatch-kanjivaram`, `.swatch-banarasi`, etc. in `style.css`) as color-accurate placeholders instead of real photography, to avoid using anyone else's images. Replace a swatch div with an `<img>` tag once you have your own product photos.
- **Prices & product names** — edit directly inside `index.html` under the `#collections` and `#featured` sections.
- **Contact details** — phone, email and studio address are in the `#contact` section and the footer.
- **Forms** — the newsletter and enquiry forms currently show a confirmation message in the browser only (no email is actually sent). To make them functional, connect them to a form service like Formspree, Getform, or your own backend endpoint, and swap the `fetch`/submit logic in `js/script.js`.
- **Colors/fonts** — all design tokens are declared at the top of `css/style.css` under `:root` — change the hex values there to retint the whole site.

## Structure of the page

Header/nav → Hero → Scrolling weave ticker → Brand story → Collections (6 weave types) → Craftsmanship → Featured products → Testimonials → Newsletter → Contact → Footer.
