const {body} = require("express-validator");

const registerValidation = [
    body("name").trim().not().isEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("Please provide a valid email address"),
    body("password").trim().isLength({min: 6}).withMessage("Password must be at least 6 characters long"),
];

loginValidation = [
    body("email").trim().isEmail().withMessage("Please provide a valid email address"),
    body("password").notEmpty().withMessage("Password is required"),
];

module.exports = {
    registerValidation,
    loginValidation
};
