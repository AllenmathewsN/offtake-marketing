# JTr Marketing Agency - React + PostgreSQL

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup PostgreSQL Database
```bash
# Create database
createdb jtr_marketing

# Run schema
psql -d jtr_marketing -f database/schema.sql
```

### 3. Configure Environment Variables
Update `.env.local` with your PostgreSQL credentials:
```
DB_USER=postgres
DB_HOST=localhost
DB_NAME=jtr_marketing
DB_PASSWORD=your_password
DB_PORT=5432
```

### 4. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## Project Structure
- `/app` - Next.js pages and API routes
- `/components` - React components
- `/lib` - Database connection
- `/database` - SQL schema

## Features
- Server-side rendering with Next.js
- PostgreSQL database integration
- Contact form with database storage
- Dynamic case studies from database
- Team members from database
- Responsive design
