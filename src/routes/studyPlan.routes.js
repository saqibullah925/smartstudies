const express = require("express");

const authMiddleware = require("../middleware/auth.middleware");
const studyPlanController = require("../controllers/studyPlan.controller");
const validateObjectId = require("../middleware/objectId.middleware");

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    studyPlanController.createStudyPlan
);

router.get(
    "/",
    authMiddleware,
    studyPlanController.getStudyPlans
);

router.get(
    "/:id",
    authMiddleware,
    validateObjectId,
    studyPlanController.getStudyPlanById
);

router.put(
    "/:id",
    authMiddleware,
    validateObjectId,
    studyPlanController.updateStudyPlan
);

router.delete(
    "/:id",
    authMiddleware,
    validateObjectId,
    studyPlanController.deleteStudyPlan
);

module.exports = router;