# B. D. Enterprises - Complete Setup Guide

## Project Structure

```
bd-enterprises/
├── bd-enterprises/              # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Contact.js        # Enhanced Contact page with form, map, contact options
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── ... (other components)
│   │   └── ...
│   └── package.json
│
└── bd-enterprises-backend/      # Node.js Express Backend
    ├── server.js                # Main server file
    ├── database.sql             # Database schema & sample data
    ├── package.json
    ├── .env.example
    └── README.md
```

## Quick Start

### Step 1: Database Setup

1. Open MySQL and run the SQL file:
```bash
mysql -u root -p < bd-enterprises-backend/database.sql
```

2. Create a new database user (optional but recommended):
```sql
CREATE USER 'bd_user'@'localhost' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON bd_enterprises.* TO 'bd_user'@'localhost';
FLUSH PRIVILEGES;
```

### Step 2: Backend Setup

```bash
cd bd-enterprises-backend

# Copy environment file
cp .env.example .env

# Edit .env with your database credentials
# DB_HOST=localhost
# DB_USER=root (or bd_user)
# DB_PASSWORD=your_password
# DB_NAME=bd_enterprises
# PORT=5000

# Install dependencies
npm install

# Start the backend server
npm start
# Server runs on http://localhost:5000
```

### Step 3: Frontend Setup

```bash
cd ../bd-enterprises

# Dependencies already installed, but if needed:
npm install

# Start development server
npm start
# Frontend runs on http://localhost:3000
```

## Features Implemented

### 1. Contact Form with Backend Integration
- First/Last name, Email, Phone, Company
- Service interest dropdown
- Message textarea
- Preferred contact method (Email/Phone/WhatsApp)
- Form validation and submission feedback
- Data stored in MySQL database

### 2. Multiple Contact Methods
- **Phone**: Direct call link
- **Email**: Mailto link
- **WhatsApp**: Direct chat initiation
- **Address**: Office location display

### 3. Interactive Map
- Google Maps embedded directly on Contact page
- Displays main office location
- Clickable address details below map
- Responsive design for all screen sizes

### 4. Social Media Integration
- Facebook, Twitter, LinkedIn, Instagram links
- Fetched from database
- Easily customizable
- Hover effects and animations

### 5. Admin Management Features
- View all contact submissions
- Filter by status (new, in_progress, resolved, closed)
- Update contact status
- Manage company information
- Manage office locations
- Manage social media links

## API Endpoints Summary

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /api/health | Server status check |
| POST | /api/contacts | Submit contact form |
| GET | /api/contacts | Get all submissions |
| GET | /api/contacts/:id | Get specific submission |
| PUT | /api/contacts/:id/status | Update submission status |
| GET | /api/company-info | Get company details |
| GET | /api/social-media | Get social links |
| GET | /api/locations | Get all offices |
| GET | /api/locations/main | Get main office |

## Customization

### Change Company Information

Update in MySQL:
```sql
UPDATE company_contact_info 
SET value = '+1 (555) 999-9999' 
WHERE contact_type = 'phone';
```

Or add new contacts:
```sql
INSERT INTO company_contact_info (contact_type, value, label) 
VALUES ('phone', '+1 (555) 999-9999', 'Support Line');
```

### Update Social Media

```sql
UPDATE social_media_links 
SET url = 'https://facebook.com/your_page' 
WHERE platform = 'facebook';
```

### Add New Office Location

```sql
INSERT INTO company_locations 
(name, latitude, longitude, address, city, state, zip_code, phone, email, is_main_office) 
VALUES 
('Branch Office', 40.7589, -73.9851, '456 Park Ave', 'New York', 'NY', '10022', '+1 (555) 234-5678', 'ny@company.com', 0);
```

## Google Maps Integration

To customize the map with your API key:

1. Get your Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Update the iframe src in Contact.js:
```javascript
src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(mainLocation.address)}&zoom=15`}
```

## Environment Variables

### Backend (.env)
```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=bd_enterprises

# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Optional - for notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Twilio Configuration (Optional - for SMS/WhatsApp notifications)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
TWILIO_WHATSAPP_NUMBER=
ADMIN_PHONE=

# Frontend URL for CORS
FRONTEND_URL=http://localhost:3000
```

### Frontend
No special env vars needed - uses default backend URL `http://localhost:5000`

## Testing the Setup

1. **Test Backend:**
```bash
curl http://localhost:5000/api/health
```

2. **Test Database Connection:**
```bash
curl http://localhost:5000/api/company-info
```

3. **Test Contact Form:**
Navigate to `http://localhost:3000/contact` and submit a test message

## Database Queries for Monitoring

```sql
-- View all contact submissions
SELECT * FROM contact_submissions ORDER BY created_at DESC;

-- Count submissions by status
SELECT status, COUNT(*) as count FROM contact_submissions GROUP BY status;

-- Find recent submissions
SELECT first_name, email, created_at FROM contact_submissions 
WHERE created_at > DATE_SUB(NOW(), INTERVAL 7 DAY)
ORDER BY created_at DESC;

-- Check company info
SELECT * FROM company_contact_info WHERE is_active = TRUE;

-- View all office locations
SELECT name, city, state, is_main_office FROM company_locations WHERE is_active = TRUE;
```

## Security Considerations

⚠️ **Before Production:**

1. Change default API key in Contact.js (Google Maps)
2. Add authentication/authorization to admin endpoints
3. Implement CSRF protection
4. Add input sanitization
5. Use HTTPS only
6. Hide sensitive data in environment variables
7. Set up database backups
8. Implement rate limiting
9. Add logging and monitoring
10. Review CORS settings

## Troubleshooting

### Issue: Cannot connect to database
**Solution:** Check `.env` file credentials and ensure MySQL is running

### Issue: Map not loading
**Solution:** Replace Google Maps API key with your own

### Issue: Backend won't start
**Solution:** Check if port 5000 is already in use
```bash
netstat -ano | findstr :5000  # Windows
lsof -i :5000                 # macOS/Linux
```

### Issue: CORS errors
**Solution:** Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL

### Issue: Contact form not submitting
**Solution:** Check browser console for errors, verify backend is running on port 5000

## Next Steps

1. ✅ Set up database
2. ✅ Start backend server
3. ✅ Start frontend server
4. ✅ Test contact form
5. 📧 Set up email notifications (optional)
6. 🔐 Implement authentication
7. 📱 Set up admin dashboard
8. 🚀 Deploy to production

## Support & Documentation

- Backend API docs: `bd-enterprises-backend/README.md`
- Database schema: `bd-enterprises-backend/database.sql`
- Frontend: `bd-enterprises/src/components/Contact.js`

## Deployment Notes

### For Production:

```bash
# Build frontend
cd bd-enterprises
npm run build

# Backend
cd ../bd-enterprises-backend
npm install --production
NODE_ENV=production npm start
```

Use process manager like PM2:
```bash
npm install -g pm2
pm2 start server.js --name "bd-api"
pm2 save
```

Happy Building! 🚀
