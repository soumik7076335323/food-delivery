# 🍔 FoodyGo - Full Stack MERN Food Delivery Application

FoodyGo is a **full-stack food delivery web application** built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**.

The application provides a complete food-ordering experience with a dedicated **Customer Application**, a separate **Admin Panel**, and a **RESTful Backend API**.

It includes secure authentication, role-based authorization, food management, cart functionality, order management, image uploads, Stripe payment integration, and production deployment.

---

## 🌐 Live Demo

### 🍽️ Customer Application

https://soumik-foodygo.vercel.app

### 🛠️ Admin Panel

https://food-delivery-soumik7.vercel.app

### ⚙️ Backend API

https://soumik-food.onrender.com

### 📦 GitHub Repository

https://github.com/soumik7076335323/food-delivery

---

## ✨ Features

### 👤 Customer Application

- 🔐 User Registration & Login
- 🎫 JWT-based Authentication
- 🔒 Secure Password Hashing using bcrypt
- 🍕 Browse Available Food Items
- 🗂️ Category-based Food Filtering
- 🔍 Live Food Search
- 🛒 Add Food Items to Cart
- ➕ Increase Cart Quantity
- ➖ Decrease Cart Quantity
- 💾 Persistent Cart for Authenticated Users
- 📦 Checkout & Order Placement
- 💳 Stripe Checkout Payment Integration
- ✅ Payment Verification
- 📋 View Personal Order History
- 🔔 Toast Notifications
- 📱 Responsive User Interface

---

### 🛠️ Admin Panel

- 🔐 Admin Login
- 🛡️ Role-Based Authorization (RBAC)
- ➕ Add New Food Items
- 🖼️ Upload Food Images
- 📋 View All Food Items
- 🗑️ Remove Food Items
- 📦 View Customer Orders
- 🔄 Update Order Status
- 🔔 Toast Notifications

---

## 🛠️ Tech Stack

### 🎨 Frontend

- React.js 18
- JavaScript (ES6+)
- Vite
- React Router DOM
- React Hooks
- Context API
- Axios
- React Toastify
- HTML5
- CSS3

### 🧑‍💼 Admin Panel

- React.js 18
- JavaScript
- Vite
- React Router DOM
- Axios
- React Toastify
- CSS3

### ⚙️ Backend

- Node.js
- Express.js
- RESTful API
- JSON Web Token (JWT)
- bcrypt
- Multer
- CORS
- dotenv
- Validator

### 🗄️ Database

- MongoDB
- MongoDB Atlas
- Mongoose

### 💳 Payment

- Stripe Checkout

### 🚀 Deployment

- Vercel — Customer Frontend
- Vercel — Admin Panel
- Render — Backend API
- MongoDB Atlas — Cloud Database
- Stripe — Payment Processing
- GitHub — Version Control & Source Code

---

## 📁 Project Structure

```text
Food-Delivery/
│
├── frontend/                    # Customer React Application
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── admin/                       # Admin React Application
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/                     # Node.js + Express REST API
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🏗️ Application Architecture

```text
┌─────────────────────────────┐
│   Customer Application      │
│      React + Vite           │
│        Vercel               │
└──────────────┬──────────────┘
               │
               │ HTTP / REST API
               ▼
┌─────────────────────────────┐
│                             │
│    Node.js + Express.js     │
│       Backend API           │
│          Render             │
│                             │
└───────┬─────────────┬───────┘
        │             │
        │             │
        ▼             ▼
┌───────────────┐  ┌───────────────┐
│ MongoDB Atlas │  │    Stripe     │
│   Database    │  │   Checkout    │
└───────────────┘  └───────────────┘
        ▲
        │
        │ HTTP / REST API
        │
┌───────┴─────────────────────┐
│        Admin Panel          │
│       React + Vite          │
│          Vercel             │
└─────────────────────────────┘
```

---

## 🔐 Authentication & Authorization

FoodyGo uses **JWT (JSON Web Token)** for authentication and **Role-Based Access Control (RBAC)** for protecting admin operations.

### Authentication Flow

1. 👤 User registers or logs in.
2. 🔍 Backend validates the submitted credentials.
3. 🔒 Passwords are hashed using bcrypt before being stored.
4. 🎫 After successful authentication, the backend generates a JWT.
5. 📡 The client sends the token with protected API requests.
6. 🛡️ Authentication middleware validates the token.
7. 👤 The authenticated user is identified from the verified token.
8. 🔑 Admin-sensitive operations additionally verify the user's role.
9. 🚫 Unauthorized users cannot perform protected admin operations.

The default user role is:

```text
user
```

Administrative accounts use:

```text
admin
```

---

# 🔌 REST API Endpoints

## 👤 User API

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/user/register` | Register a new user |
| POST   | `/api/user/login`    | Login user          |

---

## 🍕 Food API

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| GET    | `/api/food/list`   | Get all food items  |
| POST   | `/api/food/add`    | Add a new food item |
| POST   | `/api/food/remove` | Remove a food item  |

Food creation supports image upload using **Multer**.

---

## 🛒 Cart API

| Method | Endpoint           | Description                                  |
| ------ | ------------------ | -------------------------------------------- |
| POST   | `/api/cart/add`    | Add an item to the authenticated user's cart |
| POST   | `/api/cart/remove` | Remove/decrease an item from the cart        |
| POST   | `/api/cart/get`    | Get the authenticated user's cart            |

---

## 📦 Order API

| Method | Endpoint                | Description                                 |
| ------ | ----------------------- | ------------------------------------------- |
| POST   | `/api/order/place`      | Create an order and Stripe Checkout session |
| POST   | `/api/order/verify`     | Verify payment result                       |
| POST   | `/api/order/userorders` | Get logged-in user's orders                 |
| GET    | `/api/order/list`       | Get all customer orders for admin           |
| POST   | `/api/order/status`     | Update order status                         |

---

# 💳 Stripe Payment Flow

The application integrates **Stripe Checkout** for online payment processing.

```text
Customer Cart
      │
      ▼
Checkout
      │
      ▼
Create Order
      │
      ▼
Backend creates Stripe Checkout Session
      │
      ▼
Stripe Payment Page
      │
      ▼
Payment
      │
      ▼
Payment Verification
      │
      ▼
Order Confirmation
```

---

# 🖼️ Image Upload

Food images are uploaded through the Admin Panel.

The backend uses:

```text
Multer
```

to handle image uploads.

Uploaded food images are served through the backend's static image route:

```text
/images/<image-name>
```

Example:

```text
https://soumik-food.onrender.com/images/example-food.png
```

---

# 💻 Local Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/soumik7076335323/food-delivery.git
```

Move into the project:

```bash
cd food-delivery
```

---

# ⚙️ Backend Setup

Move into the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside:

```text
backend/.env
```

Add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
JWT_SECRET=your_secure_jwt_secret
SALT=10
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the backend:

```bash
node server.js
```

The backend will run locally at:

```text
http://localhost:4000
```

---

# 🍽️ Customer Frontend Setup

Open another terminal and move to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide the local development URL.

---

# 🛠️ Admin Panel Setup

Open another terminal:

```bash
cd admin
```

Install dependencies:

```bash
npm install
```

Start the Admin Panel:

```bash
npm run dev
```

---

# 🔑 Environment Variables

The backend requires the following environment variables:

| Variable            | Purpose                         |
| ------------------- | ------------------------------- |
| `MONGO_URI`         | MongoDB Atlas connection string |
| `PORT`              | Backend server port             |
| `JWT_SECRET`        | JWT signing secret              |
| `SALT`              | bcrypt salt rounds              |
| `STRIPE_SECRET_KEY` | Stripe server-side secret key   |

⚠️ **Never commit real credentials or `.env` files to GitHub.**

Make sure `.env` is included in:

```text
.gitignore
```

---

# 🚀 Production Deployment

The application uses the following production architecture:

```text
Customer Frontend
      │
      └── Vercel
             │
             ▼
       Render Backend
             │
       ┌─────┴─────┐
       ▼           ▼
 MongoDB Atlas   Stripe


Admin Panel
      │
      └── Vercel
             │
             ▼
       Render Backend
```

---

## 🌍 Production Services

| Application          | Platform      |
| -------------------- | ------------- |
| 🍽️ Customer Frontend | Vercel        |
| 🛠️ Admin Panel       | Vercel        |
| ⚙️ Backend API       | Render        |
| 🗄️ Database          | MongoDB Atlas |
| 💳 Payment Gateway   | Stripe        |
| 📦 Source Code       | GitHub        |

---

# ⚙️ Render Backend Configuration

Recommended Render settings:

```text
Root Directory: backend
Build Command: npm install
Start Command: node server.js
```

Production backend:

```text
https://soumik-food.onrender.com
```

---

# ▲ Vercel Configuration

Both React applications are built using Vite.

### Customer Frontend

```text
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
```

### Admin Panel

```text
Root Directory: admin
Build Command: npm run build
Output Directory: dist
```

---

# 🔒 Security

The application follows several important security practices:

- 🔐 JWT-based authentication
- 🔒 Password hashing using bcrypt
- 🛡️ Server-side role-based authorization
- 🔑 Environment variables for sensitive credentials
- 🚫 `.env` excluded from Git
- 🌐 CORS middleware
- 🔍 Authentication middleware for protected APIs
- 👑 Admin role verification for administrative operations
- 💳 Stripe secret key kept on the backend
- 🗄️ MongoDB credentials stored as environment variables

### ⚠️ Important

Never expose or commit:

```text
MongoDB Password
JWT Secret
Stripe Secret Key
.env File
```

If a secret is accidentally committed publicly, it should be rotated immediately.

---

# 📜 Available Scripts

## Frontend / Admin

Run development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Preview production build:

```bash
npm run preview
```

---

## Backend

Start backend server:

```bash
node server.js
```

---

# 🧪 Production URLs

### 🍔 FoodyGo Customer Application

https://soumik-foodygo.vercel.app

### 🛠️ FoodyGo Admin Panel

https://food-delivery-soumik7.vercel.app

### ⚙️ FoodyGo REST API

https://soumik-food.onrender.com

### 📦 Source Code

https://github.com/soumik7076335323/food-delivery

---

# 🚀 Future Improvements

The project can be extended with:

- ☁️ Cloudinary-based image storage
- 🔄 Refresh Token Authentication
- 🧪 Unit & Integration Testing
- 🛡️ Centralized Error Handling
- ✅ Request Validation Middleware
- 📄 Pagination
- 🔎 Advanced Food Filtering
- ❤️ Wishlist Functionality
- ⭐ Food Ratings & Reviews
- 📍 Saved Delivery Addresses
- 🎟️ Coupon & Discount System
- 💳 Additional Payment Methods
- 🪝 Stripe Webhook Payment Confirmation
- 📦 Real-Time Order Tracking
- 🔔 Real-Time Order Notifications
- 📊 Advanced Admin Dashboard
- 📈 Sales Analytics
- 📱 Progressive Web App (PWA)
- ☁️ Improved Production Logging & Monitoring

---

# 👨‍💻 Author

## Soumik Adhikary

**Full Stack MERN Developer**

I am a Full Stack Developer focused on building modern web applications using **MongoDB, Express.js, React.js, Node.js, and JavaScript**.

### 📬 Connect With Me

📧 **Email:**  
adhikarysoumik97@gmail.com

📱 **Contact:**  
+91 8910525607

💼 **LinkedIn:**  
https://www.linkedin.com/in/soumik-adhikary-5a4742192/

🐙 **GitHub:**  
https://github.com/soumik7076335323

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a **⭐ Star**.

Contributions, suggestions, and feedback are welcome.

---

### 🍔 FoodyGo

**Order Your Favourite Food — Fast, Simple & Secure.**

Built with ❤️ using the **MERN Stack**.

© 2026 Soumik Adhikary
