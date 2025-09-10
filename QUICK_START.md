# 🚀 Quick Start - Deploy to Vercel in 10 Minutes

## 🎯 **Immediate Action Steps**

### **Step 1: Install Node.js (2 minutes)**
1. Download and install from [nodejs.org](https://nodejs.org) (choose LTS version)
2. Restart your terminal/command prompt after installation

### **Step 2: Prepare Project (2 minutes)**
```powershell
# Option A: Run the automated setup
.\deploy.bat

# Option B: Manual commands
npm install
npm run build
npm run preview
```

### **Step 3: Setup Git (1 minute)**
```powershell
# Run the Git setup script
.\setup-git.ps1

# Or manually:
git init
git add .
git commit -m "Initial commit - Cybersecurity Portfolio"
```

### **Step 4: GitHub Setup (2 minutes)**
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `cybersecurity-portfolio`
3. **Don't check** "Initialize with README"
4. Click "Create repository"

### **Step 5: Connect GitHub (1 minute)**
```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/cybersecurity-portfolio.git
git branch -M main
git push -u origin main
```

### **Step 6: Deploy on Vercel (2 minutes)**
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign in with GitHub"
3. Click "New Project"
4. Import your `cybersecurity-portfolio` repository
5. Click "Deploy" (Vercel auto-detects Vite settings)

## 🎉 **Done!**

Your portfolio will be live at: `https://your-project.vercel.app`

---

## ⚡ **Super Quick Version (CLI Method)**

If you prefer command line:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login and deploy
vercel login
vercel

# Follow the prompts, then your site is live!
```

---

## 📋 **Before You Deploy Checklist**

- [ ] **Resume File**: Place `MOJETIOLUWA_BOLAJI_RESUME.pdf` in the `public/` folder
- [ ] **GitHub Repos**: Ensure your GitHub repositories (DNSROCKS, Dumblepot, etc.) are public
- [ ] **Test Locally**: Run `npm run preview` and test all functionality

---

## 🛠️ **If You Encounter Issues**

### **Node.js not found:**
- Install Node.js from [nodejs.org](https://nodejs.org)
- Restart terminal after installation

### **Git not found:**
- Install Git from [git-scm.com](https://git-scm.com/download/win)
- Restart terminal after installation

### **Build fails:**
```bash
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### **Need help?**
- Check `VERCEL_DEPLOYMENT_GUIDE.md` for detailed instructions
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)

---

## 🎯 **What You Get**

✅ **Professional Portfolio** live on the internet  
✅ **Custom Domain** support (optional)  
✅ **Auto-deployments** on code changes  
✅ **HTTPS** and **CDN** included  
✅ **Analytics** and **Performance** monitoring  
✅ **Perfect for showcasing** to employers/clients  

**Your cybersecurity expertise + modern deployment = impressive professional presence! 🔒💻**
