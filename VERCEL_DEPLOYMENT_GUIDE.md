# 🚀 Vercel Deployment Guide - Cybersecurity Portfolio

## 🎯 Quick Deployment (5 Minutes)

### **Prerequisites**
- Node.js installed (download from [nodejs.org](https://nodejs.org))
- Git installed
- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))

---

## 📋 **Step 1: Prepare Your Project**

### **1.1 Install Node.js (if not installed)**
```bash
# Download and install from https://nodejs.org
# Verify installation
node --version
npm --version
```

### **1.2 Install Dependencies**
```bash
# Navigate to project directory
cd C:\Users\user\OneDrive\Documents\secure-canvas-craft

# Install dependencies
npm install
```

### **1.3 Add Resume File**
```bash
# Place your resume file in the public folder
# Convert MOJETIOLUWA_BOLAJI_RESUME.docx to PDF
# Save as: public/MOJETIOLUWA_BOLAJI_RESUME.pdf
```

### **1.4 Test Local Build**
```bash
# Build the project
npm run build

# Test the build locally
npm run preview
```

---

## 🔧 **Step 2: GitHub Setup**

### **2.1 Initialize Git (if not already done)**
```bash
git init
git add .
git commit -m "Initial commit - Cybersecurity Portfolio"
```

### **2.2 Create GitHub Repository**
1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `cybersecurity-portfolio` or `mojetioluwa-portfolio`
3. **Don't** initialize with README (we already have files)

### **2.3 Connect to GitHub**
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/cybersecurity-portfolio.git
git branch -M main
git push -u origin main
```

---

## 🌐 **Step 3: Deploy to Vercel**

### **Method A: GitHub Integration (Recommended)**

#### **3.1 Connect GitHub to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**
4. **Import** your repository
5. Configure project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### **3.2 Deploy**
1. Click **"Deploy"**
2. Wait 2-3 minutes for deployment
3. Get your live URL: `https://your-project.vercel.app`

### **Method B: Vercel CLI (Alternative)**

#### **3.1 Install Vercel CLI**
```bash
npm install -g vercel
```

#### **3.2 Login and Deploy**
```bash
# Login to Vercel
vercel login

# Deploy (follow the prompts)
vercel

# For production deployment
vercel --prod
```

---

## 🎨 **Step 4: Custom Domain (Optional)**

### **4.1 Add Custom Domain**
1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Add your custom domain (e.g., `mojetioluwa-security.com`)

### **4.2 Configure DNS**
1. Point your domain to Vercel:
   - **Type**: CNAME
   - **Name**: @ (or www)
   - **Value**: cname.vercel-dns.com
2. Wait for DNS propagation (up to 24 hours)

---

## 🔄 **Step 5: Automatic Deployments**

### **GitHub Integration Benefits**
- ✅ **Auto-deploy** on every push to main branch
- ✅ **Preview deployments** for pull requests
- ✅ **Rollback** to previous versions easily
- ✅ **Build logs** and error reporting

### **Deployment Workflow**
```bash
# Make changes to your code
git add .
git commit -m "Update portfolio content"
git push origin main
# Vercel automatically deploys! 🎉
```

---

## ⚡ **Step 6: Performance Optimization**

### **6.1 Vercel Analytics (Free)**
1. Go to project dashboard
2. Click **Analytics** tab
3. Enable **Web Analytics**
4. Get insights on page views, performance

### **6.2 Speed Insights**
1. Enable **Speed Insights** in Vercel dashboard
2. Monitor Core Web Vitals
3. Get performance recommendations

---

## 🛠️ **Troubleshooting**

### **Common Issues & Solutions**

#### **Build Fails**
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

#### **Routing Issues**
- ✅ Already handled by `vercel.json` configuration
- SPA routing works automatically

#### **Resume Download Not Working**
- ✅ Ensure PDF file is in `public/` folder
- ✅ File name matches exactly: `MOJETIOLUWA_BOLAJI_RESUME.pdf`

#### **GitHub Links Not Working**
- ✅ Check repository names match in `ProjectsSection.tsx`
- ✅ Ensure repositories are public

#### **Email Not Opening**
- ✅ Mailto links should work on all devices
- ✅ May require default email app setup

---

## 📊 **Monitoring Your Site**

### **Vercel Dashboard Provides:**
- 📈 **Analytics**: Page views, visitors, top pages
- ⚡ **Performance**: Load times, Core Web Vitals
- 🔍 **Function Logs**: For any serverless functions
- 🚀 **Deployment History**: All deployments and rollbacks

### **Additional Monitoring (Optional):**
- **Google Analytics**: Add tracking code
- **Google Search Console**: Monitor SEO performance
- **Lighthouse CI**: Automated performance testing

---

## 🎯 **Post-Deployment Checklist**

### **✅ Test All Features:**
- [ ] Homepage loads correctly
- [ ] "View Projects" button scrolls to projects section
- [ ] "Download Resume" downloads the PDF
- [ ] All "Code" buttons open correct GitHub repos
- [ ] "Send Me an Email" opens email client
- [ ] "View My GitHub" opens GitHub profile
- [ ] Site works on mobile devices
- [ ] All animations and effects work
- [ ] Dark theme displays correctly

### **✅ SEO & Performance:**
- [ ] Add meta description in `index.html`
- [ ] Test site speed with PageSpeed Insights
- [ ] Verify mobile responsiveness
- [ ] Check broken links

---

## 🌟 **Final Result**

Your cybersecurity portfolio will be live at:
- **Vercel URL**: `https://your-project.vercel.app`
- **Custom Domain** (if configured): `https://your-domain.com`

### **Features Working:**
- ⚡ **Lightning fast** loading times
- 🔒 **HTTPS** by default
- 🌍 **Global CDN** for worldwide performance
- 📱 **Mobile optimized**
- 🔄 **Auto-deployments** on code changes
- 📊 **Built-in analytics**

---

## 🆘 **Need Help?**

### **Vercel Support:**
- 📖 [Vercel Documentation](https://vercel.com/docs)
- 💬 [Vercel Community](https://github.com/vercel/vercel/discussions)

### **Quick Commands Reference:**
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

---

## 🎉 **Congratulations!**

Your cybersecurity portfolio is now live on Vercel! 🚀

The site showcases your technical expertise while demonstrating modern web deployment practices - a perfect combination for a cybersecurity professional! 🔒💻
