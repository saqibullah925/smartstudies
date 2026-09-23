// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user.model");
// const { jwtSecret } = require("../config/env");

// const register = async ({ name, email, password }) => {
//     if (!name || !email || !password) {
//         const error = new Error("Name, email and password are required");
//         error.statusCode = 400;
//         throw error;
//     }

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//         const error = new Error("User already exists");
//         error.statusCode = 409;
//         throw error;
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({
//         name,
//         email,
//         password: hashedPassword
//     });

//     await user.save();

//     return {
//         id: user._id,
//         name: user.name,
//         email: user.email
//     };
// };



// const login = async ({ email, password }) => {
//     // 1. Validate
//     if (!email || !password) {
//         const error = new Error("Invalid email or password");
//         error.statusCode = 401;
//         throw error;


//     };
//     // 2. Find user
//     const user = await User.findOne({ email });


//     // 3. Check user
//     if (!user) {
//         const error = new Error("Invalid email or password");
//         error.statusCode = 401;
//         throw error;
//     };

//     // 4. Compare password
//     const isPasswordCorrect = await bcrypt.compare(
//         password,
//         user.password
//     );

//     // 5. Check password
//     if (!isPasswordCorrect) {
//         const error = new Error("Invalid email or password");
//         error.statusCode = 401;
//         throw error;
//     };

//     // 6. Create JWT
//     const token = jwt.sign(
//         { userId: user._id },
//         jwtSecret,
//         { expiresIn: "3h" }
//     );

//     // 7. Return result
//     return {
//         token,
//         user: {
//             id: user._id,
//             name: user.name,
//             email: user.email
//         }
//     }

// }

// module.exports = {
//     register,
//     login

// };


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const { jwtSecret } = require("../config/env");

const register = async ({ name, email, password }) => {
    // 1. Validate required fields
    if (!name || !email || !password) {
        const error = new Error(
            "Name, email and password are required"
        );

        error.statusCode = 400;
        throw error;
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        const error = new Error("User already exists");

        error.statusCode = 409;
        throw error;
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user
    const user = new User({
        name,
        email,
        password: hashedPassword
    });

    // 5. Save user
    await user.save();

    // 6. Return safe user data
    return {
        id: user._id,
        name: user.name,
        email: user.email
    };
};

const login = async ({ email, password }) => {
    // 1. Validate required fields
    if (!email || !password) {
        const error = new Error("Invalid email or password");

        error.statusCode = 401;
        throw error;
    }

    // 2. Find user by email
    const user = await User.findOne({ email });

    // 3. Check if user exists
    if (!user) {
        const error = new Error("Invalid email or password");

        error.statusCode = 401;
        throw error;
    }

    // 4. Compare password with stored hash
    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );

    // 5. Check password
    if (!isPasswordCorrect) {
        const error = new Error("Invalid email or password");

        error.statusCode = 401;
        throw error;
    }

    // 6. Create JWT
    const token = jwt.sign(
        {
            userId: user._id
        },
        jwtSecret,
        {
            expiresIn: "3h"
        }
    );

    // 7. Return token and safe user data
    return {
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    };
};

module.exports = {
    register,
    login
};

