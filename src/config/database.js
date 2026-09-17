const mongoose = require("mongoose");
const { mongoUri } = require("./env");

const connectDB = () => {
    mongoose
        .connect(mongoUri)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {
            console.error("MongoDB connection failed:", error);
        });
};

module.exports = connectDB;