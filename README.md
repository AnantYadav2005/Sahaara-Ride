# Sahaara Ride

Responsive website and starter API for Sahaara Ride, a senior-citizen transportation coordination and non-medical personal assistance service in Indirapuram and Vaishali, Ghaziabad.

## Run locally

1. Install Node.js 20 or newer and MongoDB Community Server (or provide a MongoDB connection string).
2. Copy `.env.example` to `.env`; set a long random `JWT_SECRET` and `MONGODB_URI`.
3. Install dependencies with `npm install`.
4. In one terminal run `npm run server`.
5. In another terminal run `npm run dev` and open the local URL Vite prints.

For a production bundle, run `npm run build`; serve the generated `dist` directory from a static host and deploy the Express API separately. Set the frontend API base URL as needed for your deployment.

## What is included

- React, TypeScript, Vite, Tailwind CSS and Lucide icons.
- Public Home, About, Services, Pricing, Safety and Contact views.
- Accessible booking enquiry flow with required consent, a reference code and an enquiry status.
- MongoDB booking and enquiry models; Express endpoints with input validation.
- Customer registration/login starter endpoints using bcrypt and JWT; role checks for protected booking routes.
- A local demo dashboard that shows enquiries stored in the current browser.
- Responsive navigation, text size adjustment and reduced-motion support.

## Configuration and production work

See `.env.example`. The initial website uses local browser storage as a demo fallback if the API cannot be reached. Production enquiries require a reachable API and MongoDB. The contact form currently explains that its message is local-only; connect a mail provider before launch. WhatsApp, Maps, email notifications, role-specific dashboards, attendant assignment, document review, real-time trip tracking and admin analytics are not connected yet. Do not enter real customer data into the demo dashboard.

Never place secrets in frontend variables. Protect the API with HTTPS, rate limiting, CORS allowlists, secure account recovery, audit logs and a privacy/retention policy before accepting real customer data. Provision admin and attendant roles through a controlled server-side process; public registration creates customer accounts only.

## Business boundaries

Projected assistance pricing is ₹499 per 90-minute booking for FY 2027–2028 planning. Cab fare is separate and paid to the commercial cab operator. Sahaara Ride does not provide diagnosis, treatment, nursing, physical lifting, ambulance or emergency transportation. A booking is an enquiry until availability has been checked and the team confirms it. Family updates require customer permission. No certifications, partnerships, staff credentials or testimonials are represented as confirmed.
