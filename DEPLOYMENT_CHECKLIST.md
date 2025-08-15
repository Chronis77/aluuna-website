# Railway Deployment Checklist

## Pre-Deployment Checklist

### ✅ Project Setup
- [ ] Project builds successfully locally (`npm run build`)
- [ ] All dependencies are in `package.json`
- [ ] TypeScript compilation passes
- [ ] No linting errors (`npm run lint`)

### ✅ Railway Setup
- [ ] Railway CLI installed (`npm install -g @railway/cli`)
- [ ] Logged in to Railway (`railway login`)
- [ ] Railway project initialized (`railway init`)
- [ ] Project linked to Railway

### ✅ Configuration Files
- [ ] `railway.toml` exists and configured
- [ ] `.railwayignore` excludes unnecessary files
- [ ] `Dockerfile` is production-ready
- [ ] `nginx.conf` includes health check endpoint

### ✅ Environment Variables
- [ ] `NODE_ENV=production` set in Railway
- [ ] Any custom environment variables configured
- [ ] Sensitive data not committed to repository

## Deployment Steps

1. **Test Build Locally**
   ```bash
   npm run build
   ```

2. **Deploy to Railway**
   ```bash
   ./deploy-railway.sh
   # or
   railway up
   ```

3. **Verify Deployment**
   - Check Railway dashboard
   - Verify service is running
   - Test health endpoint: `/health`
   - Test main application

## Post-Deployment Verification

### ✅ Service Status
- [ ] Service shows as "Running" in Railway dashboard
- [ ] Health checks are passing
- [ ] No error logs in Railway

### ✅ Application Access
- [ ] Main page loads correctly
- [ ] All routes work (client-side routing)
- [ ] Static assets load properly
- [ ] No console errors in browser

### ✅ Performance
- [ ] Page load times are acceptable
- [ ] Images and assets are cached
- [ ] No 404 errors for static files

## Troubleshooting Common Issues

### Build Failures
- Check Railway logs: `railway logs`
- Verify all dependencies are in `package.json`
- Ensure TypeScript compilation passes locally

### Runtime Errors
- Check browser console for JavaScript errors
- Verify environment variables are set correctly
- Check Railway service logs

### Performance Issues
- Verify static assets are being cached
- Check if CDN is configured properly
- Monitor Railway service metrics

## Rollback Plan

If deployment fails:
1. Check Railway dashboard for previous successful deployment
2. Use Railway CLI to rollback: `railway rollback`
3. Investigate and fix issues
4. Redeploy when ready

## Monitoring Setup

After successful deployment:
- [ ] Set up Railway alerts
- [ ] Configure custom domain (if needed)
- [ ] Set up external monitoring (optional)
- [ ] Configure logging aggregation (optional)
