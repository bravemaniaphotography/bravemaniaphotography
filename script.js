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
const portfolioData = [
    {
        category: 'portrait',
        title: 'Professional Portrait',
        description: 'Business professional headshot',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=750&fit=crop'
    },
    {
        category: 'boudoir',
        title: 'Elegant Boudoir',
        description: 'Timeless elegance',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=750&fit=crop'
    },
    {
        category: 'lifestyle',
        title: 'Lifestyle Moments',
        description: 'Natural and candid',
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=750&fit=crop'
    },
    {
        category: 'portrait',
        title: 'Editorial Portrait',
        description: 'Fashion-forward style',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=750&fit=crop'
    },
    {
        category: 'boudoir',
        title: 'Artistic Expression',
        description: 'Celebrate confidence',
        image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=750&fit=crop'
    },
    {
        category: 'lifestyle',
        title: 'Natural Beauty',
        description: 'Outdoor lifestyle session',
        image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&h=750&fit=crop'
    },
    {
        category: 'portrait',
        title: 'Classic Portrait',
        description: 'Timeless elegance',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=750&fit=crop'
    },
    {
        category: 'boudoir',
        title: 'Intimate Session',
        description: 'Personal and empowering',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=750&fit=crop'
    },
    {
        category: 'lifestyle',
        title: 'Authentic Moments',
        description: 'Genuine emotion captured',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=750&fit=crop'
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
    
    // Here you would typically send the data to a server
    // For now, we'll just show the success modal
    console.log('Form submitted:', formData);
    
    // Show success modal
    successModal.style.display = 'block';
    
    // Reset form
    contactForm.reset();
    
    // For demonstration, create a mailto link
    const subject = `Photography Inquiry - ${formData.service}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:info@bravemaniaphotography.com.au?subject=${subject}&body=${body}`;
    
    // Optional: Open email client
    // window.location.href = mailtoLink;
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

// ===== TESTIMONIAL ROTATION (Optional Enhancement) =====
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function rotateTestimonials() {
    testimonialCards.forEach((card, index) => {
        if (index === currentTestimonial) {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 15px 40px rgba(255, 140, 0, 0.4)';
        } else {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        }
    });
    
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
}

// Optional: Auto-rotate testimonials every 5 seconds
// setInterval(rotateTestimonials, 5000);

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
