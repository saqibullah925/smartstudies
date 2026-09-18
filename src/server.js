const app = require("./app");
const config = require("./config/env");
const connectDB = require("./config/database");

const startServer = async () => {
  try {
    await connectDB();

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();