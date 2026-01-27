# 🚀 Deployment Wizard: Stable Collective to GitHub & Vercel

## Step 1: Prepare Your Code ✅
All your code is ready! Let's commit it to Git.

## Step 2: Commit Your Changes
Run these commands in your terminal:

```bash
cd stable-collective
git add .
git commit -m "Initial commit: Stable Collective trading platform"
```

## Step 3: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `stable-collective` (or your preferred name)
3. Description: "Trading education and tools platform"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

## Step 4: Push to GitHub
After creating the repo, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/stable-collective.git
git branch -M main
git push -u origin main
```

(Replace `YOUR_USERNAME` with your actual GitHub username)

## Step 5: Deploy to Vercel
1. Go to https://vercel.com
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account
5. Click **"Add New Project"**
6. Find and select your `stable-collective` repository
7. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js ✅
   - Root Directory: `./` ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `.next` ✅
8. Click **"Deploy"**
9. Wait 2-3 minutes for deployment
10. 🎉 Your site will be live at: `https://stable-collective.vercel.app`

## Step 6: Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting
- **Build fails?** Check that all dependencies are in `package.json`
- **404 errors?** Ensure all routes are in the `app/` directory
- **Styling issues?** Verify Tailwind CSS is properly configured

## Next Steps
- Set up environment variables if needed (Settings → Environment Variables)
- Enable analytics (Settings → Analytics)
- Configure automatic deployments from `main` branch
