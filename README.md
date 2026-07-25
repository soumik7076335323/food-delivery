# Food Delivery - Full Stack MERN Application

A full-stack food delivery web application built with the MERN stack.
The project includes a customer-facing React application, a separate
admin panel, and a Node.js/Express REST API connected to MongoDB.

## Features

### Customer Application

-   User registration and login
-   JWT-based authentication
-   Password hashing with bcrypt
-   Browse available food items
-   Category-based food browsing
-   Search functionality
-   Add items to cart
-   Increase or decrease cart quantity
-   Persistent cart for authenticated users
-   Checkout and order placement
-   Stripe Checkout payment integration
-   Payment verification
-   View personal order history
-   Responsive React user interface
-   Toast notifications for user feedback

### Admin Panel

-   Admin login
-   Role-based authorization for protected admin operations
-   Add new food items
-   Upload food images
-   View food list
-   Remove food items
-   View all customer orders
-   Update order status

## Tech Stack

### Frontend

-   React.js 18
-   Vite
-   React Router DOM
-   Context API
-   Axios
-   React Toastify
-   CSS

### Admin Panel

-   React.js 18
-   Vite
-   React Router DOM
-   Axios
-   React Toastify
-   CSS

### Backend

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   JSON Web Token (JWT)
-   bcrypt
-   Multer
-   Stripe
-   Validator
-   CORS
-   dotenv

## Project Structure

``` text
Food-Delivery/
├── frontend/                 # Customer React application
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── assets/
│   └── package.json
│
├── admin/                    # Admin React application
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── assets/
│   └── package.json
│
├── backend/                  # Node.js + Express REST API
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Application Architecture

``` text
Customer Frontend (React) ─┐
                           ├──> Node.js / Express API ───> MongoDB
Admin Panel (React) ───────┘             │
                                         └──> Stripe Checkout
```

## Authentication and Authorization

The application uses JWT for authentication.

1.  A user registers or logs in.
2.  The backend validates the credentials.
3.  Passwords are hashed using bcrypt before being stored.
4.  After successful authentication, the backend generates a JWT.
5.  The client sends the token with protected API requests.
6.  Authentication middleware verifies the token and identifies the
    user.
7.  Admin-sensitive operations additionally verify that the
    authenticated user's role is `admin`.

The user model uses `user` as the default role.

## Main API Endpoints

### User

  Method   Endpoint               Description
  -------- ---------------------- ---------------------
  POST     `/api/user/register`   Register a new user
  POST     `/api/user/login`      Login user

### Food

  -----------------------------------------------------------------------
  Method                  Endpoint                Description
  ----------------------- ----------------------- -----------------------
  GET                     `/api/food/list`        Get all food items

  POST                    `/api/food/add`         Add food item
                                                  (authenticated/admin
                                                  checked in controller)

  POST                    `/api/food/remove`      Remove food item
                                                  (authenticated/admin
                                                  checked in controller)
  -----------------------------------------------------------------------

### Cart

  Method   Endpoint             Description
  -------- -------------------- ---------------------------------------
  POST     `/api/cart/add`      Add item to authenticated user's cart
  POST     `/api/cart/remove`   Remove item from cart
  POST     `/api/cart/get`      Get authenticated user's cart

### Orders

  -------------------------------------------------------------------------
  Method                  Endpoint                  Description
  ----------------------- ------------------------- -----------------------
  POST                    `/api/order/place`        Create an order and
                                                    Stripe Checkout session

  POST                    `/api/order/verify`       Verify payment result

  POST                    `/api/order/userorders`   Get logged-in user's
                                                    orders

  GET                     `/api/order/list`         Get all orders for
                                                    admin

  POST                    `/api/order/status`       Update order status for
                                                    admin
  -------------------------------------------------------------------------

## Local Installation

### 1. Clone the repository

``` bash
git clone https://github.com/soumik7076335323/food-delivery.git
cd food-delivery
```

### 2. Backend Setup

``` bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

``` env
MONGO_URI=your_mongodb_connection_string
PORT=4000
JWT_SECRET=your_secure_jwt_secret
SALT=10
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the backend:

``` bash
node server.js
```

The API will run locally on:

``` text
http://localhost:4000
```

### 3. Customer Frontend Setup

Open another terminal:

``` bash
cd frontend
npm install
npm run dev
```

### 4. Admin Panel Setup

Open another terminal:

``` bash
cd admin
npm install
npm run dev
```

## Environment Variables

Never commit real credentials to GitHub.

The backend requires:

  Variable              Purpose
  --------------------- -------------------------------
  `MONGO_URI`           MongoDB connection string
  `PORT`                Backend server port
  `JWT_SECRET`          JWT signing secret
  `SALT`                bcrypt salt rounds
  `STRIPE_SECRET_KEY`   Stripe server-side secret key

Add `.env` to `.gitignore`.

## Deployment

A suitable deployment architecture for this project is:

``` text
Customer Frontend  -> Vercel
Admin Panel        -> Vercel
Backend API        -> Render
Database           -> MongoDB Atlas
Payments           -> Stripe
```

Backend deployment settings for Render:

``` text
Root Directory: backend
Build Command: npm install
Start Command: node server.js
```

Frontend and admin Vite applications can use:

``` text
Build Command: npm run build
Output Directory: dist
```

## Production Configuration

Before using the deployed application in production, replace local
development URLs with deployed URLs.

For example, the frontend API base URL should point to the deployed
backend instead of:

``` text
http://localhost:4000
```

The Stripe success and cancel redirect URLs in the backend must also
point to the deployed customer frontend instead of a localhost URL.

For a cleaner setup, these URLs should be moved to environment variables
such as:

``` env
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

and a Vite variable such as:

``` env
VITE_API_URL=https://your-backend-domain.onrender.com
```

## Security Notes

-   Do not commit `.env` files.
-   Do not expose MongoDB credentials, JWT secrets, or Stripe secret
    keys.
-   Rotate any secret that has accidentally been shared or committed.
-   Keep authorization checks on the server; hiding admin UI alone is
    not authorization.
-   Use environment variables for production URLs and credentials.

## Scripts

Both React applications support:

``` bash
npm run dev
npm run build
npm run lint
npm run preview
```

The current backend can be started with:

``` bash
node server.js
```

## Future Improvements

-   Move all frontend/backend URLs to environment variables
-   Add refresh-token authentication
-   Add centralized error-handling middleware
-   Add request validation middleware
-   Add pagination and advanced filtering
-   Store uploaded images in cloud storage such as Cloudinary
-   Add Stripe webhook-based payment confirmation
-   Add automated tests
-   Add order tracking and real-time status updates
-   Improve production logging and monitoring

## Author

**Soumik Adhikary**

Full Stack MERN Developer

GitHub: https://github.com/soumik7076335323

------------------------------------------------------------------------

If you find this project useful, consider giving the repository a star.
