// require("dotenv").config();
// const config = {
//      port: Number(process.env.PORT) || 5000,
// };
// module.exports = config;


require("dotenv").config();

const port = Number(process.env.PORT) || 5000;
const mongoUri = process.env.MONGO_URI;
const jwtSecret = process.env.JWT_SECRET;

module.exports = {
    port,
    mongoUri,
    jwtSecret
};