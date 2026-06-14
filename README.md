# NORDEN - Luxury Clothing E-Commerce Platform

A modern, scalable e-commerce platform for luxury clothing brand with dropshipping integration.

## 🎯 Features

- **Product Catalog**: Browse luxury clothing with advanced filtering
- **Shopping Cart & Checkout**: Seamless purchasing experience
- **User Authentication**: Secure account management
- **Order Management**: Track orders in real-time
- **Admin Dashboard**: Manage products, orders, and inventory
- **Supplier Integration**: Auto-sync with Printful/dropshipping partners
- **Payment Processing**: Stripe integration
- **Analytics**: Sales tracking and business insights

## 🏗️ Tech Stack

### Frontend
- React 18+
- Next.js 14+
- Tailwind CSS
- Redux for state management

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Infrastructure
- Vercel (Frontend Hosting)
- Railway/Heroku (Backend Hosting)
- MongoDB Atlas (Database)

## 📁 Project Structure

```
Norden/
├── frontend/          # React/Next.js application
├── backend/           # Node.js/Express API
├── docs/              # Documentation
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB connection string

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dilrajmaan006-maker/Norden.git
   cd Norden
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Setup Backend**
   ```bash
   cd ../backend
   npm install
   npm run dev
   ```

## 📋 Environment Variables

Create `.env.local` files in both frontend and backend:

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
PRINTFUL_API_KEY=your_printful_key
PORT=5000
```

## 🔌 API Integration

- **Stripe**: Payment processing
- **Printful**: Dropshipping & inventory
- **SendGrid**: Email notifications

## 📊 Admin Dashboard

Access at: `http://localhost:3000/admin`

### Features:
- Product management (CRUD)
- Order tracking
- Sales analytics
- Customer management
- Inventory monitoring

## 🛒 Customer Features

- Browse products
- Advanced search & filters
- Add to cart
- Secure checkout
- Order tracking
- Account management
- Wishlist

## 🔄 Supplier Workflow

1. Customer places order on Norden
2. Order syncs to Printful API
3. Printful handles production & shipping
4. Customer receives order tracking
5. Revenue goes to Norden account

## 📞 Support & Contact

- GitHub: [@dilrajmaan006-maker](https://github.com/dilrajmaan006-maker)
- Email: support@norden.com

## 📜 License

MIT License - feel free to use this for your business

## 🎯 Next Steps

- [ ] Setup MongoDB database
- [ ] Configure Stripe account
- [ ] Connect Printful API
- [ ] Design product pages
- [ ] Setup authentication
- [ ] Deploy to production
