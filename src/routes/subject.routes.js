const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const subjectController = require("../controllers/subject.controller");
const validateObjectId = require("../middleware/objectId.middleware");

const router = express.Router();

router.post("/", authMiddleware, subjectController.createSubject);
router.get("/",authMiddleware,subjectController.getSubjects);
router.get("/:id",authMiddleware, validateObjectId, subjectController.getSubjectById);
router.put("/:id", authMiddleware, validateObjectId, subjectController.updateSubject);
router.delete("/:id", authMiddleware, validateObjectId, subjectController.deleteSubject);

module.exports = router;