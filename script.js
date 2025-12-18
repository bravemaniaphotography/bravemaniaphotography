// Bravemania Photography - Premium JavaScript

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== PORTFOLIO DATA =====
const portfolioData = [
    // BOUDOIR PHOTOS
    { category: 'boudoir', title: 'Elegant Silhouette', description: 'Artistic expression', image: 'images/boudoir-01.jpg' },
    { category: 'boudoir', title: 'Beach Romance', description: 'Natural freedom', image: 'images/boudoir-02.jpg' },
    { category: 'boudoir', title: 'Timeless Beauty', description: 'Classic elegance', image: 'images/boudoir-03.jpg' },
    { category: 'boudoir', title: 'Natural Grace', description: 'Warm intimacy', image: 'images/boudoir-04.jpg' },
    { category: 'boudoir', title: 'Dramatic Light', description: 'Bold confidence', image: 'images/boudoir-05.jpg' },
    { category: 'boudoir', title: 'Artistic Portrait', description: 'Creative beauty', image: 'images/boudoir-06.jpg' },
    { category: 'boudoir', title: 'Golden Hour', description: 'Sunset elegance', image: 'images/boudoir-07.jpg' },
    { category: 'boudoir', title: 'Urban Setting', description: 'Contemporary style', image: 'images/boudoir-08.jpg' },
    { category: 'boudoir', title: 'Beach Moments', description: 'Romantic vibes', image: 'images/boudoir-09.jpg' },
    { category: 'boudoir', title: 'Sophisticated', description: 'Elegant composition', image: 'images/boudoir-10.jpg' },
    { category: 'boudoir', title: 'Street Dance', description: 'Dynamic movement', image: 'images/boudoir-11.jpg' },
    
    // PORTRAIT PHOTOS
    { category: 'portrait', title: 'Fashion Editorial', description: 'Bold confident', image: 'images/portrait-01.jpg' },
    { category: 'portrait', title: 'Studio Elegance', description: 'Timeless sophistication', image: 'images/portrait-02.jpg' },
    { category: 'portrait', title: 'Urban Portrait', description: 'Contemporary style', image: 'images/portrait-03.jpg' },
    { category: 'portrait', title: 'Vibrant Beauty', description: 'Colorful personality', image: 'images/portrait-04.jpg' },
    { category: 'portrait', title: 'Artistic Expression', description: 'Creative composition', image: 'images/portrait-05.jpg' },
    { category: 'portrait', title: 'Modern Elegance', description: 'Clean sophistication', image: 'images/portrait-06.jpg' },
    { category: 'portrait', title: 'Natural Light', description: 'Sun-kissed beauty', image: 'images/portrait-07.jpg' },
    
    // LIFESTYLE PHOTOS
    { category: 'lifestyle', title: 'Active Lifestyle', description: 'Outdoor adventure', image: 'images/Lifestyle-06.jpg' },
    { category: 'lifestyle', title: 'Lakeside Peace', description: 'Scenic moments', image: 'images/Lifestyle-07.jpg' },
    { category: 'lifestyle', title: 'Sweet Baby', description: 'Precious innocence', image: 'images/Lifestyle-08.JPG' },
    { category: 'lifestyle', title: 'Nature Walk', description: 'Candid moments', image: 'images/Lifestyle-09.jpg' },
    { category: 'lifestyle', title: 'Playground Joy', description: 'Childhood wonder', image: 'images/Lifestyle-10.JPG' },
    { category: 'lifestyle', title: 'Parkside', description: 'Natural connection', image: 'images/Lifestyle-11.jpg' },
    { category: 'lifestyle', title: 'Sweet Smile', description: 'Genuine emotion', image: 'images/Lifestyle-12.jpg' }
];

// ===== RENDER PORTFOLIO =====
const portfolioGrid = document.getElementById('portfolioGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderPortfolio(filter = 'all') {
    portfolioGrid.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === filter);
    
    filteredData.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        portfolioItem.style.opacity = '0';
        portfolioItem.style.transform = 'translateY(20px)';
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        // Add click handler for lightbox
        portfolioItem.addEventListener('click', () => {
            openLightbox(item.image, item.title, item.description);
        });
        
        portfolioGrid.appendChild(portfolioItem);
        
        // Stagger animation
        setTimeout(() => {
            portfolioItem.style.transition = 'all 0.6s ease';
            portfolioItem.style.opacity = '1';
            portfolioItem.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderPortfolio(filter);
    });
});

// Initialize
renderPortfolio();

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, title, description) {
    lightbox.classList.add('active');
    lightboxImg.src = src;
    lightboxCaption.textContent = `${title} - ${description}`;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const modalClose = document.querySelector('.modal-close');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success modal
    successModal.classList.add('active');
    
    // Reset form
    contactForm.reset();
    
    // Close modal after 3 seconds
    setTimeout(() => {
        successModal.classList.remove('active');
    }, 3000);
});

modalClose.addEventListener('click', () => {
    successModal.classList.remove('active');
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
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
document.querySelectorAll('section').forEach(section => {
    if (!section.classList.contains('hero')) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    }
});

// ===== STATS COUNTER ANIMATION =====
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        const text = element.textContent;
        if (text.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else if (text.includes('+')) {
            element.textContent = Math.floor(current) + '+';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                stat.textContent = '0' + (text.includes('%') ? '%' : text.includes('+') ? '+' : '');
                animateCounter(stat, number);
            });
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

console.log('%cBravemania Photography', 'color: #FF8C00; font-size: 24px; font-weight: bold;');
console.log('%cWebsite created with care ❤️', 'color: #FF6600; font-size: 14px;');
