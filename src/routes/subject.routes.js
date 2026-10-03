const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const subjectController = require("../controllers/subject.controller");

const router = express.Router();

router.post("/", authMiddleware, subjectController.createSubject);

router.get("/",authMiddleware,subjectController.getSubjects);

router.get("/:id",authMiddleware,subjectController.getSubjectById);

router.put("/:id", authMiddleware, subjectController.updateSubject);

router.delete("/:id", authMiddleware, subjectController.deleteSubject);

module.exports = router;