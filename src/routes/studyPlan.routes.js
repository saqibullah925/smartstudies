const express = require("express");

const authMiddleware = require("../middleware/auth.middleware");
const studyPlanController = require("../controllers/studyPlan.controller");

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
    studyPlanController.getStudyPlanById
);

router.put(
    "/:id",
    authMiddleware,
    studyPlanController.updateStudyPlan
);

router.delete(
    "/:id",
    authMiddleware,
    studyPlanController.deleteStudyPlan
);

module.exports = router;