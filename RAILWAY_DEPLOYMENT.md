# Railway Deployment Guide

This guide will help you deploy the aluuna-website to Railway with just a few commands.

## Prerequisites

1. **Railway Account**: Sign up at [railway.app](https://railway.app)
2. **Railway CLI**: Install the Railway CLI tool
3. **Git Repository**: Ensure your code is in a Git repository

## Quick Setup

### 1. Install Railway CLI

```bash
npm install -g @railway/cli
```

### 2. Login to Railway

```bash
railway login
```

### 3. Initialize Railway Project (First time only)

```bash
railway init
```

This will:
- Create a new Railway project
- Link it to your current directory
- Generate a `railway.json` file

### 4. Deploy

#### Option A: Use the deployment script (Recommended)
```bash
./deploy-railway.sh
```

#### Option B: Manual deployment
```bash
railway up
```

## Configuration Files

The project includes these Railway-specific files:

- **`railway.toml`**: Railway service configuration
- **`.railwayignore`**: Files to exclude from deployment
- **`Dockerfile`**: Production-ready Docker configuration

## Environment Variables

The following environment variables are automatically set:
- `NODE_ENV=production`

You can add custom environment variables in the Railway dashboard or via CLI:

```bash
railway variables set MY_VAR=value
```

## Deployment Process

1. **Build**: The project is built using `npm run build`
2. **Docker**: Railway uses the Dockerfile to create a container
3. **Nginx**: The built React app is served via Nginx
4. **Deploy**: Railway deploys the container to their infrastructure

## Monitoring & Logs

### View logs
```bash
railway logs
```

### Open Railway dashboard
```bash
railway open
```

### Check service status
```bash
railway status
```

## Troubleshooting

### Build fails
- Check that all dependencies are in `package.json`
- Ensure TypeScript compilation passes locally
- Run `npm run build` locally to test

### Deployment fails
- Check Railway logs: `railway logs`
- Verify Dockerfile syntax
- Ensure all required files are present

### App not accessible
- Check Railway dashboard for service status
- Verify the service is running
- Check environment variables

## Custom Domains

To add a custom domain:

1. Go to Railway dashboard
2. Select your service
3. Go to Settings → Domains
4. Add your custom domain
5. Update DNS records as instructed

## Scaling

Railway automatically scales based on traffic. You can also manually adjust:

```bash
railway scale 2  # Scale to 2 instances
```

## Cost Optimization

- Use Railway's free tier for development
- Monitor usage in the dashboard
- Set up spending limits if needed

## Support

- [Railway Documentation](https://docs.railway.app)
- [Railway Discord](https://discord.gg/railway)
- [GitHub Issues](https://github.com/your-repo/issues)

## Next Steps

After successful deployment:

1. Set up monitoring and alerts
2. Configure CI/CD pipeline
3. Set up staging environment
4. Add performance monitoring
