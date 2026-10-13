# Bloom & Petal — Configuration Guide

## Studio & Business Details

To update the studio contact details, hours, and branding across the site, update the relevant fields in `pages/*.html`:

| Setting | Default Value | Location |
| --- | --- | --- |
| **Studio Name** | `Bloom & Petal Floral Studio` | Header, Footer, and Meta titles |
| **Studio Address** | `123 Garden Avenue, Hyderabad, India` | Contact page & Footer |
| **Phone Number** | `+91 98765 43210` | Contact page & Footer |
| **Email Address** | `hello@bloomandpetal.com` | Contact page & Footer |
| **Opening Hours** | `Mon – Sat: 9:00 AM – 7:00 PM` | Contact page & Footer |
| **Delivery Windows** | `Same-Day Delivery (Orders before 2:00 PM)` | Delivery banner & Flowers page |
| **Currency** | `USD ($)` / `INR (₹)` | Price tags across catalog and cards |
| **Google Maps Embed** | Google Maps coordinate embed for store visit | `pages/contact.html` iframe embed |

## Color Palette Tokens

All colors are controlled centrally via CSS custom properties in `assets/css/style.css`:

```css
:root {
    --color-primary: #24382f;        /* Deep Forest Green (Brand Primary) */
    --color-primary-dark: #182820;   /* Rich Dark Green */
    --color-primary-light: #344a40;  /* Sage Leaf Green */
    --color-accent: #d98f8f;         /* Blush Rose Accent */
    --color-accent-dark: #c87575;    /* Coral Petal Dark */
    --color-accent-light: #e9b7b7;   /* Soft Rose Tint */
    --color-background: #fbf8f4;     /* Warm Cream Background */
    --color-surface: #ffffff;        /* Pure White Surface */
    --color-surface-soft: #f3eee8;   /* Soft Oat Surface */
    --color-text: #1e211f;           /* Charcoal Text */
    --color-text-light: #686d68;     /* Muted Olive Text */
    --color-border: #e5ded6;         /* Gentle Sand Border */
}
```

Dark mode tokens are maintained in `assets/css/dark-mode.css` under the `[data-theme="dark"]` selector.

## Typography Configuration

- **Heading Font**: Cormorant Garamond (`--font-heading: "Cormorant Garamond", Georgia, serif;`)
- **Body Font**: Manrope (`--font-body: "Manrope", Arial, sans-serif;`)
- **Local Font Files**: Located in `assets/fonts/` (`cormorant-regular.ttf`, `cormorant-italic.ttf`, `manrope-regular.ttf`, `manrope-medium.ttf`) and declared with `@font-face` at the top of `assets/css/style.css`.
- **Google Fonts CDN**: Linked in the `<head>` of HTML pages as a high-speed fallback.

## State Management (`localStorage`)

The site uses standard browser `localStorage` keys for persisting visitor preferences:

- `theme`: Stores active theme (`"light"` or `"dark"`).
- `direction`: Stores active layout orientation (`"ltr"` or `"rtl"`).
- `cartCount`: Stores the simulated shopping cart count.
