(() => {
    "use strict";

    const root = document.documentElement;
    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const dropdownItem = document.querySelector(".has-dropdown");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const themeToggles = document.querySelectorAll(".theme-toggle");
    const rtlToggles = document.querySelectorAll(".rtl-toggle");
    const cartButtons = document.querySelectorAll(".cart-button");
    const newsletterForm = document.querySelector(".newsletter-form");
    const newsletterInput = document.querySelector("#newsletter-email");
    const newsletterField = document.querySelector(".newsletter-field");
    const newsletterStatus = document.querySelector(".newsletter-status");
    const deliveryForm = document.querySelector(".delivery-availability");
    const deliveryInput = deliveryForm?.querySelector("input[name=\"delivery-area\"]");
    const deliveryStatus = document.querySelector(".delivery-status");
    const footerGroupToggles = document.querySelectorAll(".footer-group-toggle");
    const mobileFooterQuery = window.matchMedia("(max-width: 639px)");
    const backToTop = document.querySelector(".back-to-top");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealSections = document.querySelectorAll("main > section");

    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedDirection = localStorage.getItem("direction");
    const savedCartCount = Number.parseInt(localStorage.getItem("cartCount") || "2", 10);
    const cartCount = Number.isFinite(savedCartCount) && savedCartCount >= 0 ? savedCartCount : 2;

    function initializeSectionReveal() {
        if (!revealSections.length) return;
        revealSections.forEach((section) => section.classList.add("reveal-section"));
        const showAll = () => revealSections.forEach((section) => section.classList.add("is-visible"));
        if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
            showAll();
            return;
        }
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
        revealSections.forEach((section) => observer.observe(section));
    }

    initializeSectionReveal();

    function initializeTestimonials() {
        const area = document.querySelector("[data-testimonials]");
        if (!area) return;
        const items = [...area.querySelectorAll("[data-testimonial]")];
        const dots = [...area.querySelectorAll("[data-testimonial-dot]")];
        const counter = area.querySelector("[data-testimonial-counter]");
        const previous = area.querySelector("[data-testimonial-prev]");
        const next = area.querySelector("[data-testimonial-next]");
        const editorialNumber = area.querySelector(".testimonials-editorial-number");
        let activeIndex = 0;
        let timer = null;
        let hovering = false;
        let focusing = false;

        const stopAutoplay = () => {
            if (timer) window.clearInterval(timer);
            timer = null;
        };

        const startAutoplay = () => {
            if (reducedMotionQuery.matches || hovering || focusing) return;
            stopAutoplay();
            timer = window.setInterval(() => setActive(activeIndex + 1), 6000);
        };

        function setActive(nextIndex) {
            activeIndex = (nextIndex + items.length) % items.length;
            items.forEach((item, index) => {
                const active = index === activeIndex;
                item.hidden = !active;
                item.classList.toggle("is-active", active);
            });
            dots.forEach((dot, index) => {
                const active = index === activeIndex;
                dot.classList.toggle("is-active", active);
                dot.setAttribute("aria-current", String(active));
            });
            const number = String(activeIndex + 1).padStart(2, "0");
            if (counter) counter.textContent = `${number} / ${String(items.length).padStart(2, "0")}`;
            if (editorialNumber) editorialNumber.textContent = number;
        }

        previous?.addEventListener("click", () => { stopAutoplay(); setActive(activeIndex - 1); });
        next?.addEventListener("click", () => { stopAutoplay(); setActive(activeIndex + 1); });
        dots.forEach((dot, index) => dot.addEventListener("click", () => { stopAutoplay(); setActive(index); }));
        area.addEventListener("mouseenter", () => { hovering = true; stopAutoplay(); });
        area.addEventListener("mouseleave", () => { hovering = false; startAutoplay(); });
        area.addEventListener("focusin", () => { focusing = true; stopAutoplay(); });
        area.addEventListener("focusout", (event) => {
            if (area.contains(event.relatedTarget)) return;
            focusing = false;
            startAutoplay();
        });
        setActive(0);
        startAutoplay();
    }

    initializeTestimonials();

    function setTheme(theme, persist = true) {
        root.dataset.theme = theme;
        if (persist) localStorage.setItem("theme", theme);
        const dark = theme === "dark";
        themeToggles.forEach((toggle) => {
            toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
        });
    }

    function setDirection(direction, persist = true) {
        root.dir = direction;
        if (persist) localStorage.setItem("direction", direction);
        const isRtl = direction === "rtl";
        rtlToggles.forEach((toggle) => toggle.setAttribute("aria-pressed", String(isRtl)));
    }

    function closeMobileMenu() {
        if (!mobileMenu || !menuToggle) return;
        mobileMenu.classList.remove("is-open");
        mobileMenu.hidden = true;
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    }

    function closeDropdown() {
        if (!dropdownItem || !dropdownToggle) return;
        dropdownItem.classList.remove("is-open");
        dropdownToggle.setAttribute("aria-expanded", "false");
    }

    setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"), false);
    setDirection(savedDirection || "ltr", false);
    cartButtons.forEach((button) => {
        const count = button.querySelector(".cart-count");
        if (count) count.textContent = String(cartCount);
        button.setAttribute("aria-label", `Shopping bag, ${cartCount} item${cartCount === 1 ? "" : "s"}`);
    });

    function setNewsletterMessage(message = "", state = "") {
        if (!newsletterStatus || !newsletterField || !newsletterInput) return;
        newsletterStatus.textContent = message;
        newsletterStatus.classList.toggle("is-error", state === "error");
        newsletterField.classList.toggle("is-invalid", state === "error");
        newsletterInput.setAttribute("aria-invalid", String(state === "error"));
    }

    if (newsletterForm && newsletterInput) {
        newsletterForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = newsletterInput.value.trim();
            if (!email || !newsletterInput.validity.valid) {
                setNewsletterMessage("Please enter a valid email address to join the journal.", "error");
                newsletterInput.focus();
                return;
            }
            setNewsletterMessage("Thank you — you are on the list for our next floral note.", "success");
            newsletterForm.reset();
        });

        newsletterInput.addEventListener("input", () => {
            if (newsletterInput.getAttribute("aria-invalid") === "true") setNewsletterMessage();
        });
    }

    if (deliveryForm && deliveryInput && deliveryStatus) {
        deliveryForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const area = deliveryInput.value.trim();
            deliveryStatus.classList.remove("is-error");
            if (!area) {
                deliveryStatus.textContent = "Please enter your delivery area.";
                deliveryStatus.classList.add("is-error");
                deliveryInput.focus();
                return;
            }
            if (area.length < 3) {
                deliveryStatus.textContent = "Please check the delivery area and try again.";
                deliveryStatus.classList.add("is-error");
                deliveryInput.focus();
                return;
            }
            deliveryStatus.textContent = "Thanks — same-day availability is ready to confirm for your area.";
        });

        deliveryInput.addEventListener("input", () => {
            deliveryStatus.textContent = "";
            deliveryStatus.classList.remove("is-error");
        });
    }

    function syncFooterAccordions() {
        footerGroupToggles.forEach((toggle) => {
            const panel = document.getElementById(toggle.getAttribute("aria-controls"));
            if (!panel) return;
            if (mobileFooterQuery.matches) {
                toggle.setAttribute("aria-expanded", "false");
                panel.hidden = true;
            } else {
                toggle.setAttribute("aria-expanded", "true");
                panel.hidden = false;
            }
        });
    }

    footerGroupToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            if (!mobileFooterQuery.matches) return;
            const panel = document.getElementById(toggle.getAttribute("aria-controls"));
            if (!panel) return;
            const expanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", String(!expanded));
            panel.hidden = expanded;
        });
    });

    mobileFooterQuery.addEventListener("change", syncFooterAccordions);
    syncFooterAccordions();

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: reducedMotionQuery.matches ? "auto" : "smooth" });
        });
    }

    themeToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            setTheme(root.dataset.theme === "dark" ? "light" : "dark");
        });
    });

    rtlToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            setDirection(root.dir === "rtl" ? "ltr" : "rtl");
        });
    });

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            const open = !mobileMenu.classList.contains("is-open");
            if (open) {
                mobileMenu.hidden = false;
                mobileMenu.classList.add("is-open");
                menuToggle.setAttribute("aria-expanded", "true");
                menuToggle.setAttribute("aria-label", "Close navigation menu");
                menuToggle.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
            } else {
                closeMobileMenu();
            }
        });
    }

    if (dropdownToggle && dropdownItem) {
        dropdownToggle.addEventListener("click", () => {
            const open = !dropdownItem.classList.contains("is-open");
            if (open) {
                dropdownItem.classList.add("is-open");
                dropdownToggle.setAttribute("aria-expanded", "true");
            } else {
                closeDropdown();
            }
        });
    }

    document.addEventListener("click", (event) => {
        if (dropdownItem && !dropdownItem.contains(event.target)) closeDropdown();
        if (header && mobileMenu && !header.contains(event.target)) closeMobileMenu();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeDropdown();
            dropdownToggle?.blur();
            closeMobileMenu();
        }
    });

    function setScrolledState() {
        header?.classList.toggle("is-scrolled", window.scrollY > 10);
        if (backToTop) backToTop.hidden = window.scrollY < 360;
    }

    window.addEventListener("scroll", setScrolledState, { passive: true });
    setScrolledState();
})();
 