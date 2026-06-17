const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  console.log("Auth Debug - Token:", token ? "Present" : "Missing");
  
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Auth Debug - Decoded:", decoded);
    
    // CRITICAL FIX: Make sure user.id is set correctly
    req.user = { id: decoded.userId || decoded.id };
    
    console.log("Auth Debug - req.user.id:", req.user.id);
    next();
  } catch (error) {
    console.error("Auth Error:", error);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

module.exports = { protect };