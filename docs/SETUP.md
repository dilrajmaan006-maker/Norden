# Norden Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- Stripe account
- Printful account (optional)

### 1. Environment Setup

#### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_KEY=pk_test_your_stripe_key
```

#### Backend (.env)
```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/norden
JWT_SECRET=your_super_secret_jwt_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret
PRINTFUL_API_KEY=your_printful_api_key
PORT=5000
NODE_ENV=development
```

### 2. Install Dependencies

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 3. Start Development Servers

```bash
# Terminal 1 - Frontend
cd frontend
npm run dev
# Runs on http://localhost:3000

# Terminal 2 - Backend
cd backend
npm run dev
# Runs on http://localhost:5000
```

## 📦 Project Structure

### Frontend (React/Next.js)
```
frontend/
├── pages/
│   ├── index.tsx          # Home page
│   ├── shop.tsx           # Product listing
│   ├── product/[id].tsx   # Product detail
│   ├── cart.tsx           # Shopping cart
│   ├── checkout.tsx       # Checkout page
│   ├── auth/
│   │   ├── login.tsx
│   │   └── register.tsx
│   └── admin/             # Admin dashboard
├── components/            # React components
├── styles/                # CSS/Tailwind
├── public/                # Static assets
└── lib/                   # Utilities
```

### Backend (Node.js/Express)
```
backend/
├── src/
│   ├── models/            # Mongoose schemas
│   │   ├── User.ts
│   │   ├── Product.ts
│   │   └── Order.ts
│   ├── routes/            # API routes
│   │   ├── auth.ts
│   │   ├── products.ts
│   │   ├── orders.ts
│   │   └── users.ts
│   ├── middleware/        # Custom middleware
│   ├── controllers/       # Business logic
│   ├── config/            # Configuration
│   └── server.ts          # Entry point
└── dist/                  # Compiled output
```

## 🔌 API Integration Checklist

### Stripe
- [ ] Create Stripe account
- [ ] Get API keys
- [ ] Setup webhook for payment events
- [ ] Integrate payment endpoint

### Printful
- [ ] Create Printful account
- [ ] Get API key
- [ ] Setup product sync
- [ ] Configure order automation

### SendGrid (Email)
- [ ] Create SendGrid account
- [ ] Get API key
- [ ] Setup email templates
- [ ] Configure transactional emails

## 📊 Database Schema

### Users
- firstName, lastName, email, password
- phone, address (optional)
- role: customer | admin
- isActive, timestamps

### Products
- name, description, price
- images (array), category
- sizes, colors, stock
- SKU, supplier info
- timestamps

### Orders
- userId, items (array)
- totalAmount, status
- shippingAddress, paymentStatus
- supplierOrderId (from Printful)
- timestamps

## 🔐 Authentication Flow

1. User registers/logs in
2. Backend generates JWT token
3. Token stored in localStorage
4. Token sent with each API request
5. Middleware validates token
6. Protected routes only accessible with valid token

## 📝 Key Features to Implement

### Phase 1 (MVP)
- [x] Project setup
- [ ] Authentication (register/login)
- [ ] Product catalog
- [ ] Shopping cart
- [ ] Checkout with Stripe
- [ ] Order management

### Phase 2 (Growth)
- [ ] Admin dashboard
- [ ] Printful integration
- [ ] Email notifications
- [ ] Analytics
- [ ] Wishlists
- [ ] Reviews & ratings

### Phase 3 (Scale)
- [ ] Mobile app
- [ ] Advanced search/filters
- [ ] Recommendations
- [ ] Loyalty program
- [ ] Multiple currencies
- [ ] Inventory management

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
vercel deploy
```

### Backend (Railway/Heroku)
```bash
cd backend
npm run build
railway up
```

## 📞 Support

For issues or questions, create a GitHub issue or contact support.
