const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const subjectController = require("../controllers/subject.controller");

const router = express.Router();

router.post("/", authMiddleware, subjectController.createSubject);

module.exports = router;