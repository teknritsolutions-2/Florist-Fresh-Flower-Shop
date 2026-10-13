# Bloom & Petal — Components Guide

## Core UI Components

### 1. Navigation & Header
- **Desktop Navbar**: Sticky header with brand logo mark, primary navigation links (Home dropdown, Flowers, Occasions, Services, About, Blog, Contact), Theme toggle, RTL toggle, and Cart count indicator.
- **Home Submenu Dropdown**: Accessible disclosure menu (`.nav-item.has-dropdown`) allowing users to easily toggle between **Home Page 1** (Fresh Flower Shop) and **Home Page 2** (Luxury Floral Studio).
- **Mobile Menu Drawer**: Responsive navigation drawer entering from the side, supporting full keyboard trap, touch-friendly touch targets, theme toggles, and RTL switching.
- **Theme & Direction Controls**: Instant theme switcher (Light / Dark mode) and layout switcher (LTR / RTL) persisting state in browser `localStorage`.

### 2. Hero Sections
- **Home 1 Hero (`.home-flowers-hero`)**: Editorial layout with delicate typography, eyebrow badge (`— Hand-selected, seasonally arranged`), call-to-action buttons, and featured studio imagery with decorative divider.
- **Home 2 Hero (`.home2-hero`)**: High-fashion floral studio layout with large display typography, signature bloom card preview, and atelier studio notes.
- **Inner Page Banners**: Focused hero headers across Flowers, Occasions, Services, About, Blog, and Contact with contextual subtitles and breadcrumbs.

### 3. Collection Showcases & Grids
- **Flowers Collection Showcase (`.flowers-collection-showcase`)**: 2-column editorial header with `.flowers-collection-intro-heading` properly grouping label and title, followed by an asymmetric grid featuring a large showcase card, signature box, and compact product cards.
- **Product Tiles & Cards**: Clean cards with category pill, title, description, and hover micro-animations (e.g. arrow slide and image zoom).

### 4. Occasion Gallery
- **Occasion Cards (`.occasion-card`)**: Responsive image cards with subtle gradient overlays, occasion tags (Birthday, Anniversary, Wedding, Sympathy, Thank You, Congratulations), and interactive hover zoom.

### 5. Testimonials & Reviews Slider
- **Testimonial Slider (`[data-testimonials]`)**: Interactive client feedback slider supporting automatic rotation (with pause on hover/focus), manual previous/next controls, dot indicator navigation, and dynamic testimonial count indicator.

### 6. Service Cards & Directory Items
- **Services Grid (`.services-directory-grid`)**: 3-column responsive card grid with icon containers (`fa-solid` icons), bold serif titles, detailed descriptions, and subtle border hover states.

### 7. Forms & Interactive Inputs
- **Newsletter Subscription (`.newsletter-form`)**: Clean email input with client-side regex email validation, feedback notifications (success/error states), and clear privacy notices.
- **Same-Day Delivery Checker (`.delivery-availability`)**: Interactive postal area input allowing visitors to verify local delivery availability before ordering.
- **Consultation / Contact Form (`.contact-form`)**: Structured form for bespoke arrangements, event styling inquiries, and delivery questions.

### 8. Footer & Utility Controls
- **Accordion Footer Navigation**: Multi-column links on desktop that automatically collapse into touch-friendly accordion disclosures on mobile (`<= 639px`).
- **Back to Top Button (`.back-to-top`)**: Floating utility button appearing after scrolling down, smoothly returning visitors to the top of the page.
- **Skip Link (`.skip-link`)**: Accessibility skip link positioned at the very top of each page for keyboard and screen reader navigation.
