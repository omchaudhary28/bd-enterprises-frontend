#!/bin/bash
# GoDaddy Deployment Checklist & Scripts

## Pre-Deployment Checklist

### Local Testing (✅ COMPLETED)
- [x] Frontend built successfully
- [x] Backend server running on port 5000
- [x] Frontend server running on port 3000
- [x] Dependencies installed

### Pre-Deployment (DO BEFORE UPLOADING TO GODADDY)
- [ ] Test contact form locally
- [ ] Verify database connection
- [ ] Test all API endpoints
- [ ] Update `.env` with production credentials
- [ ] Verify HTTPS certificate availability
- [ ] Backup current production (if applicable)

---

## GoDaddy Hosting Setup Steps

### Step 1: Prepare Environment (5 minutes)
```bash
# Update production environment variables
# Edit: bd-enterprises-backend/.env.production
# Copy to: bd-enterprises-backend/.env

NODE_ENV=production
FRONTEND_URL=https://your-domain.com
DB_HOST=your-godaddy-mysql-host
DB_USER=your-database-user
DB_PASSWORD=your-secure-password
DB_NAME=bd_enterprises
```

### Step 2: Upload Files to GoDaddy (10 minutes)
```bash
# Option A: Via FTP
# Connect to your GoDaddy FTP server
# Upload:
# - bd-enterprises-backend/ → /home/your-user/bd-enterprises-backend/
# - bd-enterprises/build/ → /home/your-user/public_html/

# Option B: Via SSH
# Upload project and navigate:
cd /home/your-user/
scp -r ./bd-enterprises-backend/ user@godaddy-host:/home/your-user/
```

### Step 3: Setup Node.js in cPanel (5 minutes)
```
1. Login to GoDaddy cPanel
2. Go to: Software > Node.js
3. Click "Create New Application"
4. Configure:
   - Application Name: B. D. Enterprises
   - Node.js Version: 18+ (recommended)
   - Application Root: bd-enterprises-backend/
   - App URL: your-domain.com
   - Startup File: server.js
5. Click "Create" and "Start"
```

### Step 4: Point Domain to Frontend (5 minutes)
```
1. In cPanel, go to: Files > Document Root
2. Set Document Root to: /home/your-user/public_html/
3. Ensure build/ folder contents are in public_html/
4. Enable HTTPS (usually free with GoDaddy hosting)
```

### Step 5: Configure Database (10 minutes)
```bash
# Via cPanel MySQL Database Manager:
1. Create new database: bd_enterprises
2. Create new user with password
3. Assign user to database with ALL privileges
4. Update backend .env with credentials:
   DB_HOST=localhost (or your GoDaddy MySQL host)
   DB_USER=your-db-user
   DB_PASSWORD=your-db-password

# Import SQL schema:
mysql -u your-db-user -p bd_enterprises < database.sql
```

### Step 6: Configure Email Settings (5 minutes)
```
Update in .env:
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password (generate in Google Account)
```

### Step 7: Restart Node.js Application (2 minutes)
```
1. Go to cPanel > Software > Node.js
2. Find your application
3. Click "Restart"
4. Wait 30 seconds for restart to complete
```

---

## Post-Deployment Verification

### Critical Tests
- [ ] Frontend loads at https://your-domain.com
- [ ] Backend API responds at https://your-domain.com/api/health
- [ ] Contact form submits successfully
- [ ] Database stores contact submissions
- [ ] Email notifications are sent
- [ ] No CORS errors in browser console

### Performance Checks
- [ ] Page load time < 3 seconds
- [ ] No 404 errors in browser console
- [ ] Images load correctly
- [ ] Forms are responsive on mobile

### Security Checks
- [ ] HTTPS is enabled (green padlock)
- [ ] Database credentials not in frontend code
- [ ] Sensitive data in .env only (not committed to git)
- [ ] CORS whitelist includes only your domain

---

## Troubleshooting Commands

### SSH Into GoDaddy Server
```bash
ssh user@your-godaddy-host
cd /home/user/bd-enterprises-backend
```

### Check Node.js Application Status
```bash
# View Node.js process
pm2 list
# or
ps aux | grep node
```

### View Application Logs
```bash
# Check cPanel logs
tail -f /var/cpanel/user-data/youruser/nodeapp.log
# or
pm2 logs
```

### Test Backend Connectivity
```bash
curl -X GET http://localhost:5000/api/health
```

### Restart Node.js
```bash
# Via cPanel or SSH
pm2 restart bd-enterprises-backend
# or navigate to Node.js section in cPanel and click Restart
```

### Check Database Connection
```bash
mysql -u your-db-user -p -h your-db-host
USE bd_enterprises;
SHOW TABLES;
```

---

## Rollback Plan (If Needed)

If deployment fails:
1. Stop the Node.js application in cPanel
2. Restore previous version from backup
3. Restart application
4. Check logs for errors
5. Fix issues locally, test, redeploy

---

## Monitoring & Maintenance

### Daily
- [ ] Check application logs for errors
- [ ] Verify contact form submissions are processing

### Weekly
- [ ] Monitor server resource usage (cPanel)
- [ ] Check email delivery logs
- [ ] Verify database backups

### Monthly
- [ ] Review performance metrics
- [ ] Check for security updates
- [ ] Clean up old logs

---

## Support Contacts

- **GoDaddy Support**: https://www.godaddy.com/help
- **Node.js Documentation**: https://nodejs.org/docs/
- **Express.js Help**: https://expressjs.com/
- **React Documentation**: https://react.dev/

---

## Quick Command Reference

```bash
# SSH Connection
ssh user@your-godaddy-host

# Navigate to project
cd /home/user/bd-enterprises-backend

# Start application
npm start

# Stop application
npm stop  # or press Ctrl+C

# Check logs
tail -f logs/app.log

# Restart application
pm2 restart all

# Check Node version
node --version

# Check npm version
npm --version

# Check running processes
ps aux | grep node
```

---

## Files in This Package

- ✅ `bd-enterprises/` - Frontend React app
- ✅ `bd-enterprises-backend/` - Backend Node.js API
- ✅ `GODADDY_DEPLOYMENT.md` - Detailed guide
- ✅ `DEPLOYMENT_READY.md` - Quick reference
- ✅ `PROJECT_STATUS.md` - Current status
- ✅ `.env.production` - Production environment template
- ✅ `database.sql` - Database schema

---

*Deployment Checklist Version 1.0*
*B. D. Enterprises - Fire Safety & IT Solutions*
