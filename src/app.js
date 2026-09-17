// const express = require("express");

// const logger = require("./middleware/logger");
// const healthRouter = require("./routes/health.routes");
// const connectDB = require("./config/database")

// const app = express();
// connectDB()

// app.use(logger)
// app.use(healthRouter)

// module.exports = app;

const express = require("express");

const logger = require("./middleware/logger");
const healthRouter = require("./routes/health.routes");
const connectDB = require("./config/database");

const app = express();

connectDB();

app.use(logger);

app.use(healthRouter);

module.exports = app;