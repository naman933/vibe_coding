#!/bin/bash

# VibeCoding Blog - Quick Deploy Script for Vercel
# This script helps you deploy your blog to Vercel quickly

echo "🚀 VibeCoding Blog - Vercel Deployment Helper"
echo "=============================================="
echo ""

# Check if we're in the frontend directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the /app/frontend directory"
    exit 1
fi

echo "📦 Step 1: Checking if Vercel CLI is installed..."
if ! command -v vercel &> /dev/null; then
    echo "📥 Vercel CLI not found. Installing..."
    npm install -g vercel
    echo "✅ Vercel CLI installed successfully!"
else
    echo "✅ Vercel CLI is already installed"
fi

echo ""
echo "🔐 Step 2: Logging in to Vercel..."
echo "   (A browser window will open for authentication)"
vercel login

echo ""
echo "🏗️  Step 3: Building your project locally to check for errors..."
echo "   (This ensures everything works before deployment)"
yarn build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors before deploying."
    exit 1
fi

echo "✅ Local build successful!"
echo ""

echo "🚀 Step 4: Deploying to Vercel..."
echo ""
echo "Choose deployment type:"
echo "  1) Production deployment (recommended)"
echo "  2) Preview deployment (for testing)"
read -p "Enter your choice (1 or 2): " choice

case $choice in
    1)
        echo "Deploying to PRODUCTION..."
        vercel --prod
        ;;
    2)
        echo "Deploying to PREVIEW..."
        vercel
        ;;
    *)
        echo "Invalid choice. Deploying to PREVIEW by default..."
        vercel
        ;;
esac

echo ""
echo "🎉 Deployment Complete!"
echo ""
echo "📝 Next Steps:"
echo "   - Visit the URL provided above to see your live site"
echo "   - Configure custom domain in Vercel dashboard (optional)"
echo "   - Set up automatic deployments via GitHub (optional)"
echo ""
echo "📚 For more details, see VERCEL_DEPLOYMENT.md"
echo ""
