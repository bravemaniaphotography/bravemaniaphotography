# Bravemania Photography Website

Professional photography website for Bravemania Photography, showcasing portrait, boudoir, and lifestyle photography services in Melbourne, Victoria, Australia.

## 🌐 Website Information

- **Business Name:** Bravemania Photography
- **Domain:** bravemaniaphotography.com.au
- **Email:** info@bravemaniaphotography.com.au (forwarding to bravemaniaphotography@gmail.com)
- **Phone:** 0431 747 529 (WhatsApp & Signal available)
- **ABN:** 67299864966
- **Location:** Melbourne, Victoria, Australia

## ✨ Features

- **Responsive Design:** Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX:** Clean, elegant design with smooth animations
- **Portfolio Gallery:** Dynamic portfolio with category filtering
- **Contact Form:** Interactive contact form with validation
- **3D Logo:** Custom-drawn 3D camera logo using Canvas API
- **SEO Optimized:** Proper meta tags and semantic HTML
- **Fast Loading:** Optimized images and lazy loading
- **Accessibility:** ARIA labels and keyboard navigation

## 📁 File Structure

```
bravemaniaphotography/
│
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with responsive design
├── script.js           # Main JavaScript functionality
├── logo.js             # Canvas-based logo drawing
└── README.md           # This file
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right → **New repository**
3. Name your repository: `bravemaniaphotography` or `bravemaniaphotography.github.io`
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Files

**Option A: Using GitHub Web Interface**
1. In your new repository, click **Add file** → **Upload files**
2. Drag and drop all files:
   - index.html
   - styles.css
   - script.js
   - logo.js
   - README.md
3. Click **Commit changes**

**Option B: Using Git Command Line**
```bash
# Navigate to the website folder
cd bravemaniaphotography

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Bravemania Photography website"

# Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/bravemaniaphotography.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://USERNAME.github.io/bravemaniaphotography/`

### Step 4: Connect Custom Domain

1. In your domain registrar (where you purchased bravemaniaphotography.com.au):
   - Add a **CNAME** record:
     - Host: `www`
     - Points to: `USERNAME.github.io`
   - Add **A** records pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

2. In GitHub repository Settings → Pages:
   - Under **Custom domain**, enter: `www.bravemaniaphotography.com.au`
   - Check **Enforce HTTPS**
   - Click **Save**

3. Wait for DNS propagation (can take up to 48 hours, usually much faster)

## 📧 Email Setup

To forward info@bravemaniaphotography.com.au to bravemaniaphotography@gmail.com:

### If using cPanel/Hosting Provider:
1. Log into your hosting control panel
2. Find **Email Accounts** or **Email Forwarders**
3. Create forwarder:
   - From: `info@bravemaniaphotography.com.au`
   - To: `bravemaniaphotography@gmail.com`

### If using Domain Registrar:
1. Log into your domain registrar
2. Find **Email Forwarding** settings
3. Set up forwarding as above

## 🎨 Customization

### Update Portfolio Images

Edit the `portfolioData` array in `script.js`:

```javascript
const portfolioData = [
    {
        category: 'portrait', // or 'boudoir', 'lifestyle'
        title: 'Your Photo Title',
        description: 'Photo description',
        image: 'path/to/your/image.jpg'
    },
    // Add more photos...
];
```

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #FF8C00;
    --primary-dark: #FF6600;
    --primary-light: #FFB347;
    --accent-color: #FF4500;
}
```

### Update Contact Information

Edit the contact section in `index.html`:
- Phone number
- Email address
- Location
- Social media links

## 📱 WhatsApp Integration

The phone number links include WhatsApp deep linking:
```html
<a href="https://wa.me/61431747529">WhatsApp</a>
```

## 🔧 Technical Stack

- **HTML5:** Semantic markup
- **CSS3:** Modern styling with Flexbox and Grid
- **JavaScript (ES6+):** Interactive functionality
- **Canvas API:** Custom logo rendering
- **Google Fonts:** Montserrat & Playfair Display

## 🌟 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 To-Do / Future Enhancements

- [ ] Add backend for contact form submissions
- [ ] Integrate with email service (EmailJS, Formspree, etc.)
- [ ] Add photo gallery lightbox
- [ ] Implement booking/scheduling system
- [ ] Add blog section
- [ ] Integrate Instagram feed
- [ ] Add testimonials management system
- [ ] Implement analytics (Google Analytics)

## 📄 License

© 2025 Bravemania Photography. All rights reserved.

## 📞 Support

For questions or support:
- **Email:** info@bravemaniaphotography.com.au
- **Phone:** 0431 747 529
- **WhatsApp:** Available on same number

---

**Built with ❤️ for Bravemania Photography**
