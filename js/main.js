/**
 * BM Auto Repairs - Main JavaScript
 * Handles mobile menu, scroll effects, form validation, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ==========================================
    // UTILITY: Selectors
    // ==========================================
    const header = document.getElementById('site-header');
    const navToggle = document.getElementById('navToggle');
    const closeMenuBtn = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    const yearSpan = document.getElementById('year');
    const bookingForm = document.getElementById('bookingForm');

    // ==========================================
    // INITIALIZATION
    // ==========================================
    function init() {
        setDynamicYear();
        initMobileMenu();
        initScrollEffects();
        initRevealAnimations();
        initFormHandler();
    }

    // ==========================================
    // DYNAMIC YEAR
    // ==========================================
    function setDynamicYear() {
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    // ==========================================
    // MOBILE MENU
    // ==========================================
    function initMobileMenu() {
        if (!navToggle || !mobileMenu) return;

        navToggle.addEventListener('click', () => {
            const isActive = mobileMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isActive);
            body.classList.toggle('menu-open', isActive);
        });

        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', closeMobileMenu);
        }

        // Close menu when a link inside it is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('menu-open');
    }

    // ==========================================
    // SCROLL EFFECTS
    // ==========================================
    function initScrollEffects() {
        if (!header) return;

        // Add shadow/background to header on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // ==========================================
    // REVEAL ANIMATIONS (Intersection Observer)
    // ==========================================
    function initRevealAnimations() {
        const reveals = document.querySelectorAll('.reveal');
        if (!reveals.length) return;

        // Defensive check: if IntersectionObserver is unsupported, show everything.
        if (!('IntersectionObserver' in window)) {
            reveals.forEach(el => el.classList.add('visible'));
            return;
        }

        try {
            // Add 'animate' class only if observer exists to trigger the CSS transition
            reveals.forEach(el => el.classList.add('animate'));

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            }, { threshold: 0.1 });

            reveals.forEach(el => observer.observe(el));
        } catch (e) {
            console.error("Observer Error:", e);
            // Fallback: ensure everything is visible if observer fails
            reveals.forEach(el => {
                el.classList.remove('animate');
                el.classList.add('visible');
            });
        }
    }

    // ==========================================
    // FORM HANDLER (Front-end only)
    // ==========================================
    function initFormHandler() {
        if (!bookingForm) return;

        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const vehicle = document.getElementById('vehicle').value.trim();
            const service = document.getElementById('service').value;

            if (!name || !phone || !vehicle || !service) {
                alert('Please fill in all required fields.');
                return;
            }

            // Simulate frontend success state
            const formWrap = document.querySelector('.booking-form-wrap');
            formWrap.innerHTML = `
                <div style="text-align: center; padding: 3rem 1rem;">
                    <h3 class="font-display" style="color: var(--accent); margin-bottom: 1rem;">REQUEST PREPARED.</h3>
                    <p style="margin-bottom: 2rem;">Thank you, ${name}. Your inspection request has been prepared. Connect this form to the BM booking system backend to enable live submissions.</p>
                    <div style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-dim); border: 1px solid var(--border); display: inline-block; padding: 0.5rem 1rem;">SYSTEM STATUS: FRONT-END PROTOTYPE</div>
                </div>
            `;
        });
    }

    // Initialize App
    init();
});
