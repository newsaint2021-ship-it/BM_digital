/**
 * BM Auto Repairs - Main Application Script
 * Consolidated single-file architecture.
 */

// ==========================================
// SITE DATA
// ==========================================
const siteData = {
    divisions: {
        mechanical: { num: "01", title: "Mechanical", heroTitle: "MECHANICAL ENGINEERING.", cardStatement: "Keeping the machine beneath the bodywork performing as it should.", cardCaps: ["Diagnostics", "Servicing", "Engine", "Brakes", "Electrical"], heroCopy: "Diagnostics, maintenance and mechanical repair built around accuracy, reliability and proper diagnosis.", img: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?q=80&w=1600&auto=format&fit=crop", intro: "We combine technical expertise with modern diagnostic equipment to keep your vehicle performing at its best. From routine maintenance to complex engine diagnostics, we focus on proper diagnosis before repair.", groups: [{ title: "01 / Diagnose", items: ["Computer Diagnostics", "Fault Finding", "Electrical Diagnostics"] }, { title: "02 / Maintain", items: ["Scheduled Servicing", "Oil & Filter Service", "Fleet Maintenance"] }, { title: "03 / Repair", items: ["Engine", "Transmission", "Clutch", "Brakes", "Suspension", "Steering", "Cooling"] }], target: "Your vehicle is making a noise, warning light has appeared, performance has changed, or it is due for service.", cta: "BOOK A MECHANICAL INSPECTION", bookingValue: "Mechanical" },
        collision: { num: "02", title: "Collision & Refinishing", heroTitle: "COLLISION RESTORATION.", cardStatement: "Restoring structural integrity and cosmetic finish after impact.", cardCaps: ["Accident Repair", "Panel Beating", "Chassis Repair", "Spray Painting", "Colour Matching"], heroCopy: "Complete accident repair and refinishing. We restore vehicles to factory specifications, managing the entire process from assessment to final paint.", img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80=w=1600&auto=format&fit=crop", intro: "Collision repair is not simply cosmetic. The goal is to restore the vehicle properly. We manage the entire process from damage assessment to final refinishing and quality control.", groups: [{ title: "01 / Assess", items: ["Damage Evaluation", "Chassis Measurement", "Insurance Coordination"] }, { title: "02 / Repair", items: ["Panel Beating", "Dent Repair", "Chassis Repair", "Bumper Repair"] }, { title: "03 / Refinish", items: ["Spray Painting", "Colour Matching", "Paint Correction"] }], target: "Your vehicle has been involved in an accident, has body damage, dents, paint damage or requires restoration.", cta: "REQUEST A DAMAGE ASSESSMENT", bookingValue: "Collision & Refinishing" },
        wrapping: { num: "03", title: "Wrapping & Surface", heroTitle: "SURFACE TRANSFORMATION.", cardStatement: "Transforming, protecting and branding the vehicle surface.", cardCaps: ["Vehicle Wrapping", "PPF", "Ceramic Coating", "Window Tint", "Commercial Branding"], heroCopy: "Vehicle transformation, protection and visual branding. We offer full colour changes, commercial branding, and paint protection films.", img: "https://images.unsplash.com/photo-1605164599901-db7f68c4b1f5?q=80=w=1600&auto=format&fit=crop", intro: "This division handles the transformation, protection, and branding of your vehicle. From full colour changes to protective paint films, we treat the surface with precision.", groups: [{ title: "01 / Transform", items: ["Colour Change", "Vehicle Wrapping", "Chrome Delete"] }, { title: "02 / Protect", items: ["Paint Protection Film", "Ceramic Coating", "Window Tint"] }, { title: "03 / Brand", items: ["Commercial Vehicle Graphics", "Fleet Branding", "Decals"] }], target: "You want to protect, transform, brand or change the appearance of your vehicle.", cta: "REQUEST A WRAP CONSULTATION", bookingValue: "Wrapping & Surface" },
        fleet: { num: "04", title: "Fleet Services", heroTitle: "FLEET UPTIME.", cardStatement: "Minimising downtime and maximising operational capacity for businesses.", cardCaps: ["Preventative Maintenance", "Scheduled Servicing", "Fleet Inspections", "Priority Support", "Reporting"], heroCopy: "B2B vehicle maintenance and uptime management. We help businesses reduce unnecessary downtime through preventative maintenance and structured servicing.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80=w=1600&auto=format&fit=crop", intro: "Vehicles generate revenue. Downtime costs money. BM helps reduce unnecessary downtime through preventative maintenance and structured servicing for businesses operating multiple vehicles.", groups: [{ title: "01 / Plan", items: ["Maintenance Planning", "Fleet Inspections"] }, { title: "02 / Maintain", items: ["Scheduled Servicing", "Preventative Maintenance"] }, { title: "03 / Support", items: ["Priority Support", "Downtime Reduction", "Reporting"] }], target: "You operate multiple vehicles and need predictable maintenance, reduced downtime and centralised support.", cta: "START A FLEET CONVERSATION", bookingValue: "Fleet Services" }
    },
    projects: [
        { id: "p01", name: "Panel & Paint Restoration [Placeholder]", division: "Collision & Refinishing", status: "Completed", desc: "Full body accident repair and refinishing.", beforeImg: "https://images.unsplash.com/photo-1605559424843-9e4c6bf6d792?q=80=w=1200&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80=w=1200&auto=format&fit=crop" },
        { id: "p02", name: "Engine Diagnostics & Repair [Placeholder]", division: "Mechanical", status: "Completed", desc: "Fault finding and internal engine repair.", beforeImg: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da77?q=80=w=1200&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80=w=1200&auto=format&fit=crop" },
        { id: "p03", name: "Commercial Fleet Wrap [Placeholder]", division: "Wrapping & Surface", status: "Completed", desc: "Full vehicle colour change and branding.", beforeImg: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80=w=1200&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1605164599901-db7f68c4b1f5?q=80=w=1200&auto=format&fit=crop" },
        { id: "p04", name: "Suspension Overhaul [Placeholder]", division: "Mechanical", status: "Completed", desc: "Complete suspension replacement and alignment.", beforeImg: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?q=80=w=1200&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80=w=1200&auto=format&fit=crop" }
    ],
    faqs: [
        { q: "How do I book an inspection?", a: "You can book an inspection directly through our website using the 'Book Inspection' button. This will guide you through a short process to tell us what you need." },
        { q: "What happens during an inspection?", a: "Our team will assess the vehicle to properly diagnose the issue before recommending any work. This ensures we fix the root cause, not just the symptoms." },
        { q: "Do I need to bring my vehicle in first?", a: "Yes, an initial inspection is required for us to provide an accurate quote and understand the scope of work." },
        { q: "Can I request a quote?", a: "Yes, after the inspection, we provide a clear quote detailing what needs attention and why, before any work begins." },
        { q: "What types of vehicles do you work on?", a: "We work on a variety of vehicles across our divisions. Please specify your vehicle during the booking process for confirmation." },
        { q: "Do you handle accident/collision repairs?", a: "Yes, our Collision & Refinishing division is equipped to handle accident repairs, panel beating, and refinishing." },
        { q: "Do you offer wrapping and surface services?", a: "Yes, our Wrapping & Surface division handles vehicle wrapping, PPF, ceramic coating, and commercial branding." },
        { q: "Do you work with fleets?", a: "Yes, we have a dedicated Fleet Services division focused on B2B maintenance, scheduled servicing, and uptime management." }
    ]
};


// ==========================================
// MAIN APP CLASS
// ==========================================
class App {
    constructor() {
        this.mainContent = document.getElementById('main-content');
        this.header = document.getElementById('header');
        this.navToggle = document.getElementById('navToggle');
        this.closeBtn = document.getElementById('closeMenu');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.projectModal = document.getElementById('projectModal');
        this.body = document.body;
        this.bookingState = null;
    }

    // ==========================================
    // INITIALIZATION
    // ==========================================
    init() {
        window.addEventListener('hashchange', () => this.render());
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
        this.navToggle.addEventListener('click', () => this.toggleMenu());
        this.closeBtn.addEventListener('click', () => this.closeMenu());
        this.mobileMenu.addEventListener('click', (e) => { if (e.target.closest('a')) this.closeMenu(); });
        this.projectModal.addEventListener('click', (e) => { 
            if (e.target.id === 'projectModal' || e.target.classList.contains('project-modal-close')) this.closeProjectModal(); 
        });
        
        const yearSpan = document.getElementById('year');
        if (yearSpan) yearSpan.textContent = new Date().getFullYear();
        
        this.render();
    }

    handleScroll() {
        if (window.scrollY > 50) this.header.classList.add('scrolled');
        else this.header.classList.remove('scrolled');
    }

    // ==========================================
    // MOBILE MENU
    // ==========================================
    toggleMenu() {
        const isActive = this.mobileMenu.classList.toggle('active');
        this.navToggle.setAttribute('aria-expanded', isActive);
        this.body.classList.toggle('menu-open', isActive);
    }

    closeMenu() {
        this.mobileMenu.classList.remove('active');
        this.navToggle.setAttribute('aria-expanded', 'false');
        this.body.classList.remove('menu-open');
    }

    // ==========================================
    // ANIMATIONS & OBSERVERS
    // ==========================================
    initObservers() {
        const reveals = document.querySelectorAll('.reveal');
        const standardItems = document.querySelectorAll('.standard-item');
        const processSteps = document.querySelectorAll('.process-step');
        
        // Defensive check: if IntersectionObserver is unsupported, show everything.
        if (!('IntersectionObserver' in window)) {
            reveals.forEach(el => el.classList.add('visible'));
            standardItems.forEach(el => el.classList.add('visible'));
            return;
        }

        try {
            reveals.forEach(el => el.classList.add('animate')); // Add animate class only if observer exists

            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            reveals.forEach(el => revealObserver.observe(el));

            const seqObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => entry.target.classList.add('visible'), i * 150);
                        seqObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            standardItems.forEach(el => seqObserver.observe(el));

            const processObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        processSteps.forEach(s => s.classList.remove('active'));
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.8 });
            processSteps.forEach(el => processObserver.observe(el));
        } catch (e) {
            console.error("Observer Error:", e);
            reveals.forEach(el => { el.classList.remove('animate'); el.classList.add('visible'); });
            standardItems.forEach(el => el.classList.add('visible'));
        }
    }

    // ==========================================
    // ROUTING & RENDERING
    // ==========================================
    render() {
        this.closeProjectModal();
        this.closeMenu();

        const hash = window.location.hash || '#/';
        
        try {
            const html = this.getView(hash);
            if (!html) {
                console.error("getView returned empty for hash:", hash);
                this.mainContent.innerHTML = this.view404();
            } else {
                this.mainContent.innerHTML = html;
            }
            window.scrollTo(0, 0);
            this.initObservers();
            this.attachPageHandlers(hash);
        } catch (e) {
            console.error("Rendering Error:", e);
            this.mainContent.innerHTML = this.view404();
        }
    }

    attachPageHandlers(hash) {
        const cleanHash = hash.split('?')[0];
        let preselectedDiv = null;
        if (hash.includes('?div=')) {
            try {
                preselectedDiv = decodeURIComponent(hash.split('?div=')[1]);
            } catch (e) {
                preselectedDiv = hash.split('?div=')[1];
            }
        }
        
        if (cleanHash === '#/booking') this.initBookingSystem(preselectedDiv);

        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                contactForm.innerHTML = '<div style="padding: 2rem; border: 1px solid var(--border); text-align: center;"><h3 class="font-display" style="margin-bottom: 0.5rem;">MESSAGE PREPARED.</h3><p>System standing by for backend integration.</p></div>';
            });
        }

        const filterBtns = document.querySelectorAll('.filter-btn');
        if (filterBtns.length > 0) {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const filter = btn.dataset.filter;
                    document.querySelectorAll('.project-card-wrap').forEach(card => {
                        if (filter === 'ALL' || card.dataset.division === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        }

        const projectCards = document.querySelectorAll('.project-card-wrap');
        if (projectCards.length > 0) {
            projectCards.forEach(card => {
                card.addEventListener('click', () => this.openProjectModal(card.dataset.id));
            });
        }

        const accHeaders = document.querySelectorAll('.accordion-header');
        if (accHeaders.length > 0) {
            accHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const item = header.parentElement;
                    const content = item.querySelector('.accordion-content');
                    const isActive = item.classList.contains('active');
                    document.querySelectorAll('.accordion-item').forEach(i => {
                        i.classList.remove('active');
                        i.querySelector('.accordion-content').style.maxHeight = null;
                    });
                    if (!isActive) {
                        item.classList.add('active');
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                });
            });
        }

        const baSlider = document.getElementById('baSlider');
        if (baSlider) this.initBASlider(baSlider);
    }

    // ==========================================
    // MODALS & SLIDERS
    // ==========================================
    initBASlider(baSlider) {
        let isDragging = false;
        const overlay = baSlider.querySelector('.ba-overlay');
        const handle = baSlider.querySelector('.ba-handle');
        
        const moveSlider = (clientX) => {
            const rect = baSlider.getBoundingClientRect();
            let pos = ((clientX - rect.left) / rect.width) * 100;
            pos = Math.max(0, Math.min(100, pos));
            overlay.style.width = pos + '%';
            handle.style.left = pos + '%';
        };

        baSlider.addEventListener('mousedown', (e) => { isDragging = true; moveSlider(e.clientX); });
        window.addEventListener('mousemove', (e) => { if (isDragging) moveSlider(e.clientX); });
        window.addEventListener('mouseup', () => { isDragging = false; });
        
        baSlider.addEventListener('touchstart', (e) => { isDragging = true; moveSlider(e.touches[0].clientX); }, {passive: true});
        window.addEventListener('touchmove', (e) => { if (isDragging) moveSlider(e.touches[0].clientX); }, {passive: true});
        window.addEventListener('touchend', () => { isDragging = false; });
    }

    openProjectModal(id) {
        const p = siteData.projects.find(x => x.id === id);
        if (!p) return;
        
        document.getElementById('projectModalContent').innerHTML = `
            <button class="project-modal-close" aria-label="Close modal">&times;</button>
            <div class="project-modal-body">
                <span class="eyebrow">${p.division} / ${p.status}</span>
                <h2 class="font-display" id="projectModalTitle" style="margin-bottom: 2rem;">${p.name}</h2>
                
                <div class="ba-slider" id="baSlider">
                    <img src="${p.afterImg}" class="ba-img" alt="After repair">
                    <div class="ba-overlay" style="width: 50%;"><img src="${p.beforeImg}" class="ba-img" alt="Before repair"></div>
                    <div class="ba-handle" style="left: 50%;"><div class="ba-handle-btn">&harr;</div></div>
                    <span class="ba-label ba-label-before">BEFORE</span>
                    <span class="ba-label ba-label-after">AFTER</span>
                </div>

                <div class="project-detail-grid">
                    <div>
                        <span class="section-label">PROJECT DETAILS</span>
                        <p style="margin-bottom: 2rem;">${p.desc} This section serves as a placeholder for a detailed description of the work performed, the challenges encountered, and the specific methodology used by BM Auto Repairs to resolve the vehicle's issue.</p>
                        <p>Further technical details, parts replaced, and labor notes will be inserted here once real project data is supplied.</p>
                    </div>
                    <div>
                        <span class="section-label">SPECIFICATIONS</span>
                        <div class="project-spec">
                            <div class="project-spec-label">Division</div>
                            <div class="project-spec-value">${p.division}</div>
                        </div>
                        <div class="project-spec">
                            <div class="project-spec-label">Status</div>
                            <div class="project-spec-value">${p.status}</div>
                        </div>
                        <div class="project-spec">
                            <div class="project-spec-label">Vehicle</div>
                            <div class="project-spec-value">[Vehicle Make/Model Placeholder]</div>
                        </div>
                        <a href="#/booking?div=${encodeURIComponent(p.division)}" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">DISCUSS SIMILAR WORK</a>
                    </div>
                </div>
            </div>
        `;
        this.projectModal.classList.add('active');
        this.body.style.overflow = 'hidden';
        
        const baSlider = document.getElementById('baSlider');
        if (baSlider) this.initBASlider(baSlider);
    }

    closeProjectModal() {
        this.projectModal.classList.remove('active');
        this.body.style.overflow = '';
    }

    // ==========================================
    // FORMS & BOOKING SYSTEM
    // ==========================================
    initBookingSystem(preselectedDiv) {
        if (!this.bookingState || (preselectedDiv && preselectedDiv !== this.bookingState.data.service)) {
            this.bookingState = {
                step: 1,
                data: { service: preselectedDiv || '', make: '', model: '', year: '', reg: '', vType: '', company: '', fleetSize: '', fleetTypes: '', problem: '', name: '', phone: '', email: '', contactMethod: 'Call', time: 'Flexible', consent: false, photos: [] }
            };
        }
        this.renderBookingStep();
    }

    renderBookingStep() {
        const container = document.getElementById('bookingFormContainer');
        if (!container) return;
        const state = this.bookingState;
        const data = state.data;
        const isFleet = data.service === 'Fleet Services';
        
        document.querySelectorAll('.step-indicator-item').forEach((el, i) => el.classList.toggle('active', i < state.step));
        document.querySelectorAll('.step-labels span').forEach((el, i) => el.style.color = i === state.step - 1 ? 'var(--accent)' : 'var(--text-dim)');
        
        const progressText = document.getElementById('progressText');
        if (progressText) progressText.textContent = `STEP ${state.step} OF 5`;

        let html = '';
        if (state.step === 1) {
            html = `<div class="form-step active"><h3 class="font-display" style="margin-bottom: 2rem;">WHAT DO YOU NEED?</h3><div class="option-grid"><div class="option-card ${data.service==='Mechanical'?'selected':''}" data-value="Mechanical" tabindex="0"><h4 class="font-display">Mechanical</h4><p>Diagnostics, servicing & repair.</p></div><div class="option-card ${data.service==='Collision & Refinishing'?'selected':''}" data-value="Collision & Refinishing" tabindex="0"><h4 class="font-display">Collision</h4><p>Accident repair & refinishing.</p></div><div class="option-card ${data.service==='Wrapping & Surface'?'selected':''}" data-value="Wrapping & Surface" tabindex="0"><h4 class="font-display">Wrapping</h4><p>Protection, tinting & branding.</p></div><div class="option-card ${data.service==='Fleet Services'?'selected':''}" data-value="Fleet Services" tabindex="0"><h4 class="font-display">Fleet</h4><p>B2B maintenance & uptime.</p></div><div class="option-card ${data.service==='Other'?'selected':''}" data-value="Other" tabindex="0"><h4 class="font-display">Other</h4><p>General enquiry.</p></div></div><div id="step1-error" class="error-text">Please select a service type.</div><div class="form-nav"><span></span><button type="button" class="btn btn-primary" data-action="next">Next</button></div></div>`;
        }
        if (state.step === 2) {
            if (isFleet) {
                html = `<div class="form-step active"><h3 class="font-display" style="margin-bottom: 2rem;">TELL US ABOUT YOUR FLEET.</h3><div class="form-group"><label>Company / Business Name *</label><input type="text" id="fleetCompany" value="${data.company}"></div><div class="form-group"><label>Fleet Size *</label><select id="fleetSize"><option value="">Select...</option><option ${data.fleetSize==='1-5'?'selected':''}>1-5</option><option ${data.fleetSize==='6-20'?'selected':''}>6-20</option><option ${data.fleetSize==='21-50'?'selected':''}>21-50</option><option ${data.fleetSize==='51+'?'selected':''}>51+</option></select></div><div class="form-group"><label>Vehicle Types *</label><input type="text" id="fleetTypes" placeholder="e.g., VW Polo, Toyota Hilux" value="${data.fleetTypes}"></div><div id="step2-error" class="error-text">Company, Fleet Size, and Vehicle Types are required.</div><div class="form-nav"><button type="button" class="btn btn-outline" data-action="prev">Back</button><button type="button" class="btn btn-primary" data-action="next">Next</button></div></div>`;
            } else {
                html = `<div class="form-step active"><h3 class="font-display" style="margin-bottom: 2rem;">TELL US ABOUT THE VEHICLE.</h3><div class="grid grid-2"><div class="form-group"><label>Make *</label><input type="text" id="vehicleMake" value="${data.make}"></div><div class="form-group"><label>Model *</label><input type="text" id="vehicleModel" value="${data.model}"></div><div class="form-group"><label>Year</label><input type="text" id="vehicleYear" value="${data.year}"></div><div class="form-group"><label>Registration</label><input type="text" id="vehicleReg" value="${data.reg}"></div></div><div class="form-group"><label>Vehicle Type</label><select id="vehicleType"><option value="">Select...</option><option ${data.vType==='Car'?'selected':''}>Car</option><option ${data.vType==='SUV'?'selected':''}>SUV</option><option ${data.vType==='Bakkie'?'selected':''}>Bakkie</option><option ${data.vType==='Van'?'selected':''}>Van</option><option ${data.vType==='Truck'?'selected':''}>Truck</option><option ${data.vType==='Motorcycle'?'selected':''}>Motorcycle</option><option ${data.vType==='Other'?'selected':''}>Other</option></select></div><div id="step2-error" class="error-text">Make and Model are required.</div><div class="form-nav"><button type="button" class="btn btn-outline" data-action="prev">Back</button><button type="button" class="btn btn-primary" data-action="next">Next</button></div></div>`;
            }
        }
        if (state.step === 3) {
            let placeholder = "Describe the issue, damage, repair, transformation or service you require.";
            if (data.service === 'Mechanical') placeholder = "Example: Engine warning light, unusual noise, overheating, service required...";
            if (data.service === 'Collision & Refinishing') placeholder = "Example: Accident damage, dents, bumper damage, paint damage...";
            if (data.service === 'Wrapping & Surface') placeholder = "Example: Full colour change, roof wrap, commercial branding, PPF...";
            if (data.service === 'Fleet Services') placeholder = "Tell us about your fleet maintenance requirements...";
            html = `<div class="form-step active"><h3 class="font-display" style="margin-bottom: 2rem;">WHAT'S HAPPENING?</h3><div class="form-group"><label>Problem / requested service *</label><textarea id="problemDesc" placeholder="${placeholder}">${data.problem}</textarea></div><div id="step3-error" class="error-text">Please describe the problem.</div><div class="form-nav"><button type="button" class="btn btn-outline" data-action="prev">Back</button><button type="button" class="btn btn-primary" data-action="next">Next</button></div></div>`;
        }
        if (state.step === 4) {
            html = `<div class="form-step active"><h3 class="font-display" style="margin-bottom: 1rem;">SHOW US THE VEHICLE.</h3><p style="margin-bottom: 1.5rem; font-size: 0.875rem;">Photos help us understand the vehicle before your inspection.</p><label for="fileUpload" class="file-upload-label"><p>Click to browse or drag and drop files here.</p><input type="file" id="fileUpload" style="display: none;" multiple accept="image/*"></label><div class="image-preview-grid" id="imagePreviewGrid">${data.photos.map((photo, i) => `<div class="preview-item"><img src="${photo.url}" alt="Preview ${i+1}"><button type="button" class="remove-img" data-index="${i}" aria-label="Remove image">&times;</button></div>`).join('')}</div><div class="form-nav"><button type="button" class="btn btn-outline" data-action="prev">Back</button><button type="button" class="btn btn-primary" data-action="next">Next</button></div></div>`;
        }
        if (state.step === 5) {
            html = `<div class="form-step active"><h3 class="font-display" style="margin-bottom: 2rem;">HOW CAN WE REACH YOU?</h3><div class="form-group"><label>Full Name *</label><input type="text" id="custName" value="${data.name}"></div><div class="form-group"><label>Phone *</label><input type="tel" id="custPhone" value="${data.phone}"></div><div class="form-group"><label>Email</label><input type="email" id="custEmail" value="${data.email}"></div><div class="grid grid-2"><div class="form-group"><label>Preferred Contact Method</label><select id="contactMethod"><option ${data.contactMethod==='Call'?'selected':''}>Call</option><option ${data.contactMethod==='WhatsApp'?'selected':''}>WhatsApp</option><option ${data.contactMethod==='Email'?'selected':''}>Email</option></select></div><div class="form-group"><label>Preferred Inspection Time</label><select id="contactTime"><option ${data.time==='Morning'?'selected':''}>Morning</option><option ${data.time==='Afternoon'?'selected':''}>Afternoon</option><option ${data.time==='Flexible'?'selected':''}>Flexible</option></select></div></div><div class="form-group"><div class="checkbox-group"><input type="checkbox" id="consent" ${data.consent?'checked':''}><label for="consent" style="margin-bottom: 0; font-weight: 400; font-size: 0.875rem; color: var(--text-dim);">I agree to be contacted regarding my request.</label></div></div><div id="step5-error" class="error-text">Name, Phone, and Consent are required.</div><div class="form-nav"><button type="button" class="btn btn-outline" data-action="prev">Back</button><button type="button" class="btn btn-primary" data-action="review">Review Request</button></div></div>`;
        }
        if (state.step === 6) {
            html = `<div class="form-step active"><h3 class="font-display" style="margin-bottom: 2rem;">REVIEW YOUR REQUEST.</h3><div class="summary-box"><div class="summary-row"><span class="summary-label">Service</span><span class="summary-value">${data.service} <span class="edit-link" data-action="goto" data-step="1">Edit</span></span></div>${isFleet ? `<div class="summary-row"><span class="summary-label">Fleet Details</span><span class="summary-value">${data.company} (${data.fleetSize} vehicles)<br>${data.fleetTypes} <span class="edit-link" data-action="goto" data-step="2">Edit</span></span></div>` : `<div class="summary-row"><span class="summary-label">Vehicle</span><span class="summary-value">${data.make} ${data.model} ${data.year}<br>Reg: ${data.reg || 'N/A'}<br>Type: ${data.vType || 'N/A'} <span class="edit-link" data-action="goto" data-step="2">Edit</span></span></div>`}<div class="summary-row"><span class="summary-label">Requirement</span><span class="summary-value">${data.problem} <span class="edit-link" data-action="goto" data-step="3">Edit</span></span></div><div class="summary-row"><span class="summary-label">Photos</span><span class="summary-value">${data.photos.length} file(s) attached <span class="edit-link" data-action="goto" data-step="4">Edit</span></span></div><div class="summary-row"><span class="summary-label">Contact</span><span class="summary-value">${data.name}<br>${data.phone}<br>${data.email || 'No email'}<br>Prefers: ${data.contactMethod} (${data.time}) <span class="edit-link" data-action="goto" data-step="5">Edit</span></span></div></div><div class="form-nav"><button type="button" class="btn btn-outline" data-action="prev">Back</button><button type="button" class="btn btn-primary" data-action="submit">SUBMIT INSPECTION REQUEST</button></div></div>`;
        }
        if (state.step === 7) {
            let waMsg = `Hi BM Auto Repairs, I would like to enquire about a ${data.service} service.\n\n`;
            if (isFleet) { waMsg += `Company: ${data.company}\nFleet Size: ${data.fleetSize}\nVehicles: ${data.fleetTypes}\n\n`; } else { waMsg += `Vehicle:\n${data.make} ${data.model}\n${data.year}\nReg: ${data.reg}\n\n`; }
            waMsg += `Issue:\n${data.problem}\n\nPlease advise on the next step.`;
            const waLink = `https://wa.me/27618202622?text=${encodeURIComponent(waMsg)}`;
            html = `<div class="success-box"><h2 class="font-display">REQUEST PREPARED.</h2><p style="margin-bottom: 2rem;">Your booking request has been prepared. Connect the form to the BM booking system to enable live submissions.</p><div style="text-align: left; margin-bottom: 2rem; border: 1px solid var(--border); padding: 1.5rem; background: var(--bg);"><p style="margin-bottom: 0.5rem;"><strong>Service:</strong> ${data.service}</p>${isFleet ? `<p style="margin-bottom: 0.5rem;"><strong>Company:</strong> ${data.company}</p>` : `<p style="margin-bottom: 0.5rem;"><strong>Vehicle:</strong> ${data.make} ${data.model}</p>`}<p style="margin-bottom: 0;"><strong>Contact:</strong> ${data.name} (${data.phone})</p></div><div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;"><a href="tel:+27618202622" class="btn btn-outline">CALL BM</a><a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">WHATSAPP BM</a><a href="#/" class="btn btn-primary">RETURN HOME</a></div><div class="prototype-badge">SYSTEM STATUS: FRONT-END PROTOTYPE</div></div>`;
        }
        container.innerHTML = html;
        this.attachBookingListeners();
    }

    attachBookingListeners() {
        const container = document.getElementById('bookingFormContainer');
        if (!container) return;
        container.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent any form submission
                const action = e.currentTarget.dataset.action;
                if (action === 'next') this.handleNext();
                if (action === 'prev') this.handlePrev();
                if (action === 'goto') this.handleGoto(parseInt(e.currentTarget.dataset.step));
                if (action === 'review') this.handleReview();
                if (action === 'submit') this.handleSubmit();
            });
        });
        container.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', () => {
                container.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.bookingState.data.service = card.dataset.value;
                document.getElementById('step1-error').classList.remove('visible');
            });
            card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); } });
        });
        const fileInput = document.getElementById('fileUpload');
        if (fileInput) fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
        container.querySelectorAll('.remove-img').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.bookingState.data.photos.splice(parseInt(e.currentTarget.dataset.index), 1);
                this.renderBookingStep();
            });
        });
    }

    saveCurrentStepData() {
        const step = this.bookingState.step;
        const data = this.bookingState.data;
        if (step === 2) {
            if (data.service === 'Fleet Services') {
                data.company = document.getElementById('fleetCompany')?.value || '';
                data.fleetSize = document.getElementById('fleetSize')?.value || '';
                data.fleetTypes = document.getElementById('fleetTypes')?.value || '';
            } else {
                data.make = document.getElementById('vehicleMake')?.value || '';
                data.model = document.getElementById('vehicleModel')?.value || '';
                data.year = document.getElementById('vehicleYear')?.value || '';
                data.reg = document.getElementById('vehicleReg')?.value || '';
                data.vType = document.getElementById('vehicleType')?.value || '';
            }
        }
        if (step === 3) data.problem = document.getElementById('problemDesc')?.value || '';
        if (step === 5) {
            data.name = document.getElementById('custName')?.value || '';
            data.phone = document.getElementById('custPhone')?.value || '';
            data.email = document.getElementById('custEmail')?.value || '';
            data.contactMethod = document.getElementById('contactMethod')?.value || '';
            data.time = document.getElementById('contactTime')?.value || '';
            data.consent = document.getElementById('consent')?.checked || false;
        }
    }

    validateStep(step) {
        const data = this.bookingState.data;
        let isValid = true;
        if (step === 1 && !data.service) { document.getElementById('step1-error').classList.add('visible'); isValid = false; }
        if (step === 2) {
            if (data.service === 'Fleet Services') {
                if (!data.company || !data.fleetSize || !data.fleetTypes) { document.getElementById('step2-error').classList.add('visible'); isValid = false; }
            } else {
                if (!data.make || !data.model) { document.getElementById('step2-error').classList.add('visible'); isValid = false; }
            }
        }
        if (step === 3 && !data.problem) { document.getElementById('step3-error').classList.add('visible'); isValid = false; }
        if (step === 5) {
            if (!data.name || !data.phone || !data.consent) { document.getElementById('step5-error').classList.add('visible'); isValid = false; }
            else if (data.email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(data.email)) { document.getElementById('step5-error').textContent = "Please enter a valid email address."; document.getElementById('step5-error').classList.add('visible'); isValid = false; }
            }
        }
        return isValid;
    }

    handleNext() { this.saveCurrentStepData(); if (this.validateStep(this.bookingState.step)) { this.bookingState.step++; this.renderBookingStep(); } }
    handlePrev() { this.saveCurrentStepData(); this.bookingState.step--; this.renderBookingStep(); }
    handleGoto(step) { this.bookingState.step = step; this.renderBookingStep(); }
    handleReview() { this.saveCurrentStepData(); if (this.validateStep(5)) { this.bookingState.step = 6; this.renderBookingStep(); } }
    handleSubmit() { this.bookingState.step = 7; this.renderBookingStep(); }
    handleFileSelect(e) {
        const files = e.target.files;
        for (let file of files) { this.bookingState.data.photos.push({ url: URL.createObjectURL(file), name: file.name }); }
        this.renderBookingStep();
    }

    // ==========================================
    // VIEW GENERATORS (ROUTER LOGIC)
    // ==========================================
    getView(rawHash) {
        // Normalize hash: remove query params, remove trailing slash (unless it's just #/)
        const cleanHash = rawHash.split('?')[0].replace(/\/$/, '');
        
        if (cleanHash === '#/' || cleanHash === '#' || cleanHash === '') return this.viewHome();
        if (cleanHash === '#/services') return this.viewServicesHub();
        if (cleanHash === '#/services/mechanical') return this.viewService('mechanical');
        if (cleanHash === '#/services/collision') return this.viewService('collision');
        if (cleanHash === '#/services/wrapping') return this.viewService('wrapping');
        if (cleanHash === '#/services/fleet') return this.viewService('fleet');
        if (cleanHash === '#/projects') return this.viewProjects();
        if (cleanHash === '#/company') return this.viewCompany();
        if (cleanHash === '#/resources') return this.viewFAQs();
        if (cleanHash === '#/contact') return this.viewContact();
        if (cleanHash === '#/booking') return this.viewBooking();
        if (cleanHash === '#/shop') return this.viewShop();
        
        // 404 Fallback for any unknown route
        return this.view404();
    }

    view404() {
        return `
            <section class="page-hero"><div class="container"><span class="eyebrow">ERROR 404</span><h1 class="font-display reveal">PAGE NOT FOUND.</h1><p class="reveal">The page you are looking for doesn't exist or has been moved.</p></div></section>
            <section class="page-content"><div class="container" style="text-align: center;">
                <div class="reveal" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="#/" class="btn btn-primary">BACK HOME</a>
                    <a href="#/services" class="btn btn-outline">VIEW SERVICES</a>
                    <a href="#/contact" class="btn btn-outline">CONTACT BM</a>
                </div>
            </div></section>
        `;
    }

    renderDivisionCard(key, context = 'home') {
        const d = siteData.divisions[key];
        const isHub = context === 'hub';
        return `<a href="#/services/${key}" class="division-card reveal"><div class="division-card-img"><img src="${d.img.replace('w=1600', 'w=800')}" alt="${d.title}"></div><div class="division-card-content"><span class="division-num">DIV ${d.num}</span><h3 class="font-display">${d.title.toUpperCase()}</h3><p class="division-statement">${d.cardStatement}</p>${isHub ? `<div class="division-caps">${d.cardCaps.map(c => `<span class="cap-tag">${c}</span>`).join('')}</div>` : ''}<span class="division-link">EXPLORE DIVISION &rarr;</span></div></a>`;
    }

    renderProcess() {
        return `<div class="process-line reveal"><div class="process-step active"><span>01</span><h4>Inspection</h4></div><div class="process-step"><span>02</span><h4>Diagnosis</h4></div><div class="process-step"><span>03</span><h4>Quote</h4></div><div class="process-step"><span>04</span><h4>Approval</h4></div><div class="process-step"><span>05</span><h4>Repair</h4></div><div class="process-step"><span>06</span><h4>Quality Control</h4></div><div class="process-step"><span>07</span><h4>Delivery</h4></div></div>`;
    }

    viewHome() {
        return `
            <section class="hero"><div class="hero-bg"><img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80=w=1600&auto=format&fit=crop" alt="Automotive workshop environment" fetchpriority="high"></div><div class="container hero-content"><span class="eyebrow">BM AUTO REPAIRS / CAPE TOWN</span><h1 class="font-display">BUILT TO KEEP YOU MOVING.</h1><p>Mechanical repair. Collision restoration. Vehicle transformation. Fleet care.</p><div style="display: flex; gap: 1rem; flex-wrap: wrap;"><a href="#/booking" class="btn btn-primary">BOOK AN INSPECTION</a><a href="#/services" class="btn btn-outline">EXPLORE SERVICES</a></div><div class="tech-status">AUTOMOTIVE SERVICES / MECHANICAL / COLLISION / SURFACE / FLEET</div></div></section>
            
            <section class="section"><div class="container"><span class="section-label reveal">01 / THE BM ECOSYSTEM</span><h2 class="font-display reveal">ONE VEHICLE. MULTIPLE NEEDS.</h2><p class="reveal" style="max-width: 700px; margin-bottom: 4rem;">From what's under the bonnet to what's on the body — BM brings the work under one roof.</p><div class="grid grid-4">${Object.keys(siteData.divisions).map(key => this.renderDivisionCard(key, 'home')).join('')}</div></div></section>
            
            <section class="section" style="padding: 0;"><div class="standard-grid"><div class="standard-item"><span class="standard-num">01</span><h3 class="font-display">PRECISION.</h3><p>Diagnosis before replacement. Inspection before assumption.</p></div><div class="standard-item"><span class="standard-num">02</span><h3 class="font-display">TRANSPARENCY.</h3><p>You know what needs to be done before work begins.</p></div><div class="standard-item"><span class="standard-num">03</span><h3 class="font-display">CRAFTSMANSHIP.</h3><p>Every repair is treated as part of the vehicle.</p></div><div class="standard-item"><span class="standard-num">04</span><h3 class="font-display">ACCOUNTABILITY.</h3><p>The job is finished when the vehicle is ready.</p></div></div></section>
            
            <section class="section"><div class="container">
                <div class="portfolio-header reveal">
                    <div><span class="section-label" style="margin-bottom: 1rem;">02 / SELECTED WORK</span><h2 class="font-display">OUR WORK.</h2></div>
                    <a href="#/projects" class="btn btn-outline">VIEW ALL PROJECTS</a>
                </div>
                <div class="grid grid-3">
                    ${siteData.projects.slice(0, 3).map(p => `
                        <div class="project-card-wrap reveal" data-id="${p.id}" data-division="${p.division}" style="cursor: pointer;">
                            <div class="project-card"><img src="${p.afterImg}" alt="${p.name}"></div>
                            <div style="margin-top: 1rem;"><span class="tag">${p.division}</span><h3 style="font-size: 1.125rem;">${p.name}</h3></div>
                        </div>
                    `).join('')}
                </div>
            </div></section>
            
            <section class="section" style="background: var(--surface);"><div class="container"><span class="section-label reveal">03 / PROCESS</span><h2 class="font-display reveal" style="margin-bottom: 1rem;">THE BM PROCESS.</h2><p class="reveal" style="margin-bottom: 4rem;">NO GUESSWORK. NO SURPRISES.</p>${this.renderProcess()}</div></section>
            
            <section class="section"><div class="container grid grid-2" style="align-items: center;"><div class="reveal"><span class="section-label">04 / WHY BM</span><h2 class="font-display" style="margin-bottom: 1.5rem;">WHY BM?</h2><p style="margin-bottom: 2rem;">We don't ask you to trust us because we say we're good. We show you how we work.</p><a href="#/company" class="btn btn-primary">LEARN ABOUT BM</a></div><div class="reveal" style="background: var(--surface); padding: 2rem; border: 1px solid var(--border);"><span class="section-label" style="margin-bottom: 1rem;">05 / STORE</span><h3 class="font-display" style="margin-bottom: 1rem;">THE AUTOMOTIVE STORE.</h3><p style="margin-bottom: 1.5rem;">We are structuring an automotive store to provide parts, fluids, accessories, and consumables.</p><a href="#/shop" class="btn btn-outline">EXPLORE STORE</a></div></div></section>
            
            <section class="section" style="text-align: center;"><div class="container"><h2 class="font-display reveal" style="margin-bottom: 1.5rem;">YOUR VEHICLE DESERVES BETTER.</h2><p class="reveal" style="margin-bottom: 2.5rem; max-width: 600px; margin-left: auto; margin-right: auto;">Experience the BM Auto Repairs standard.</p><div class="reveal" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;"><a href="#/booking" class="btn btn-primary">BOOK AN INSPECTION</a><a href="#/contact" class="btn btn-outline">CONTACT BM</a></div></div></section>
        `;
    }

    viewProjects() {
        return `
            <section class="page-hero"><div class="container"><span class="eyebrow">BM / WORK</span><h1 class="font-display reveal">SELECTED WORK.</h1><p class="reveal">A showcase of automotive projects across our divisions. Click a project to view details and before/after comparisons.</p></div></section>
            <section class="page-content"><div class="container">
                <div class="filter-bar reveal" style="margin-bottom: 3rem;">
                    <button class="filter-btn active" data-filter="ALL">All</button>
                    <button class="filter-btn" data-filter="Mechanical">Mechanical</button>
                    <button class="filter-btn" data-filter="Collision & Refinishing">Collision</button>
                    <button class="filter-btn" data-filter="Wrapping & Surface">Wrapping</button>
                </div>
                <div class="grid grid-3">
                    ${siteData.projects.map(p => `
                        <div class="project-card-wrap reveal" data-id="${p.id}" data-division="${p.division}" style="cursor: pointer;">
                            <div class="project-card"><img src="${p.afterImg}" alt="${p.name}"></div>
                            <div class="project-card-overlay"><h3>${p.name}</h3><p>${p.division}</p></div>
                        </div>
                    `).join('')}
                </div>
            </div></section>
        `;
    }

    viewCompany() {
        return `
            <section class="page-hero"><div class="container"><span class="eyebrow">BM / COMPANY</span><h1 class="font-display reveal">BUILT ON PRECISION.</h1></div></section>
            <section class="page-content"><div class="container grid grid-2" style="gap: 4rem; align-items: center;">
                <div class="reveal" style="grid-column: span 2; margin-bottom: 4rem;">
                    <span class="section-label">01 / PHILOSOPHY</span>
                    <h2 class="font-display" style="margin-bottom: 2rem;">THE BM STANDARD.</h2>
                    <p style="font-size: 1.125rem; max-width: 800px; margin-bottom: 2rem;">BM Auto Repairs was built with a simple objective: build an automotive business where quality of work, transparency and accountability are treated as standards rather than selling points. We don't ask you to trust us because we say we're good. We show you how we work.</p>
                </div>
                <div class="reveal" style="grid-column: span 2; margin-bottom: 4rem;">
                    <div class="standard-grid" style="border: none;">
                        <div class="standard-item" style="border: 1px solid var(--border);"><span class="standard-num">01</span><h3 class="font-display">PRECISION</h3><p>Diagnosis before replacement. Inspection before assumption.</p></div>
                        <div class="standard-item" style="border: 1px solid var(--border); border-left: none;"><span class="standard-num">02</span><h3 class="font-display">TRANSPARENCY</h3><p>You know what needs to be done before work begins.</p></div>
                        <div class="standard-item" style="border: 1px solid var(--border); border-left: none;"><span class="standard-num">03</span><h3 class="font-display">CRAFTSMANSHIP</h3><p>Every repair is treated as part of the vehicle.</p></div>
                        <div class="standard-item" style="border: 1px solid var(--border); border-left: none;"><span class="standard-num">04</span><h3 class="font-display">ACCOUNTABILITY</h3><p>The job is finished when the vehicle is ready.</p></div>
                    </div>
                </div>
                <div class="reveal" style="grid-column: span 2; margin-bottom: 4rem;">
                    <span class="section-label">02 / TRANSPARENCY</span>
                    <h2 class="font-display" style="margin-bottom: 2rem;">NO GUESSWORK.</h2>
                    <div class="grid grid-3">
                        <div class="target-box" style="border-left-width: 4px;"><h4 style="color: var(--text); margin-bottom: 0.5rem;">Clear Process</h4><p>No guesswork. No confusion.</p></div>
                        <div class="target-box" style="border-left-width: 4px;"><h4 style="color: var(--text); margin-bottom: 0.5rem;">What & Why</h4><p>Understand what needs attention and why.</p></div>
                        <div class="target-box" style="border-left-width: 4px;"><h4 style="color: var(--text); margin-bottom: 0.5rem;">Next Steps</h4><p>Know exactly what the proposed work is.</p></div>
                    </div>
                </div>
                <div class="reveal" style="grid-column: span 2; margin-bottom: 4rem;">
                    <span class="section-label">03 / FOUNDER</span>
                    <div class="founder-grid">
                        <div class="placeholder-box" style="aspect-ratio: 1/1;">FOUNDER IMAGE [TO BE SUPPLIED]</div>
                        <div>
                            <h2 class="font-display" style="margin-bottom: 1rem;">MEET THE FOUNDER</h2>
                            <h3 style="margin-bottom: 1.5rem; color: var(--text);">Blessing — Founder, BM Auto Repairs</h3>
                            <p style="margin-bottom: 1rem;">[Biography Placeholder] Blessing founded BM Auto Repairs with a commitment to structured process and honest work. The company is built on the principle that transparency and proper diagnosis are the foundation of trust.</p>
                            <p>Full biography and professional background to be supplied.</p>
                        </div>
                    </div>
                </div>
                <div class="reveal" style="grid-column: span 2; margin-bottom: 4rem;">
                    <span class="section-label">04 / PROCESS</span>
                    <h2 class="font-display" style="margin-bottom: 3rem;">THE BM PROCESS.</h2>
                    ${this.renderProcess()}
                </div>
                <div class="reveal" style="grid-column: span 2; text-align: center; margin-top: 4rem; padding: 4rem 2rem; background: var(--surface); border: 1px solid var(--border);">
                    <h2 class="font-display" style="margin-bottom: 1rem;">WORK WITH BM.</h2>
                    <p style="margin-bottom: 2rem;">Whether you need mechanical repair, collision restoration, vehicle transformation or fleet support, start with an inspection.</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <a href="#/booking" class="btn btn-primary">BOOK AN INSPECTION</a>
                        <a href="#/contact" class="btn btn-outline">CONTACT BM</a>
                    </div>
                </div>
            </div></section>
        `;
    }

    viewFAQs() {
        return `
            <section class="page-hero"><div class="container"><span class="eyebrow">BM / RESOURCES</span><h1 class="font-display reveal">COMMON QUESTIONS.</h1><p class="reveal">Answers to practical questions about working with BM Auto Repairs.</p></div></section>
            <section class="page-content"><div class="container" style="max-width: 800px;">
                <div class="reveal">
                    ${siteData.faqs.map(f => `
                        <div class="accordion-item">
                            <button class="accordion-header">${f.q}<span class="accordion-icon">+</span></button>
                            <div class="accordion-content"><div class="accordion-content-inner">${f.a}</div></div>
                        </div>
                    `).join('')}
                </div>
                <div class="reveal" style="text-align: center; margin-top: 4rem; padding: 3rem 2rem; background: var(--surface); border: 1px solid var(--border);">
                    <h3 class="font-display" style="margin-bottom: 1rem;">STILL HAVE QUESTIONS?</h3>
                    <a href="#/contact" class="btn btn-primary">CONTACT BM</a>
                </div>
            </div></section>
        `;
    }

    viewServicesHub() {
        return `<section class="page-hero"><div class="container"><span class="eyebrow">BM / SERVICES</span><h1 class="font-display reveal">FOUR SPECIALISED DIVISIONS.</h1><p class="reveal">One vehicle. Multiple needs. BM brings multiple automotive capabilities under one company.</p></div></section><section class="page-content"><div class="container"><div class="grid grid-2">${Object.keys(siteData.divisions).map(key => this.renderDivisionCard(key, 'hub')).join('')}</div></div></section>`;
    }

    viewService(key) {
        const d = siteData.divisions[key];
        const otherDivisions = Object.keys(siteData.divisions).filter(k => k !== key);
        return `<section class="page-hero"><img src="${d.img}" alt="${d.title} background"><div class="container"><span class="eyebrow">DIVISION ${d.num} / ${d.title.toUpperCase()}</span><h1 class="font-display reveal">${d.heroTitle}</h1><p class="reveal" style="max-width: 700px;">${d.heroCopy}</p><div class="reveal" style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;"><a href="#/booking?div=${encodeURIComponent(d.bookingValue)}" class="btn btn-primary">${d.cta}</a><a href="#/contact" class="btn btn-outline">CONTACT BM</a></div></div></section><section class="page-content"><div class="container"><div class="reveal" style="margin-bottom: 4rem; max-width: 800px;"><span class="section-label">01 / INTRODUCTION</span><h2 class="font-display" style="margin-bottom: 1.5rem;">DIVISION INTRODUCTION.</h2><p>${d.intro}</p></div><div class="reveal" style="margin-bottom: 4rem;"><span class="section-label">02 / CAPABILITIES</span><div class="grid grid-3">${d.groups.map(g => `<div class="cap-group"><h3 class="cap-group-title">${g.title}</h3><ul class="cap-list">${g.items.map(item => `<li>${item}</li>`).join('')}</ul></div>`).join('')}</div></div><div class="reveal" style="margin-bottom: 4rem;"><span class="section-label">03 / WHO IS THIS FOR?</span><div class="target-box"><p style="color: var(--text); font-size: 1.125rem;">${d.target}</p></div></div><div class="reveal" style="margin-bottom: 4rem;"><span class="section-label">04 / PROCESS</span><h2 class="font-display" style="margin-bottom: 3rem;">THE BM PROCESS.</h2>${this.renderProcess()}</div><div class="reveal" style="text-align: center; margin-bottom: 6rem; padding: 4rem 2rem; background: var(--surface); border: 1px solid var(--border);"><h2 class="font-display" style="margin-bottom: 1rem;">LET'S GET YOUR VEHICLE RIGHT.</h2><p style="margin-bottom: 2rem;">Book an inspection and let BM assess what needs to be done.</p><div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;"><a href="#/booking?div=${encodeURIComponent(d.bookingValue)}" class="btn btn-primary">${d.cta}</a><a href="https://wa.me/27618202622" target="_blank" rel="noopener noreferrer" class="btn btn-outline">WHATSAPP BM</a></div></div><div class="reveal"><span class="section-label">05 / EXPLORE ANOTHER DIVISION</span><div class="grid grid-3">${otherDivisions.map(k => `<a href="#/services/${k}" class="cross-nav-card" style="border: 1px solid var(--border); padding: 2rem; background: var(--surface);"><span style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem; display: block;">DIV ${siteData.divisions[k].num}</span><h4 class="font-display">${siteData.divisions[k].title.toUpperCase()}</h4><span style="font-size: 0.875rem; color: var(--text-dim); margin-top: 1rem; display: block;">EXPLORE &rarr;</span></a>`).join('')}</div></div></div></section>`;
    }

    viewBooking() {
        return `<div class="container booking-container"><span class="eyebrow">BM / BOOKING</span><h1 class="font-display reveal" style="margin-bottom: 1rem;">TELL US WHAT YOUR VEHICLE NEEDS.</h1><p class="reveal" style="margin-bottom: 3rem;">Complete the steps below to submit your request.</p><div class="step-indicator reveal" id="stepIndicator"><div class="step-indicator-item active"></div><div class="step-indicator-item"></div><div class="step-indicator-item"></div><div class="step-indicator-item"></div><div class="step-indicator-item"></div></div><div class="step-labels reveal" id="stepLabels" style="margin-bottom: 1rem;"><span style="color: var(--accent);">01 SERVICE</span><span>02 VEHICLE</span><span>03 REQUIREMENT</span><span>04 PHOTOS</span><span>05 CONTACT</span></div><div id="progressText" class="font-mono" style="font-size: 0.75rem; color: var(--text-dim); margin-bottom: 2rem;">STEP 1 OF 5</div><div id="bookingFormContainer" class="booking-form-container"></div></div>`;
    }

    viewShop() {
        const cats = ['Oils & Fluids', 'Filters', 'Brake Components', 'Batteries', 'Detailing', 'Accessories', 'Consumables'];
        return `<section class="page-hero"><div class="container"><span class="eyebrow">BM / STORE</span><h1 class="font-display reveal">THE AUTOMOTIVE STORE.</h1><p class="reveal">Currently structuring our e-commerce capabilities. Explore our future categories.</p></div></section><section class="page-content"><div class="container"><div class="grid grid-3">${cats.map(c => `<div class="project-card reveal" style="aspect-ratio: 1/1; cursor: default; position: relative;"><img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80=w=600&auto=format&fit=crop" alt="${c}"><div style="position: absolute; inset: 0; background: rgba(14,14,16,0.8); display: flex; align-items: center; justify-content: center;"><h3 class="font-display">${c}</h3></div></div>`).join('')}</div></div></section>`;
    }

    viewContact() {
        return `<section class="page-hero"><div class="container"><span class="eyebrow">BM / CONTACT</span><h1 class="font-display reveal">TALK TO BM.</h1><p class="reveal">Get in touch with our team.</p></div></section><section class="page-content"><div class="container grid grid-2" style="gap: 4rem;"><div class="reveal"><span class="section-label">01 / DETAILS</span><h3 class="font-display" style="margin-bottom: 1.5rem;">BM AUTO REPAIRS</h3><p style="margin-bottom: 0.5rem;"><strong>Founder:</strong> Blessing</p><p style="margin-bottom: 0.5rem;"><strong>Phone:</strong> <a href="tel:+27618202622">061 820 2622</a></p><p style="margin-bottom: 0.5rem;"><strong>Email:</strong> <a href="mailto:autoworks95@gmail.com">autoworks95@gmail.com</a></p><p style="margin-bottom: 0.5rem;"><strong>WhatsApp:</strong> <a href="https://wa.me/27618202622" target="_blank" rel="noopener noreferrer">Chat with us</a></p><p style="margin-bottom: 0.5rem; margin-top: 1.5rem;"><strong>Hours:</strong> TO BE CONFIRMED</p><div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;"><a href="tel:+27618202622" class="btn btn-outline">CALL BM</a><a href="https://wa.me/27618202622" target="_blank" rel="noopener noreferrer" class="btn btn-outline">WHATSAPP BM</a><a href="#/booking" class="btn btn-primary">BOOK INSPECTION</a></div></div><div class="reveal"><span class="section-label">02 / MESSAGE</span><form id="contactForm"><div class="form-group"><label>Name</label><input type="text" required></div><div class="form-group"><label>Email</label><input type="email" required></div><div class="form-group"><label>Message</label><textarea required></textarea></div><button type="submit" class="btn btn-primary">SEND MESSAGE</button></form></div></div></section>`;
    }
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
