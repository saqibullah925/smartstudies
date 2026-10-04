const express = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {registerValidation, loginValidation} = require("../validators/auth.validator");
const validate = require("../middleware/validation.middleware")
const router = express.Router();


router.post(
    "/register",
    registerValidation,
    validate,
    authController.register
);

router.post(
    "/login",
    loginValidation,
    validate,
    authController.login
);

router.get("/me", authMiddleware, authController.getMe);


module.exports = router;