const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/env");

const authMiddleware = (req, res, next) => {
  try {
    // Get Authorization header
    const authHeader = req.headers.authorization;

    // Check if Authorization header exists
    if (!authHeader) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    // Split: "Bearer <token>"
    const parts = authHeader.split(" ");

    // Check Bearer format and token
    if (parts[0] !== "Bearer" || !parts[1]) {
      return res.status(401).json({
        message: "Invalid authorization format",
      });
    }

    //  Get token
    const token = parts[1];
    // Verify token
    const decoded = jwt.verify(token, jwtSecret);

    // Store authenticated user's ID in request
    req.user = {
      userId: decoded.userId,
    };

    // Continue to the next middleware/controller
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;