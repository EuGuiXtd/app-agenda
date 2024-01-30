require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const token = req.header('authorization');
    const secret = process.env.JWT_SECRET
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
      }
    try {
        jwt.verify(token, secret);
      } catch (err) {
        return res.status(401).json({ message: 'Token must be a valid token' });
      }
  
    next();
  };