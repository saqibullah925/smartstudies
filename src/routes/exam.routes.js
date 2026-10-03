const express = require("express");

const authMiddleware = require("../middleware/auth.middleware");
const examController = require("../controllers/exam.controller");

const router = express.Router();

router.post("/", authMiddleware, examController.createExam);
router.get("/", authMiddleware, examController.getExams);
router.get("/:examId", authMiddleware, examController.getExamById);
router.put("/:examId", authMiddleware, examController.updateExam);
router.delete("/:examId", authMiddleware, examController.deleteExam);


module.exports = router;    