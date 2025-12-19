// Portfolio Data
const photos = [
    {cat: 'boudoir', img: 'images/boudoir-01.jpg'},
    {cat: 'boudoir', img: 'images/boudoir-02.jpg'},
    {cat: 'boudoir', img: 'images/boudoir-03.jpg'},
    {cat: 'boudoir', img: 'images/boudoir-04.jpg'},
    {cat: 'boudoir', img: 'images/boudoir-05.jpg'},
    {cat: 'boudoir', img: 'images/boudoir-06.jpg'},
    {cat: 'boudoir', img: 'images/boudoir-07.jpg'},
    {cat: 'boudoir', img: 'images/boudoir-08.jpg'},
    {cat: 'boudoir', img: 'images/boudoir-09.jpg'},
    {cat: 'boudoir', img: 'images/boudoir-10.jpg'},
    {cat: 'boudoir', img: 'images/boudoir-11.jpg'},
    {cat: 'portrait', img: 'images/portrait-01.jpg'},
    {cat: 'portrait', img: 'images/portrait-02.jpg'},
    {cat: 'portrait', img: 'images/portrait-03.jpg'},
    {cat: 'portrait', img: 'images/portrait-04.jpg'},
    {cat: 'portrait', img: 'images/portrait-05.jpg'},
    {cat: 'portrait', img: 'images/portrait-06.jpg'},
    {cat: 'portrait', img: 'images/portrait-07.jpg'},
    {cat: 'lifestyle', img: 'images/Lifestyle-06.jpg'},
    {cat: 'lifestyle', img: 'images/Lifestyle-07.jpg'},
    {cat: 'lifestyle', img: 'images/Lifestyle-08.JPG'},
    {cat: 'lifestyle', img: 'images/Lifestyle-09.jpg'},
    {cat: 'lifestyle', img: 'images/Lifestyle-10.JPG'},
    {cat: 'lifestyle', img: 'images/Lifestyle-11.jpg'},
    {cat: 'lifestyle', img: 'images/Lifestyle-12.jpg'}
];

// Render Grid
const grid = document.getElementById('grid');
function render(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all' ? photos : photos.filter(p => p.cat === filter);
    filtered.forEach(p => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.innerHTML = `<img src="${p.img}" alt="${p.cat}">`;
        div.onclick = () => openLightbox(p.img);
        grid.appendChild(div);
    });
}

// Filters
document.querySelectorAll('.filter').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render(btn.dataset.cat);
    };
});

// Lightbox
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
function openLightbox(src) {
    lbImg.src = src;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

document.querySelector('.lb-close').onclick = () => {
    lb.classList.remove('active');
    document.body.style.overflow = 'auto';
};

lb.onclick = (e) => {
    if (e.target === lb) {
        lb.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.onclick = (e) => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };
});

// Init
render();
