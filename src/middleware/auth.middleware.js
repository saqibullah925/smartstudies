const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/env");

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            const error = new Error("Authentication required");
            error.statusCode = 401;

            return next(error);
        }

        const parts = authHeader.split(" ");

        if (
            parts.length !== 2 ||
            parts[0] !== "Bearer" ||
            !parts[1]
        ) {
            const error = new Error("Invalid authorization format");
            error.statusCode = 401;

            return next(error);
        }

        const token = parts[1];

        const decoded = jwt.verify(token, jwtSecret);

        req.user = {
            userId: decoded.userId,
        };

        next();
    } catch (error) {
        const authError = new Error("Invalid or expired token");
        authError.statusCode = 401;

        next(authError);
    }
};

module.exports = authMiddleware;