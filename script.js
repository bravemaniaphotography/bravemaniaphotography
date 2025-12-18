// Bravemania Photography - Main JavaScript

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== PORTFOLIO =====
// All 30 photos from your GitHub repository
const portfolioData = [
    // PORTRAIT CATEGORY - 7 photos
    {
        category: 'portrait',
        title: 'Fashion Editorial',
        description: 'Bold and confident style',
        image: 'images/portrait-01.jpg'
    },
    {
        category: 'portrait',
        title: 'Studio Elegance',
        description: 'Timeless sophistication',
        image: 'images/portrait-02.jpg'
    },
    {
        category: 'portrait',
        title: 'Urban Portrait',
        description: 'Contemporary aesthetic',
        image: 'images/portrait-03.jpg'
    },
    {
        category: 'portrait',
        title: 'Vibrant Style',
        description: 'Colorful personality',
        image: 'images/portrait-04.jpg'
    },
    {
        category: 'portrait',
        title: 'Artistic Expression',
        description: 'Creative composition',
        image: 'images/portrait-05.jpg'
    },
    {
        category: 'portrait',
        title: 'Modern Beauty',
        description: 'Clean and sophisticated',
        image: 'images/portrait-06.jpg'
    },
    {
        category: 'portrait',
        title: 'Natural Light',
        description: 'Sun-kissed elegance',
        image: 'images/portrait-07.jpg'
    },
    
    // BOUDOIR CATEGORY - 11 photos
    {
        category: 'boudoir',
        title: 'Elegant Silhouette',
        description: 'Artistic expression',
        image: 'images/boudoir-01.jpg'
    },
    {
        category: 'boudoir',
        title: 'Beach Romance',
        description: 'Natural and carefree',
        image: 'images/boudoir-02.jpg'
    },
    {
        category: 'boudoir',
        title: 'Timeless Beauty',
        description: 'Classic elegance',
        image: 'images/boudoir-03.jpg'
    },
    {
        category: 'boudoir',
        title: 'Natural Grace',
        description: 'Warm and intimate',
        image: 'images/boudoir-04.jpg'
    },
    {
        category: 'boudoir',
        title: 'Dramatic Lighting',
        description: 'Bold and confident',
        image: 'images/boudoir-05.jpg'
    },
    {
        category: 'boudoir',
        title: 'Artistic Portrait',
        description: 'Creative expression',
        image: 'images/boudoir-06.jpg'
    },
    {
        category: 'boudoir',
        title: 'Golden Hour',
        description: 'Sunset elegance',
        image: 'images/boudoir-07.jpg'
    },
    {
        category: 'boudoir',
        title: 'Urban Setting',
        description: 'Contemporary style',
        image: 'images/boudoir-08.jpg'
    },
    {
        category: 'boudoir',
        title: 'Beach Moments',
        description: 'Romantic and free',
        image: 'images/boudoir-09.jpg'
    },
    {
        category: 'boudoir',
        title: 'Sophisticated Style',
        description: 'Elegant composition',
        image: 'images/boudoir-10.jpg'
    },
    {
        category: 'boudoir',
        title: 'Street Dance',
        description: 'Dynamic movement',
        image: 'images/boudoir-11.jpg'
    },
    
    // LIFESTYLE CATEGORY - 12 photos
    {
        category: 'lifestyle',
        title: 'Active Lifestyle',
        description: 'Outdoor adventure',
        image: 'images/Lifestyle-01.jpg'
    },
    {
        category: 'lifestyle',
        title: 'Lakeside Moments',
        description: 'Peaceful scenery',
        image: 'images/Lifestyle-02.jpg'
    },
    {
        category: 'lifestyle',
        title: 'Sweet Baby',
        description: 'Precious innocence',
        image: 'images/Lifestyle-03.JPG'
    },
    {
        category: 'lifestyle',
        title: 'Feathered Friend',
        description: 'Pet photography',
        image: 'images/Lifestyle-04.JPG'
    },
    {
        category: 'lifestyle',
        title: 'Nature Walk',
        description: 'Candid moments',
        image: 'images/Lifestyle-05.jpg'
    },
    {
        category: 'lifestyle',
        title: 'Baby Joy',
        description: 'Pure happiness',
        image: 'images/Lifestyle-06.jpg'
    },
    {
        category: 'lifestyle',
        title: 'Waterside Beauty',
        description: 'Natural setting',
        image: 'images/Lifestyle-07.jpg'
    },
    {
        category: 'lifestyle',
        title: 'Peaceful Baby',
        description: 'Tender moments',
        image: 'images/Lifestyle-08.JPG'
    },
    {
        category: 'lifestyle',
        title: 'Outdoor Fun',
        description: 'Family memories',
        image: 'images/Lifestyle-09.jpg'
    },
    {
        category: 'lifestyle',
        title: 'Playground Joy',
        description: 'Childhood wonder',
        image: 'images/Lifestyle-10.JPG'
    },
    {
        category: 'lifestyle',
        title: 'Parkside Portrait',
        description: 'Natural connection',
        image: 'images/Lifestyle-11.jpg'
    },
    {
        category: 'lifestyle',
        title: 'Sweet Smile',
        description: 'Genuine emotion',
        image: 'images/Lifestyle-12.jpg'
    }
];

const portfolioGrid = document.getElementById('portfolioGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Render portfolio items
function renderPortfolio(filter = 'all') {
    portfolioGrid.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === filter);
    
    filteredData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        portfolioItem.setAttribute('data-category', item.category);
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // Animate items
    const items = portfolioGrid.querySelectorAll('.portfolio-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        }, index * 50);
    });
}

// Filter portfolio
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        renderPortfolio(filter);
    });
});

// Initialize portfolio
renderPortfolio();

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const closeModal = document.querySelector('.close-modal');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    console.log('Form submitted:', formData);
    
    // Show success modal
    successModal.style.display = 'block';
    
    // Reset form
    contactForm.reset();
});

// Close modal
closeModal.addEventListener('click', () => {
    successModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.style.display = 'none';
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
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
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

// ===== STATS COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (element.textContent.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else if (element.textContent.includes('+')) {
            element.textContent = Math.floor(current) + '+';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const hasPlus = text.includes('+');
                const hasPercent = text.includes('%');
                const number = parseInt(text.replace(/\D/g, ''));
                
                stat.textContent = '0' + (hasPercent ? '%' : hasPlus ? '+' : '');
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

// ===== LAZY LOADING IMAGES =====
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
});

// ===== PARALLAX EFFECT FOR HERO =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    }
});

// ===== FORM VALIDATION ENHANCEMENT =====
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() !== '') {
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }
    });
    
    input.addEventListener('invalid', (e) => {
        e.preventDefault();
        input.style.borderColor = '#ff0000';
    });
    
    input.addEventListener('input', () => {
        input.style.borderColor = '#e0e0e0';
    });
});

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== CONSOLE MESSAGE =====
console.log('%cBravemania Photography', 'color: #FF8C00; font-size: 24px; font-weight: bold;');
console.log('%cWebsite designed and developed with ❤️', 'color: #FF6600; font-size: 14px;');
console.log('%cFor inquiries: info@bravemaniaphotography.com.au', 'color: #666; font-size: 12px;');
