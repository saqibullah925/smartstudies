const express = require("express");
// const authController = require("../controllers/auth.controller");
const authController = require("../controllers/auth.controller");
const router = express.Router();


router.post("/register", authController.register);
router.post("/login", authController.login);
// router.post("/login", (req, res) => {
//     res.status(200).json({
//         message: "Login route is working"
//     });
// });

module.exports = router;