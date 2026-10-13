# Bloom & Petal — Project Overview

## Brand Identity & Aesthetic
**Bloom & Petal** is an artisanal, contemporary floral studio dedicated to fresh seasonal blooms, bespoke floral design, and thoughtful gifting. The visual identity pairs an earthy botanical palette of sage, forest green, warm ivory, and blush rose with luxury editorial typography—featuring **Cormorant Garamond** for expressive headings and **Manrope** for crisp, modern body text. The brand mark incorporates a delicate botanical lotus bloom (`fa-solid fa-spa`), carried consistently across the header, mobile drawer, footer, and favicon.

## Page Hierarchy & Architecture
The project includes complete, fully responsive static HTML pages organized within the `pages/` directory:

- **Home Page 1 (`pages/index.html`)**: Complete flagship experience featuring a studio introduction hero with floating authenticity badge, curated Occasions gallery, Atelier story, Same-day delivery highlights, Seasonal edit collection showcase, Floral services overview, Client testimonials carousel, and Floral Journal newsletter subscription.
- **Home Page 2 (`pages/homepage2.html` / `pages/home-2.html`)**: Distinct editorial studio experience organized around Signature floral arrangements, Curated moments grid, Concierge floral services, Sustainable sourcing philosophy, and Journal previews.
- **Flowers (`pages/flowers.html`)**: Complete floral collection catalog with Seasonal edits, Signature arrangements, Hand-tied bouquets, Bespoke compositions, and Delivery availability checker.
- **Occasions (`pages/occasions.html`)**: Occasion-led floral directory highlighting Birthday, Anniversary, Wedding, Congratulations, Thank You, and Sympathy arrangements with care details and fast filtering.
- **Services (`pages/services.html`)**: Dedicated floral services directory detailing Weddings & Events, Bespoke arrangements, Floral gifting, Corporate styling, Weekly subscriptions, and Seasonal installations.
- **About (`pages/about.html`)**: In-depth story of the Bloom & Petal floral atelier, flower sourcing philosophy, artisanal craft, sustainable practices, and studio florists.
- **Journal / Blog (`pages/blog.html`)**: Floral journal and news index featuring flower care advice, seasonal guides, botanical styling tips, and floral stories.
- **Blog Post Details (`pages/blog-page.html`)**: Detailed single journal post template with rich editorial typography, author metadata, related reading, and social sharing.
- **Contact (`pages/contact.html`)**: Studio location, opening hours, interactive map embed, floral consultation form, same-day delivery query, and studio details.
- **Login (`pages/login.html`)**: Focused floral studio account sign-in screen with clean validation and redirect to store catalog.
- **Register (`pages/register.html`)**: Studio membership creation screen with validation and account setup.
- **404 Error (`pages/404.html`)**: Custom error recovery page matching the luxury botanical aesthetic with recovery navigation links back to the catalog.
- **Coming Soon (`pages/coming-soon.html`)**: Pre-launch / seasonal launch teaser page with newsletter notification signup.

## Key Technical Capabilities

- **Light & Dark Themes**: Purpose-designed light and dark palettes with instant toggle and `localStorage` persistence.
- **Bidirectional Layout (LTR / RTL)**: Native right-to-left language support with mirrored navigation, transformed controls, and preserved photograph orientation.
- **Zero Third-Party JS Dependencies**: 100% vanilla JavaScript (`assets/js/main.js`), zero frameworks, zero build steps required.
- **Responsive Layout**: Fluid adaptability across mobile (360px–480px), tablet (640px–1024px), and wide desktop (1024px–1440px+) viewports.
- **Typography & Local Fonts**: Cormorant Garamond and Manrope provided as local TTF webfonts in `assets/fonts/` alongside Google Fonts fallback.
- **Performance & SEO**: Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), descriptive meta tags, preconnected font CDNs, and responsive image sizing.
