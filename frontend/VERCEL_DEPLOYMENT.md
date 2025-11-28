# Vercel Deployment Guide for VibeCoding Blog

## Prerequisites
- A Vercel account (sign up at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js installed on your local machine

## Option 1: Deploy via Vercel Dashboard (Recommended for Beginners)

### Step 1: Push Code to GitHub
1. Create a new repository on GitHub
2. Initialize git in your frontend directory:
   ```bash
   cd /app/frontend
   git init
   git add .
   git commit -m "Initial commit: VibeCoding blog"
   ```
3. Connect to your GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import to Vercel
1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Create React App
   - **Root Directory**: `./` (or leave as default)
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
   - **Install Command**: `yarn install`

5. Click "Deploy"

### Step 3: Wait for Deployment
- Vercel will build and deploy your app
- You'll get a live URL (e.g., `your-project.vercel.app`)

---

## Option 2: Deploy via Vercel CLI (For Advanced Users)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
# or
yarn global add vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
Follow the prompts to authenticate with your Vercel account.

### Step 3: Deploy from Frontend Directory
```bash
cd /app/frontend

# For production deployment
vercel --prod

# For preview deployment (testing)
vercel
```

### Step 4: Follow CLI Prompts
The CLI will ask you:
- Set up and deploy? (Y/n): **Y**
- Which scope? Select your account
- Link to existing project? (y/N): **N** (for first deployment)
- What's your project's name? **vibecoding-blog** (or your choice)
- In which directory is your code located? **./`** (current directory)
- Want to override settings? (y/N): **N**

### Step 5: Deployment Complete
The CLI will display your deployment URL.

---

## Option 3: One-Command Deployment

If you're already in the frontend directory:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

---

## Environment Variables (If Needed)

If your app requires environment variables:

### Via Dashboard:
1. Go to your project on Vercel
2. Click "Settings" → "Environment Variables"
3. Add your variables (e.g., `REACT_APP_BACKEND_URL`)

### Via CLI:
```bash
vercel env add REACT_APP_BACKEND_URL production
# Enter the value when prompted
```

---

## Post-Deployment

### Custom Domain (Optional)
1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Automatic Deployments
Once connected to GitHub:
- Every push to `main` branch triggers a production deployment
- Pull requests create preview deployments automatically

---

## Useful Vercel Commands

```bash
# Check deployment status
vercel ls

# View project info
vercel inspect [deployment-url]

# View deployment logs
vercel logs [deployment-url]

# Remove deployment
vercel remove [deployment-url]

# Pull environment variables
vercel env pull
```

---

## Troubleshooting

### Build Fails
- Check build logs on Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify build works locally: `yarn build`

### Environment Variables Not Working
- Ensure they start with `REACT_APP_` prefix
- Redeploy after adding/changing env vars
- Check they're set for the correct environment (Production/Preview/Development)

### 404 Errors on Refresh
- The `vercel.json` file already includes rewrites configuration
- This ensures client-side routing works correctly

---

## Quick Reference Commands

### For First-Time Deployment:
```bash
cd /app/frontend
npm install -g vercel
vercel login
vercel --prod
```

### For Updates:
```bash
cd /app/frontend
git add .
git commit -m "Update blog content"
git push origin main
# Vercel auto-deploys if connected to GitHub
# OR manually:
vercel --prod
```

---

## Production Checklist
- [ ] Code pushed to GitHub/GitLab/Bitbucket
- [ ] Vercel project created and connected
- [ ] Build successful
- [ ] Deployment URL accessible
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Video plays correctly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Custom domain configured (optional)

---

## Support
- Vercel Documentation: https://vercel.com/docs
- Vercel Discord: https://vercel.com/discord
- GitHub Issues: Create issues in your repository

---

**Your VibeCoding blog is ready to deploy! Choose the option that works best for you and follow the steps above.** 🚀
