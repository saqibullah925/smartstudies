const express = require("express");
const logger = require("./middleware/logger");

const app = express();

app.use(logger)

app.get("/health", ( req, res ) => {
  res.json({
    status: "ok",
  });
});

module.exports = app;
