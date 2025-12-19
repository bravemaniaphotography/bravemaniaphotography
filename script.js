/* =====================================================
   BRAVEMANIA PHOTOGRAPHY - JavaScript
   Navigation, Portfolio Filtering, Lightbox
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // =====================================================
    // NAVIGATION
    // =====================================================
    
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect for navbar
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // =====================================================
    // PORTFOLIO FILTERING
    // =====================================================
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.5s ease-out forwards';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
    
    // =====================================================
    // LIGHTBOX
    // =====================================================
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    let visibleImages = [];
    
    // Get currently visible images
    function getVisibleImages() {
        return Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
    }
    
    // Open lightbox
    function openLightbox(index) {
        visibleImages = getVisibleImages();
        currentImageIndex = index;
        
        const img = visibleImages[currentImageIndex].querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Navigate lightbox
    function navigateLightbox(direction) {
        visibleImages = getVisibleImages();
        currentImageIndex += direction;
        
        if (currentImageIndex < 0) {
            currentImageIndex = visibleImages.length - 1;
        } else if (currentImageIndex >= visibleImages.length) {
            currentImageIndex = 0;
        }
        
        const img = visibleImages[currentImageIndex].querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    }
    
    // Gallery item click handlers
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const visibleIndex = getVisibleImages().indexOf(item);
            openLightbox(visibleIndex);
        });
    });
    
    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                navigateLightbox(-1);
                break;
            case 'ArrowRight':
                navigateLightbox(1);
                break;
        }
    });
    
    // =====================================================
    // SMOOTH SCROLL FOR CTA BUTTON
    // =====================================================
    
    const ctaButton = document.querySelector('.hero-cta');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // =====================================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // =====================================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('.section-header, .about-content, .service-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // =====================================================
    // IMAGE LAZY LOADING ERROR HANDLING
    // =====================================================
    
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('error', function() {
            // If image fails to load, show a placeholder
            this.style.backgroundColor = '#EDE9E3';
            this.alt = 'Image loading...';
            console.warn('Failed to load image:', this.src);
        });
    });
    
    // =====================================================
    // LOGO CLICK - SCROLL TO TOP
    // =====================================================
    
    const logoLink = document.querySelector('.nav-logo');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    console.log('Bravemania Photography website loaded successfully');
});
