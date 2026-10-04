const express = require("express");

const authMiddleware = require("../middleware/auth.middleware");
const examController = require("../controllers/exam.controller");
const validateObjectId = require("../middleware/objectId.middleware");

const router = express.Router();

router.post("/", authMiddleware, examController.createExam);
router.get("/", authMiddleware, examController.getExams);
router.get("/:examId", authMiddleware, validateObjectId, examController.getExamById);
router.put("/:examId", authMiddleware, validateObjectId, examController.updateExam);
router.delete("/:examId", authMiddleware, validateObjectId, examController.deleteExam);
router.get("/:id", authMiddleware, validateObjectId, examController.getExamById);
router.put("/:id", authMiddleware, validateObjectId, examController.updateExam);
router.delete("/:id", authMiddleware, validateObjectId, examController.deleteExam);

module.exports = router;    