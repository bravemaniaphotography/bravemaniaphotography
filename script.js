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
// TO ADD YOUR OWN PHOTOS:
// 1. Create a folder called "images" in your GitHub repository
// 2. Upload your photos to that folder
// 3. Replace the image URLs below with 'images/your-photo-name.jpg'
// 4. Or use image hosting like Imgur and paste the direct image URL

const portfolioData = [
    // PORTRAIT CATEGORY
    {
        category: 'portrait',
        title: 'Professional Portrait 1',
        description: 'Classic elegance',
        image: 'images/portrait-01.jpg'
    },
    {
        category: 'portrait',
        title: 'Professional Portrait 2',
        description: 'Timeless style',
        image: 'images/portrait-02.jpg'
    },
    {
        category: 'portrait',
        title: 'Professional Portrait 3',
        description: 'Modern sophistication',
        image: 'images/portrait-03.jpg'
    },
    {
        category: 'portrait',
        title: 'Professional Portrait 4',
        description: 'Natural beauty',
        image: 'images/portrait-04.jpg'
    },
    {
        category: 'portrait',
        title: 'Professional Portrait 5',
        description: 'Artistic expression',
        image: 'images/portrait-05.jpg'
    },
    {
        category: 'portrait',
        title: 'Professional Portrait 6',
        description: 'Confident presence',
        image: 'images/portrait-06.jpg'
    },
    {
        category: 'portrait',
        title: 'Professional Portrait 7',
        description: 'Contemporary style',
        image: 'images/portrait-07.jpg'
    },
    
    // BOUDOIR CATEGORY
    {
        category: 'boudoir',
        title: 'Elegant Boudoir 1',
        description: 'Artistic expression',
        image: 'images/boudoir-01.jpg'
    },
    {
        category: 'boudoir',
        title: 'Elegant Boudoir 2',
        description: 'Timeless beauty',
        image: 'images/boudoir-02.jpg'
    },
    {
        category: 'boudoir',
        title: 'Elegant Boudoir 3',
        description: 'Celebrate confidence',
        image: 'images/boudoir-03.jpg'
    },
    {
        category: 'boudoir',
        title: 'Elegant Boudoir 4',
        description: 'Personal empowerment',
        image: 'images/boudoir-04.jpg'
    },
    {
        category: 'boudoir',
        title: 'Elegant Boudoir 5',
        description: 'Intimate moments',
        image: 'images/boudoir-05.jpg'
    },
    {
        category: 'boudoir',
        title: 'Elegant Boudoir 6',
        description: 'Sophisticated style',
        image: 'images/boudoir-06.jpg'
    },
    {
        category: 'boudoir',
        title: 'Elegant Boudoir 7',
        description: 'Natural elegance',
        image: 'images/boudoir-07.jpg'
    },
    {
        category: 'boudoir',
        title: 'Elegant Boudoir 8',
        description: 'Artistic beauty',
        image: 'images/boudoir-08.jpg'
    },
    {
        category: 'boudoir',
        title: 'Elegant Boudoir 9',
        description: 'Timeless grace',
        image: 'images/boudoir-09.jpg'
    },
    {
        category: 'boudoir',
        title: 'Elegant Boudoir 10',
        description: 'Confident beauty',
        image: 'images/boudoir-10.jpg'
    },
    {
        category: 'boudoir',
        title: 'Elegant Boudoir 11',
        description: 'Modern elegance',
        image: 'images/boudoir-11.jpg'
    },
    
    // LIFESTYLE CATEGORY
    {
        category: 'lifestyle',
        title: 'Lifestyle Moments 1',
        description: 'Natural candid',
        image: 'images/Lifestyle-06.jpg'
    },
    {
        category: 'lifestyle',
        title: 'Lifestyle Moments 2',
        description: 'Genuine emotion',
        image: 'images/Lifestyle-07.jpg'
    },
    {
        category: 'lifestyle',
        title: 'Lifestyle Moments 3',
        description: 'Family joy',
        image: 'images/Lifestyle-08.JPG'
    },
    {
        category: 'lifestyle',
        title: 'Lifestyle Moments 4',
        description: 'Precious memories',
        image: 'images/Lifestyle-09.jpg'
    },
    {
        category: 'lifestyle',
        title: 'Lifestyle Moments 5',
        description: 'Candid moments',
        image: 'images/Lifestyle-10.JPG'
    },
    {
        category: 'lifestyle',
        title: 'Lifestyle Moments 6',
        description: 'Natural connection',
        image: 'images/Lifestyle-11.jpg'
    },
    {
        category: 'lifestyle',
        title: 'Lifestyle Moments 7',
        description: 'Beautiful moments',
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
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
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
