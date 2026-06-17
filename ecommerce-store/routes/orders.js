const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

// Get cart from DB
router.get('/cart/get', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.cart || []);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Save cart to DB
router.post('/cart/save', protect, async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, { cart: req.body.cart });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create order
router.post('/', protect, async (req, res) => {
  console.log("=== ORDER DEBUG ===");
  console.log("1. Request body:", req.body);
  console.log("2. User:", req.user);
  
  try {
    const { items, totalPrice, shippingAddress } = req.body;
    
    console.log("3. Items:", items);
    console.log("4. Total Price:", totalPrice);
    console.log("5. Shipping:", shippingAddress);
    
    if (!items || items.length === 0) {
      console.log("6. ERROR: No items!");
      return res.status(400).json({ message: 'No items in order' });
    }
    
    console.log("7. Creating order...");
    
    const newOrder = await Order.create({
      user: req.user.id,
      items: items,
      totalPrice: totalPrice,
      shippingAddress: shippingAddress
    });
    
    console.log("8. Order created:", newOrder._id);
    
    // Clear cart after order
    await User.findByIdAndUpdate(req.user.id, { cart: [] });
    
    console.log("9. Cart cleared");
    console.log("=== ORDER SUCCESS ===");
    
    res.status(201).json({ success: true, order: newOrder });
  } catch (error) {
    console.log("10. ERROR CAUGHT:", error);
    console.log("Error message:", error.message);
    console.log("Error stack:", error.stack);
    res.status(500).json({ message: error.message });
  }
});

// Get user orders
router.get('/myorders', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single order
router.get('/:id', protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;