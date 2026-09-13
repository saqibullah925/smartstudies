require("dotenv").config();
const config = {
     port: Number(process.env.PORT) || 5000,
};
module.exports = config;