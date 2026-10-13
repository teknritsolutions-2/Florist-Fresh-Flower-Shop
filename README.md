# Bloom & Petal — Florist & Fresh Flower Shop

A responsive, contemporary florist and fresh flower shop website built with semantic HTML5, modern CSS3, and vanilla JavaScript. Bloom & Petal features an earthy botanical palette of sage, forest green, warm ivory, and blush rose, paired with Cormorant Garamond and Manrope typography, local font assets, and zero build tool dependencies.

## Live Site

**[https://teknritsolutions-2.github.io/Florist-Fresh-Flower-Shop/](https://teknritsolutions-2.github.io/Florist-Fresh-Flower-Shop/)**

---

## Technical Specifications

### File Structure

```
template-name/
├── assets/
│   ├── css/
│   │   ├── style.css (main styles)
│   │   ├── dark-mode.css
│   │   └── rtl.css
│   ├── js/
│   │   ├── main.js
│   │   ├── dashboard.js (if applicable)
│   │   └── plugins/
│   ├── images/
│   └── fonts/
├── pages/
│   ├── index.html (home)
│   ├── about.html
│   ├── services.html
│   ├── blog.html
│   ├── contact.html
│   └── [template-specific pages]
├── documentation/
└── README.md
```

---

## Project Overview

Bloom & Petal is designed as an artisanal floral studio and online fresh flower shop. The website provides two distinct homepage experiences alongside a comprehensive floral collection catalog, occasion-based gift directory, bespoke floral services, atelier story, journal, contact consultations, and customer account screens.

### Major Pages

All website pages reside in the `pages/` directory:

- **`index.html`**: Flagship Home Page 1 with studio introduction, Occasion cards, Atelier craft story, Same-day delivery highlights, Seasonal edit collection showcase, Floral services overview, Client reviews carousel, and Journal newsletter subscription.
- **`homepage2.html`**: Editorial Home Page 2 featuring Signature collection arrangements, Curated moments grid, Concierge floral services, Sustainable sourcing philosophy, and Journal preview.
- **`flowers.html`**: Complete Floral Collection catalog with Seasonal edits, Signature arrangements, Hand-tied bouquets, Bespoke compositions, and Delivery availability checker.
- **`occasions.html`**: Occasion-specific directory highlighting Birthday, Anniversary, Wedding, Congratulations, Thank You, and Sympathy arrangements with care details and fast filtering.
- **`services.html`**: Dedicated floral services directory detailing Weddings & Events, Bespoke arrangements, Floral gifting, Corporate styling, Weekly subscriptions, and Seasonal installations.
- **`about.html`**: In-depth story of the Bloom & Petal floral atelier, flower sourcing philosophy, artisanal craft, sustainable practices, and studio florists.
- **`blog.html`**: Floral journal and news index featuring flower care advice, seasonal guides, botanical styling tips, and floral stories.
- **`blog-page.html`**: Detailed single journal post template with rich editorial typography, author metadata, related reading, and social sharing.
- **`contact.html`**: Studio location, opening hours, interactive map embed, floral consultation form, same-day delivery query, and studio details.
- **`login.html`**: Focused floral studio account sign-in screen with clean validation and redirect to store catalog.
- **`register.html`**: Studio membership creation screen with validation and account setup.
- **`404.html`**: Custom error recovery page matching the luxury botanical aesthetic with recovery navigation links back to the catalog.
- **`coming-soon.html`**: Pre-launch / seasonal launch teaser page with newsletter notification signup.

---

## Key Features

- **Light & Dark Themes**: Purpose-designed light and dark palettes with instant toggle and `localStorage` persistence.
- **Bidirectional Support (LTR / RTL)**: Native right-to-left language support with mirrored navigation, transformed controls, and preserved photograph orientation.
- **Zero Third-Party JS Dependencies**: 100% vanilla JavaScript (`assets/js/main.js`), zero frameworks, zero build steps required.
- **Responsive Layout**: Fluid adaptability across mobile (360px–480px), tablet (640px–1024px), and wide desktop (1024px–1440px+) viewports.
- **Typography & Local Fonts**: Cormorant Garamond and Manrope provided as local TTF webfonts in `assets/fonts/` alongside Google Fonts fallback.
- **Performance & SEO**: Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), descriptive meta tags, preconnected font CDNs, and responsive image sizing.

---

## Local Static Usage

No build tools, compilation, or package manager installations are required. Serve the project root using any local static file server:

```sh
# Using Python 3
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your web browser. The root `index.html` will automatically route to `pages/index.html`.

---

## Documentation

Full project documentation is available in the `documentation/` folder:

- [`documentation/project-overview.md`](documentation/project-overview.md): Brand identity, architectural breakdown, and page hierarchy.
- [`documentation/usage-guide.md`](documentation/usage-guide.md): Local development, image management, and content customization.
- [`documentation/components.md`](documentation/components.md): Deep-dive into UI components, navigation, carousels, and forms.
- [`documentation/configuration.md`](documentation/configuration.md): Studio details, opening hours, color tokens, and Google Maps embed setup.
- [`documentation/image-credits.md`](documentation/image-credits.md): Photography attribution and licenses.
- [`documentation/cormorant-garamond-license.txt`](documentation/cormorant-garamond-license.txt): Cormorant Garamond SIL Open Font License.
- [`documentation/manrope-license.txt`](documentation/manrope-license.txt): Manrope SIL Open Font License.
