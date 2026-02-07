# GoDaddy WebHosting Deployment Guide

## Overview
This project consists of two parts:
- **Frontend**: React app (built to static files in `build/` folder)
- **Backend**: Node.js Express server (handles API requests)

## Deployment Steps for GoDaddy

### Option 1: Node.js Hosting (Recommended)

GoDaddy offers Node.js hosting which supports both frontend and backend seamlessly.

#### Prerequisites
- GoDaddy cPanel access
- Node.js environment enabled (check with GoDaddy support)
- SSH access to server

#### Steps

1. **Upload Project Files via FTP/SSH**
   ```bash
   # Connect via SSH and upload the project
   # Or use GoDaddy's File Manager in cPanel
   ```

2. **Install Dependencies on Server**
   ```bash
   cd your-project-directory
   npm install --production
   ```

3. **Build Frontend**
   ```bash
   cd bd-enterprises
   npm run build
   ```

4. **Update Backend .env File**
   Edit `bd-enterprises-backend/.env`:
   ```
   NODE_ENV=production
   PORT=5000
   FRONTEND_URL=https://your-domain.com
   DB_HOST=your-godaddy-database-host
   DB_USER=your-database-user
   DB_PASSWORD=your-database-password
   DB_NAME=bd_enterprises
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

5. **Create Startup Script** (`startup.sh`)
   ```bash
   #!/bin/bash
   cd /path/to/bd-enterprises-backend
   npm start
   ```

6. **Configure via GoDaddy cPanel**
   - Go to cPanel → Select Node.js
   - Create new Node.js app
   - Set startup file to `server.js`
   - Set application root to `bd-enterprises-backend/`
   - Save and start the application

---

### Option 2: Standard Shared Hosting

If Node.js isn't available, use this alternative approach:

#### Backend Deployment (Using Vercel or Heroku - Free Alternative)

1. **Deploy backend separately to Vercel (Free)**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy backend
   cd bd-enterprises-backend
   vercel
   
   # Copy the production URL (e.g., https://backend-xxx.vercel.app)
   ```

2. **Update Frontend API URL**
   In `bd-enterprises/src/components/Contact.js`:
   ```javascript
   const API_URL = 'https://backend-xxx.vercel.app'; // Your Vercel backend URL
   ```

3. **Build and Deploy Frontend**
   ```bash
   cd bd-enterprises
   npm run build
   # Upload the 'build' folder contents to GoDaddy's public_html folder
   ```

---

### Option 3: Using CyberPanel or CloudPanel (If Available)

Some GoDaddy plans support CyberPanel which has better Node.js support:

1. Access CyberPanel from GoDaddy cPanel
2. Create new Node.js application
3. Upload files via Git or FTP
4. Configure environment variables
5. Start the application

---

## Production Checklist

- [ ] `.env` file configured with production credentials
- [ ] `NODE_ENV=production` set in backend
- [ ] CORS properly configured for your domain
- [ ] HTTPS enabled (GoDaddy provides free SSL)
- [ ] Database credentials updated for GoDaddy database
- [ ] Email credentials configured (for contact form notifications)
- [ ] Frontend built with `npm run build`
- [ ] Backend dependencies installed with `npm install --production`
- [ ] Restart backend service after deployment
- [ ] Test contact form and API endpoints

---

## Troubleshooting

### Issue: "Port already in use"
- Change PORT in `.env` to 8080, 8081, or another available port
- Or contact GoDaddy support to free up the port

### Issue: "Cannot connect to database"
- Verify database hostname (not localhost on shared hosting)
- Check database user permissions
- Ensure firewall allows connections from your GoDaddy server IP

### Issue: "CORS errors"
- Update `FRONTEND_URL` in backend `.env` to match your domain
- Ensure CORS middleware is properly configured in `server.js`

### Issue: "Contact form not working"
- Check email credentials in `.env`
- Verify API URL in frontend is correct
- Check browser console for errors
- Check backend logs via GoDaddy cPanel

---

## Production Environment Variables (.env)

```env
NODE_ENV=production
PORT=5000

# Database
DB_HOST=your-godaddy-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=bd_enterprises

# Frontend URL (for CORS)
FRONTEND_URL=https://your-domain.com

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password

# Optional: Twilio (WhatsApp/SMS notifications)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
TWILIO_WHATSAPP_NUMBER=
ADMIN_PHONE=
```

---

## Monitoring and Maintenance

1. **Check Backend Logs** via GoDaddy cPanel or SSH:
   ```bash
   pm2 logs
   # or check application logs
   ```

2. **Restart Backend** if needed:
   - Via GoDaddy cPanel → Node.js section
   - Or via SSH: `pm2 restart bd-enterprises-backend`

3. **Monitor Performance**:
   - Check server resources in cPanel
   - Monitor database performance
   - Review application logs regularly

---

## Additional Resources

- [GoDaddy Node.js Hosting Documentation](https://www.godaddy.com/help)
- [Express.js Production Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)
- [React Build Optimization](https://create-react-app.dev/docs/production-build/)
