# Smart Property Rental System — Full Stack

## Included
- Next.js frontend + responsive UI
- Node.js + Express REST API
- MongoDB/Mongoose models
- JWT authentication + bcrypt password hashing
- Tenant / Owner / Admin roles
- Property CRUD API
- Search/filter API
- Booking request + basic conflict protection
- Payment records (demo/mock payment)
- Reviews
- Favorites
- Owner dashboard UI
- Admin dashboard UI
- Property images using Unsplash image URLs
- Helmet + CORS + rate limiting
- Demo seed data

## Run backend
1. Install Node.js and MongoDB (or use MongoDB Atlas).
2. `cd backend`
3. `npm install`
4. Copy `.env.example` to `.env` and set `MONGODB_URI` and `JWT_SECRET`.
5. Optional: `node seed.js`
6. `npm run dev`

Backend: http://localhost:5000

## Run frontend
1. `cd frontend`
2. `npm install`
3. Copy `.env.local.example` to `.env.local`
4. `npm run dev`

Frontend: http://localhost:3000

## Demo seed accounts
- Owner: owner@smartrent.local / 123456
- Tenant: tenant@smartrent.local / 123456
- Admin: admin@smartrent.local / 123456

## Important
This package is a complete academic starter/full-stack implementation, but real payment gateway credentials, production image storage, email/SMS, maps, and deployment secrets must be configured before production use.
