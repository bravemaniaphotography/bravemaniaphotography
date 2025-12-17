# 🚀 Quick Deployment Guide - Bravemania Photography

## ✅ What You Have

All files for your professional photography website:
- `index.html` - Main website page
- `styles.css` - Beautiful styling
- `script.js` - Interactive features
- `logo.js` - 3D camera logo
- `CNAME` - Custom domain configuration
- `robots.txt` - Search engine instructions
- `sitemap.xml` - SEO sitemap
- `README.md` - Detailed documentation

## 📋 Quick Steps to Go Live

### 1️⃣ Create GitHub Account (if you don't have one)
- Go to https://github.com/signup
- Create free account

### 2️⃣ Create New Repository
1. Click the **+** icon (top right) → **New repository**
2. Repository name: `bravemaniaphotography`
3. Make it **Public**
4. Click **Create repository**

### 3️⃣ Upload Your Files
1. Click **uploading an existing file**
2. Drag ALL files into the upload area:
   - index.html
   - styles.css
   - script.js
   - logo.js
   - CNAME
   - robots.txt
   - sitemap.xml
   - README.md
3. Write commit message: "Initial website launch"
4. Click **Commit changes**

### 4️⃣ Enable GitHub Pages
1. Go to **Settings** tab
2. Click **Pages** in left sidebar
3. Under **Source**:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. Wait 2-3 minutes

Your site is now live at: `https://YOUR-USERNAME.github.io/bravemaniaphotography/`

### 5️⃣ Connect Your Custom Domain

**In Your Domain Registrar (where you bought bravemaniaphotography.com.au):**

Add these DNS records:

**A Records:**
```
Type: A
Host: @
Points to: 185.199.108.153

Type: A
Host: @
Points to: 185.199.109.153

Type: A
Host: @
Points to: 185.199.110.153

Type: A
Host: @
Points to: 185.199.111.153
```

**CNAME Record:**
```
Type: CNAME
Host: www
Points to: YOUR-USERNAME.github.io
```

**In GitHub (Settings → Pages):**
1. Custom domain: `www.bravemaniaphotography.com.au`
2. Check **Enforce HTTPS**
3. Click **Save**

⏰ **Wait 1-24 hours for DNS to propagate**

## 📧 Email Setup

Set up email forwarding in your domain control panel:
- From: `info@bravemaniaphotography.com.au`
- To: `bravemaniaphotography@gmail.com`

## ✨ Your Website Features

✅ Fully responsive (works on all devices)
✅ Professional portfolio gallery
✅ Contact form
✅ 3D animated logo
✅ Smooth scrolling navigation
✅ Mobile menu
✅ SEO optimized
✅ Fast loading
✅ WhatsApp integration

## 🎨 Customize Your Portfolio

Edit `script.js` and find the `portfolioData` array. Replace the placeholder images with your own:

```javascript
const portfolioData = [
    {
        category: 'portrait',
        title: 'Your Photo Title',
        description: 'Description',
        image: 'YOUR_IMAGE_URL_HERE'
    },
    // Add more...
];
```

## 📱 Test Your Website

After deployment, test:
- ✅ Desktop view
- ✅ Mobile view (use phone)
- ✅ All links work
- ✅ Contact form
- ✅ Portfolio filters
- ✅ Navigation menu

## 🆘 Need Help?

Common issues:
- **404 Error:** Make sure `index.html` is in root folder
- **Styles not loading:** Check all files uploaded correctly
- **Domain not working:** Wait 24 hours for DNS propagation
- **Logo not showing:** Make sure `logo.js` is uploaded

## 📞 Business Information on Site

✅ Phone: 0431 747 529 (with WhatsApp link)
✅ Email: info@bravemaniaphotography.com.au
✅ Location: Melbourne, Victoria
✅ ABN: 67299864966
✅ Services: Portrait, Boudoir, Lifestyle Photography

## 🎯 Next Steps After Launch

1. Upload your actual photography portfolio images
2. Update "About Me" section with your personal story
3. Add testimonials from real clients
4. Set up Google Analytics (optional)
5. Submit sitemap to Google Search Console
6. Share on social media

## 🌟 Your Website is Professional & Ready!

Everything is set up and ready to showcase your photography business. Just follow the steps above to go live!

---

**Need help? Contact: info@bravemaniaphotography.com.au**
