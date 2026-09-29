const express = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();


router.post("/register", authController.register);
router.post("/login", authController.login);
// router.get("/me", authMiddleware,authController.getMe);
router.get("/me", authMiddleware, authController.getMe);

// router.post("/login", (req, res) => {
//     res.status(200).json({
//         message: "Login route is working"
//     });
// });

module.exports = router;