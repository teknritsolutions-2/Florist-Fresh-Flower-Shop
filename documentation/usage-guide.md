# Bloom & Petal — Usage Guide

## Getting Started Locally

Bloom & Petal is a completely static, zero-dependency web project. No build tools, compilers, or bundlers (like Webpack or Vite) are required.

To run the site locally:

### Option 1: Python 3
```sh
# Navigate to the project root
cd "Florist & Fresh Flower Shop"

# Start the local HTTP server
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser. The root `index.html` will automatically route you to `pages/index.html`.

### Option 2: Node.js / npx
```sh
npx serve .
```

### Option 3: VS Code Live Server
Right-click on `index.html` or `pages/index.html` and select **Open with Live Server**.

---

## File Structure Conventions

- **`index.html`**: Root redirect ensuring immediate access to the canonical home page at `pages/index.html`.
- **`assets/css/`**:
  - `style.css`: Primary styling, reset, typography, components, and layout.
  - `dark-mode.css`: Dedicated color overrides and component adjustments for dark theme.
  - `rtl.css`: Bidirectional layout rules for Arabic and Hebrew language visitors.
- **`assets/fonts/`**: Local TTF font files for offline use and zero-network font rendering.
- **`assets/images/`**: Organized by section (`hero/`, `occasions/`, `about/`, `services/`, `delivery/`, `seasonal/`).
- **`assets/js/`**:
  - `main.js`: Vanilla JS interaction logic (theme toggle, RTL toggle, reviews slider, mobile drawer, form validation).
  - `plugins/`: Directory for optional third-party or supplementary scripts.
- **`pages/`**: All website pages named in lowercase (`index.html`, `about.html`, `services.html`, etc.).
- **`documentation/`**: Technical guides, components breakdown, configuration notes, and font licenses.

---

## Adding or Editing Products & Bouquets

To update flowers, bouquets, or pricing:
1. Open the target page in `pages/` (e.g. `pages/flowers.html` or `pages/index.html`).
2. Locate the corresponding section (e.g. `<section class="flowers-collection">`).
3. Update the image `src`, category tag, bouquet title, description, or price tag.
4. Place new photography in `assets/images/` and use optimized WebP formats where possible.

---

## Testing Themes & RTL

1. Click the **Moon / Sun icon** in the header to toggle between light and dark modes. The choice persists across page navigation using `localStorage`.
2. Click the **RTL button** to mirror the layout for right-to-left languages.
