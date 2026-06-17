# 🌿 Zeloa Cart - Full Stack E-Commerce Store

A modern, full-featured e-commerce platform built with Node.js, Express, and MongoDB. Includes user authentication, product catalog, shopping cart, order management, and secure checkout.

---

## ✨ Features

- 🔐 **User Authentication** - Register/Login with JWT tokens
- 🛍️ **Product Catalog** - Browse products with categories
- 🛒 **Shopping Cart** - Add/remove items, update quantities
- 📦 **Order Management** - Place orders with shipping address
- 👤 **User Dashboard** - View order history
- 🎨 **Responsive Design** - Works on all devices
- 🔒 **Secure Checkout** - Protected routes for authenticated users

---

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript
- Font Awesome Icons
- Responsive Design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

---

## 📁 Project Structure
ecommerce-store/
├── config/
│ ├── db.js
│ └── middleware/
│ └── auth.js
├── models/
│ ├── User.js
│ ├── Product.js
│ └── Order.js
├── public/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ ├── main.js
│ │ └── products.js
│ ├── images/
│ ├── index.html
│ ├── login.html
│ ├── register.html
│ ├── cart.html
│ ├── orders.html
│ └── product.html
├── routes/
│ ├── auth.js
│ ├── products.js
│ └── orders.js
├── .env
├── package.json
├── server.js
└── README.md

text

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account

### Step 1: Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ecommerce-store.git
cd ecommerce-store
Step 2: Install dependencies
bash
npm install
Step 3: Set up environment variables
Create a .env file:

env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/ecommerce?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_change_this
PORT=5000

Step 4: Start the server

node server.js
Step 5: Open your browser
Navigate to: http://localhost:5000

🚀 Running the Application

# Install dependencies
npm install

# Start server
node server.js
