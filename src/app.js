const express = require("express");

const logger = require("./middleware/logger");
const healthRouter = require("./routes/health.routes");
const  authRouter = require("./routes/auth.routes");
const subjectRoutes = require("./routes/subject.routes");

const app = express();

app.use(express.json())

app.use(logger);

app.use(healthRouter);
app.use("/users", authRouter);
app.use("/subjects", subjectRoutes );


module.exports = app;

