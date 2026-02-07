# BD Enterprises System Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENT BROWSER                              │
│                     (http://localhost:3000)                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │              REACT FRONTEND APPLICATION                      │   │
│  │                                                               │   │
│  │  ┌────────────────────────────────────────────────────────┐  │   │
│  │  │          Contact.js Component                          │  │   │
│  │  │                                                        │  │   │
│  │  │  ┌──────────────────┐  ┌──────────────────────────┐  │  │   │
│  │  │  │ Contact Form     │  │ Contact Info Panel      │  │  │   │
│  │  │  │ - Name           │  │ - Phone (tel link)      │  │  │   │
│  │  │  │ - Email          │  │ - Email (mailto)        │  │  │   │
│  │  │  │ - Phone          │  │ - WhatsApp (wa.me)      │  │  │   │
│  │  │  │ - Company        │  │ - Address               │  │  │   │
│  │  │  │ - Service Type   │  │ - Social Media Links    │  │  │   │
│  │  │  │ - Message        │  │                         │  │  │   │
│  │  │  │ - Contact Method │  │                         │  │  │   │
│  │  │  └──────────────────┘  └──────────────────────────┘  │  │   │
│  │  │                                                        │  │   │
│  │  │  ┌──────────────────────────────────────────────────┐  │  │   │
│  │  │  │  Google Maps Embed (500px height)               │  │  │   │
│  │  │  │  - Shows main office location                   │  │  │   │
│  │  │  │  - Office details below                         │  │  │   │
│  │  │  └──────────────────────────────────────────────────┘  │  │   │
│  │  │                                                        │  │   │
│  │  └────────────────────────────────────────────────────────┘  │   │
│  │                                                               │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                 ▲                                    │
│                                 │                                    │
│                    FETCH/POST (JSON over HTTP)                      │
│                                 │                                    │
└─────────────────────────────────┼────────────────────────────────────┘
                                  │
                    ┌─────────────────────────────┐
                    │   CORS MIDDLEWARE           │
                    │   (http://localhost:5000)   │
                    └─────────────────────────────┘
                                  │
┌─────────────────────────────────┼────────────────────────────────────┐
│                                 ▼                                    │
│        ┌──────────────────────────────────────────────────┐         │
│        │  NODE.JS/EXPRESS SERVER (port 5000)             │         │
│        │                                                  │         │
│        │  ┌────────────────────────────────────────────┐ │         │
│        │  │ API ROUTES                                 │ │         │
│        │  │                                            │ │         │
│        │  │ POST   /api/contacts                       │ │         │
│        │  │ GET    /api/contacts                       │ │         │
│        │  │ GET    /api/contacts/:id                   │ │         │
│        │  │ PUT    /api/contacts/:id/status            │ │         │
│        │  │                                            │ │         │
│        │  │ GET    /api/company-info                   │ │         │
│        │  │ GET    /api/social-media                   │ │         │
│        │  │                                            │ │         │
│        │  │ GET    /api/locations                      │ │         │
│        │  │ GET    /api/locations/main                 │ │         │
│        │  │                                            │ │         │
│        │  │ GET    /api/health                         │ │         │
│        │  └────────────────────────────────────────────┘ │         │
│        │                        ▲                         │         │
│        │                        │                         │         │
│        │         VALIDATION & BUSINESS LOGIC              │         │
│        │                        │                         │         │
│        │                        ▼                         │         │
│        │  ┌────────────────────────────────────────────┐ │         │
│        │  │ MYSQL CONNECTION POOL                     │ │         │
│        │  │ (Max 10 connections)                       │ │         │
│        │  └────────────────────────────────────────────┘ │         │
│        │                        ▲                         │         │
│        │                        │                         │         │
│        │         SQL QUERIES (Parameterized)             │         │
│        │                        │                         │         │
│        └────────────────────────┼───────────────────────┘         │
│                                 │                                    │
└─────────────────────────────────┼────────────────────────────────────┘
                                  │
                    ┌─────────────────────────────┐
                    │   TCP/IP CONNECTION        │
                    │   localhost:3306            │
                    └─────────────────────────────┘
                                  │
┌─────────────────────────────────┼────────────────────────────────────┐
│                                 ▼                                    │
│              ┌──────────────────────────────────────┐               │
│              │    MYSQL DATABASE (bd_enterprises)  │               │
│              │                                      │               │
│              │  Tables:                             │               │
│              │  ┌────────────────────────────────┐ │               │
│              │  │ contact_submissions            │ │               │
│              │  │ - id (PK)                      │ │               │
│              │  │ - first_name                   │ │               │
│              │  │ - last_name                    │ │               │
│              │  │ - email                        │ │               │
│              │  │ - phone                        │ │               │
│              │  │ - company_name                 │ │               │
│              │  │ - service_type                 │ │               │
│              │  │ - message                      │ │               │
│              │  │ - preferred_contact_method     │ │               │
│              │  │ - status                       │ │               │
│              │  │ - created_at / updated_at      │ │               │
│              │  └────────────────────────────────┘ │               │
│              │                                      │               │
│              │  ┌────────────────────────────────┐ │               │
│              │  │ company_contact_info           │ │               │
│              │  │ - id (PK)                      │ │               │
│              │  │ - contact_type (phone/email...)│ │               │
│              │  │ - value                        │ │               │
│              │  │ - label                        │ │               │
│              │  │ - is_active                    │ │               │
│              │  └────────────────────────────────┘ │               │
│              │                                      │               │
│              │  ┌────────────────────────────────┐ │               │
│              │  │ social_media_links             │ │               │
│              │  │ - id (PK)                      │ │               │
│              │  │ - platform                     │ │               │
│              │  │ - url                          │ │               │
│              │  │ - icon_name                    │ │               │
│              │  │ - is_active                    │ │               │
│              │  └────────────────────────────────┘ │               │
│              │                                      │               │
│              │  ┌────────────────────────────────┐ │               │
│              │  │ company_locations              │ │               │
│              │  │ - id (PK)                      │ │               │
│              │  │ - name                         │ │               │
│              │  │ - latitude / longitude         │ │               │
│              │  │ - address                      │ │               │
│              │  │ - city, state, zip_code        │ │               │
│              │  │ - phone, email                 │ │               │
│              │  │ - is_main_office               │ │               │
│              │  │ - is_active                    │ │               │
│              │  └────────────────────────────────┘ │               │
│              │                                      │               │
│              └──────────────────────────────────────┘               │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

### Contact Form Submission Flow

```
1. USER ENTERS DATA
   ↓
2. FRONTEND VALIDATES
   - Check required fields
   - Validate email format
   ↓
3. SEND POST REQUEST
   POST /api/contacts
   Content-Type: application/json
   {
     firstName: "John",
     lastName: "Doe",
     email: "john@example.com",
     phone: "+1...",
     companyName: "...",
     serviceType: "...",
     message: "...",
     preferredMethod: "email"
   }
   ↓
4. BACKEND VALIDATION
   - Check all required fields
   - Validate email format
   - Sanitize inputs
   ↓
5. DATABASE INSERT
   INSERT INTO contact_submissions (...)
   VALUES (...)
   ↓
6. SEND NOTIFICATIONS
   - Email (Nodemailer)
   - SMS (Twilio)
   - WhatsApp (Twilio)
   ↓
7. RETURN RESPONSE
   {
     success: true,
     message: "Contact form submitted successfully",
     data: { id: 1, ... }
   }
   ↓
8. SHOW SUCCESS MESSAGE
   Clear form
   Show thank you message
   ↓
9. ADMIN CAN LATER:
   - View submission
   - Update status
   - Track/respond to inquiry
```

## Notification Flow

```
┌──────────────────────────────────────┐
│  Contact Form Submission             │
│  (POST /api/contacts)                │
└──────────────────┬───────────────────┘
                   │
                   ↓
┌──────────────────────────────────────┐
│  Server-Side Logic                   │
│  (server.js)                         │
└──────────────────┬───────────────────┘
                   │
  ┌────────────────┼───────────────────┐
  │                │                   │
  ↓                ↓                   ↓
┌───────────┐ ┌──────────┐ ┌──────────────┐
│  Email     │ │  SMS       │ │  WhatsApp    │
│ (Nodemailer)│ │ (Twilio)   │ │ (Twilio)     │
└───────────┘ └──────────┘ └──────────────┘
```

## Component Communication

```
┌─────────────────┐
│  Contact.js     │
├─────────────────┤
│ State:          │
│ - formData      │
│ - isSubmitting  │
│ - submitStatus  │
│ - companyInfo   │
│ - socialMedia   │
│ - mainLocation  │
└────────┬────────┘
         │
         ├─────────────────────────────────┐
         │                                 │
         ↓                                 ↓
    ┌──────────────┐           ┌─────────────────┐
    │ Contact Form │           │ Contact Options │
    │ (Left Side)  │           │ (Right Side)    │
    │              │           │                 │
    │ - Input      │           │ - Phone Card    │
    │ - Textarea   │           │ - Email Card    │
    │ - Submit Btn │           │ - WhatsApp Card │
    │              │           │ - Address Card  │
    │ On Submit:   │           │ - Social Links  │
    │ - POST to    │           │ - Map Section   │
    │   /api/...   │           │                 │
    │ - Show Msg   │           │ Fetches from:   │
    │              │           │ - /api/company  │
    └──────────────┘           │ - /api/social   │
                               │ - /api/location │
                               └─────────────────┘
```

## API Request/Response Examples

### Submit Contact Form
```
REQUEST:
POST /api/contacts HTTP/1.1
Host: localhost:5000
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "companyName": "Acme Corp",
  "serviceType": "Fire Extinguisher Systems",
  "message": "I need fire safety consultation",
  "preferredMethod": "email"
}

RESPONSE:
HTTP/1.1 201 Created
Content-Type: application/json

{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  }
}
```

### Fetch Company Info
```
REQUEST:
GET /api/company-info HTTP/1.1
Host: localhost:5000

RESPONSE:
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "data": [
    {
      "id": 1,
      "contact_type": "phone",
      "value": "+1 (555) 123-4567",
      "label": "Main Phone",
      "is_active": true
    },
    {
      "id": 2,
      "contact_type": "email",
      "value": "contact@bdenterprises.com",
      "label": "Main Email",
      "is_active": true
    },
    ...
  ]
}
```

### Fetch Main Location
```
REQUEST:
GET /api/locations/main HTTP/1.1
Host: localhost:5000

RESPONSE:
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "data": {
    "id": 1,
    "name": "BD Enterprises - Main Office",
    "latitude": 40.7128,
    "longitude": -74.0060,
    "address": "123 Safety Avenue, Fire District",
    "city": "New York",
    "state": "NY",
    "zip_code": "10001",
    "phone": "+1 (555) 123-4567",
    "email": "contact@bdenterprises.com",
    "is_main_office": true
  }
}
```

## Deployment Architecture (Production)

```
┌──────────────────────────────────────────────────────────┐
│                    INTERNET / CDN                         │
└────────────────────────┬─────────────────────────────────┘
                         │
            ┌────────────┴────────────┐
            │                         │
            ↓                         ↓
    ┌─────────────────┐      ┌─────────────────┐
    │  Static Files   │      │   API Server    │
    │  (React Build)  │      │  (Node.js)      │
    │                 │      │                 │
    │  /build         │      │  :5000          │
    │  - index.html   │      │                 │
    │  - main.js      │      │  Reverse Proxy  │
    │  - main.css     │      │  (nginx)        │
    │                 │      │  :80/:443       │
    │  Hosted on:     │      │                 │
    │  - S3/Cloudfront│      │  Hosted on:     │
    │  - Vercel       │      │  - EC2          │
    │  - Netlify      │      │  - Heroku       │
    │                 │      │  - DigitalOcean │
    └─────────────────┘      └────────┬────────┘
                                     │
                        ┌────────────┴────────────┐
                        │                         │
                        ↓                         ↓
                   ┌──────────┐          ┌──────────────┐
                   │ Redis    │          │ MySQL        │
                   │ Cache    │          │ Database     │
                   └──────────┘          └──────────────┘
```

## Security Layers

```
┌─────────────────────────────────────────┐
│  CLIENT BROWSER (Frontend Validation)    │
│  - Required field checks                 │
│  - Email format validation               │
│  - Max length validation                 │
└──────────────┬──────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────┐
│  HTTPS / TLS Encryption                  │
│  - Data encrypted in transit             │
└──────────────┬──────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────┐
│  CORS Middleware                         │
│  - Only allowed origins                  │
│  - Whitelist credentials                 │
└──────────────┬──────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────┐
│  Backend Validation                      │
│  - Required fields                       │
│  - Email format                          │
│  - Phone format                          │
│  - Message length                        │
└──────────────┬──────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────┐
│  Input Sanitization                      │
│  - Remove HTML/Script tags               │
│  - Escape special characters             │
└──────────────┬──────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────┐
│  Parameterized SQL Queries               │
│  - Prevent SQL injection                 │
│  - Type-safe parameters                  │
└──────────────┬──────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────┐
│  MySQL Database                          │
│  - Data at rest encrypted                │
│  - User permissions restricted           │
│  - Regular backups                       │
└─────────────────────────────────────────┘
```

This architecture provides multiple layers of security and ensures data integrity throughout the application flow.
