# Vercel Deployment Setup Guide

## ⚠️ CRITICAL: Firebase Environment Variables

Your website is currently failing on Vercel because Firebase environment variables are missing.

### Step-by-Step Fix:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project: `DesynixInfotech`

2. **Navigate to Settings**
   - Click on "Settings" tab
   - Click on "Environment Variables" in the left sidebar

3. **Add These Variables** (Copy from your `.env` file):

   ```
   VITE_FIREBASE_API_KEY=AIzaSyC6iigxbqKkE2obEvGOIjnfS41YyxxxB50
   VITE_FIREBASE_AUTH_DOMAIN=desynix-infotech.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=desynix-infotech
   VITE_FIREBASE_STORAGE_BUCKET=desynix-infotech.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=443466807967
   VITE_FIREBASE_APP_ID=1:443466807967:web:7d52d58a49783a4aac00aa
   VITE_FIREBASE_MEASUREMENT_ID=G-0XVQKY19NP
   ```

4. **For Each Variable:**
   - Click "Add New"
   - Enter the **Name** (e.g., `VITE_FIREBASE_API_KEY`)
   - Enter the **Value** (e.g., `AIzaSyC6iigxbqKkE2obEvGOIjnfS41YyxxxB50`)
   - Select **All Environments** (Production, Preview, Development)
   - Click "Save"

5. **Redeploy**
   - Go to "Deployments" tab
   - Click the three dots (...) on the latest deployment
   - Click "Redeploy"
   - Wait for deployment to complete

### Verification:

After redeployment, your website should work without errors. Test by:
1. Opening the live site
2. Going to the Contact page
3. Submitting a test message
4. Checking Firebase Console for the new entry

---

## Alternative: Quick Setup via Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Link to your project
vercel link

# Add environment variables from .env
vercel env pull .env.production
vercel env add VITE_FIREBASE_API_KEY
# (Enter the value when prompted)
# Repeat for all variables

# Redeploy
vercel --prod
```

---

## Security Note:

✅ Your `.env` file is in `.gitignore` - credentials are NOT in GitHub
✅ Vercel environment variables are encrypted and secure
⚠️ Never commit `.env` to version control
