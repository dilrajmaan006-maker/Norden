# Norden API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require JWT token in header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Register User
```
POST /auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "securepassword"
}

Response: { token, user }
```

#### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword"
}

Response: { token, user }
```

### Products

#### Get All Products
```
GET /products?category=&page=1&limit=20

Response: {
  products: [],
  total: number,
  pages: number
}
```

#### Get Product Details
```
GET /products/:id

Response: { product }
```

#### Create Product (Admin)
```
POST /products
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Premium T-Shirt",
  "description": "...",
  "price": 99.99,
  "category": "tshirts",
  "stock": 100,
  "images": ["url1", "url2"]
}

Response: { product }
```

#### Update Product (Admin)
```
PUT /products/:id
Authorization: Bearer <token>
Content-Type: application/json

Response: { product }
```

#### Delete Product (Admin)
```
DELETE /products/:id
Authorization: Bearer <token>

Response: { success: true }
```

### Orders

#### Create Order
```
POST /orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    { "productId": "...", "quantity": 2 }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  }
}

Response: { order, paymentIntent }
```

#### Get User Orders
```
GET /orders
Authorization: Bearer <token>

Response: { orders: [] }
```

#### Get Order Details
```
GET /orders/:id
Authorization: Bearer <token>

Response: { order }
```

#### Update Order Status (Admin)
```
PUT /orders/:id/status
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "shipped"
}

Response: { order }
```

### Payment

#### Create Payment Intent
```
POST /orders/:orderId/payment
Authorization: Bearer <token>
Content-Type: application/json

{
  "amount": 9999,
  "currency": "usd"
}

Response: { clientSecret }
```

### Admin

#### Get Dashboard Stats
```
GET /admin/stats
Authorization: Bearer <token>

Response: {
  totalOrders: number,
  totalRevenue: number,
  totalCustomers: number,
  recentOrders: []
}
```

#### Get All Orders (Admin)
```
GET /admin/orders
Authorization: Bearer <token>

Response: { orders: [] }
```

## Error Responses

```json
{
  "error": "Error message",
  "status": 400
}
```

## Status Codes
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error
