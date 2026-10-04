const express = require("express");

const logger = require("./middleware/logger");
const healthRouter = require("./routes/health.routes");
const  authRouter = require("./routes/auth.routes");
const subjectRoutes = require("./routes/subject.routes");
const examRoutes = require("./routes/exam.routes");
const studyPlanRoutes = require("./routes/studyPlan.routes");
const taskRoutes = require("./routes/task.routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

app.use(express.json())

app.use(logger);

app.use(healthRouter);
app.use("/users", authRouter);
app.use("/subjects", subjectRoutes );
app.use("/exams", examRoutes);
app.use("/study-plans", studyPlanRoutes);
app.use("/tasks", taskRoutes);
app.use(errorMiddleware);

module.exports = app;

