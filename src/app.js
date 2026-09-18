const express = require("express");

const logger = require("./middleware/logger");
const healthRouter = require("./routes/health.routes");

const app = express();



app.use(logger);

app.use(healthRouter);

module.exports = app;