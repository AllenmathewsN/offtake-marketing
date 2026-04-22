# Deployment Guide

## Local Development
```bash
npm install
createdb jtr_marketing
psql -d jtr_marketing -f database/schema.sql
npm run dev
```

## Production Deployment (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard:
   - DB_USER
   - DB_HOST
   - DB_NAME
   - DB_PASSWORD
   - DB_PORT

4. Deploy

## Database Hosting
Use services like:
- Neon (https://neon.tech)
- Supabase (https://supabase.com)
- Railway (https://railway.app)
- AWS RDS

## Pages
- `/` - Home
- `/about` - About Us
- `/services` - Services
- `/admin` - Contact submissions (add auth in production)

## API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts
- `GET /api/case-studies` - Get case studies
- `GET /api/team` - Get team members
