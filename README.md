# 🍅 Tomato - MERN Food Delivery Web Application

A modern **Food Delivery Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The project includes a complete **Customer Panel**, **Admin Panel**, secure authentication, online payments, and order management.

---

## 🚀 Live Demo

### 👤 Customer Panel

https://food-delivery-frontend-s2l9.onrender.com

### 🛠️ Admin Panel

https://food-delivery-admin-wrme.onrender.com

---

# ✨ Features

## 👤 Customer Panel

- User Registration & Login
- JWT Authentication
- Secure Password Hashing (Bcrypt)
- Browse Food Items
- Category Filtering
- Live Food Search
- Add to Cart
- Update Cart Quantity
- Stripe Payment Integration
- Place Orders
- View Order History
- Responsive UI
- Toast Notifications

---

## 🛠️ Admin Panel

- Admin Authentication
- Dashboard
- Add New Food
- Upload Food Images
- Delete Food Items
- View All Orders
- Update Order Status
- Role-Based Authorization

---

# 🔐 Authentication

- JWT Authentication
- Protected Routes
- Role-Based Access Control
- Password Hashing using Bcrypt

---

# 💳 Payment

- Stripe Checkout Integration
- Payment Verification
- Order Confirmation

---

# 🛒 Food Features

- Dynamic Food Listing
- Category Filter
- Live Search
- Shopping Cart
- Quantity Increase/Decrease
- Delivery Charge Calculation

---

# ⚙️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- React Toastify
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Multer
- Stripe API

---

# 📂 Project Structure

```
Food-Delivery-main
│
├── frontend
│
├── admin
│
├── backend
│
└── README.md
```

---

# ⚡ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Food-Delivery-main.git
```

Go to project folder

```bash
cd Food-Delivery-main
```

Install Frontend

```bash
cd frontend
npm install
```

Install Admin

```bash
cd ../admin
npm install
```

Install Backend

```bash
cd ../backend
npm install
```

---

# 🔑 Environment Variables

Create a **.env** file inside the **backend** folder.

```env
PORT=4000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_JWT_SECRET

SALT=10

STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
```

---

# 🌐 Update URLs

### Frontend

```
frontend/src/context/StoreContext.jsx
```

```js
const url = "YOUR_BACKEND_URL";
```

---

### Admin

```
admin/src/App.jsx
```

```js
const url = "YOUR_BACKEND_URL";
```

---

### Backend

```
backend/controllers/orderController.js
```

```js
const frontend_url = "YOUR_FRONTEND_URL";
```

---

# ▶️ Run the Project

### Backend

```bash
cd backend
npm start
```

### Frontend

```bash
cd frontend
npm run dev
```

### Admin

```bash
cd admin
npm run dev
```

---

# 📸 Screenshots

- Home Page
- Food Categories
- Food Search
- Shopping Cart
- Stripe Checkout
- My Orders
- Admin Dashboard
- Add Food
- Food List
- Order Management

(Add your project screenshots here)

---

# 🚀 Deployment

The project can be deployed on:

- Render
- Vercel
- Netlify
- MongoDB Atlas

---

# 👨‍💻 Developed By

**Soumik Adhikary**

GitHub: https://github.com/YOUR_GITHUB_USERNAME

LinkedIn: https://www.linkedin.com/in/YOUR_LINKEDIN/

---

# ⭐ Support

If you found this project useful, don't forget to **Star ⭐ the repository**.

Happy Coding ❤️
