// const express = require("express");

// const logger = require("./middleware/logger");
// const healthRouter = require("./routes/health.routes");
// const  authRouter = require("./routes/auth.route")

// const app = express();

// app.use(express.json())

// app.use(logger);

// app.use(healthRouter);
// app.use("/users", authRouter)

// module.exports = app;

const express = require("express");

const logger = require("./middleware/logger");
const healthRouter = require("./routes/health.routes");
const authRouter = require("./routes/auth.route");

const app = express();

app.use(express.json());

app.use(logger);

app.use(healthRouter);

app.use("/users", authRouter);

module.exports = app;