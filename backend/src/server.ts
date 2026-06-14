import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/norden';
mongoose.connect(mongoUri)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: '🚀 Norden API Server Running',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      orders: '/api/orders',
      users: '/api/users',
      auth: '/api/auth',
      admin: '/api/admin'
    }
  });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy' });
});

// API Routes (to be implemented)
app.use('/api/products', (req, res) => {
  res.json({ message: 'Products endpoint' });
});

app.use('/api/orders', (req, res) => {
  res.json({ message: 'Orders endpoint' });
});

app.use('/api/users', (req, res) => {
  res.json({ message: 'Users endpoint' });
});

app.use('/api/auth', (req, res) => {
  res.json({ message: 'Auth endpoint' });
});

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handler
app.use((err: any, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n🎉 Norden Server running on http://localhost:${PORT}`);
  console.log(`📱 Frontend: http://localhost:3000`);
  console.log(`🔌 API Docs: http://localhost:${PORT}/health\n`);
});
