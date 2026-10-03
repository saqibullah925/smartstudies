const express = require("express");

const authMiddleware = require("../middleware/auth.middleware");
const examController = require("../controllers/exam.controller");

const router = express.Router();

router.post("/", authMiddleware, examController.createExam);

module.exports = router;    