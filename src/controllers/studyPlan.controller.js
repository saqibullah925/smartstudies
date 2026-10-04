const studyPlanService = require("../services/studyPlan.service");

const createStudyPlan = async (req, res) => {
    try {
        const {
            name,
            description,
            exam,
            startDate,
            endDate,
            status,
        } = req.body;

        const userId = req.user.userId;

        const studyPlan = await studyPlanService.createStudyPlan({
            name,
            description,
            examId: exam,
            userId,
            startDate,
            endDate,
            status,
        });

        return res.status(201).json({
            message: "Study plan created successfully",
            studyPlan,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message || "Internal server error",
        });
    }
};

const getStudyPlans = async (req, res) => {
    try {
        const userId = req.user.userId;

        const studyPlans = await studyPlanService.getStudyPlans(userId);

        return res.status(200).json({
            message: "Study plans retrieved successfully",
            studyPlans,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message || "Internal server error",
        });
    }
};

const getStudyPlanById = async (req, res) => {
    try {
        const studyPlanId = req.params.id;
        const userId = req.user.userId;

        const studyPlan = await studyPlanService.getStudyPlanById(
            studyPlanId,
            userId
        );

        if (!studyPlan) {
            return res.status(404).json({
                message: "Study plan not found",
            });
        }

        return res.status(200).json({
            message: "Study plan retrieved successfully",
            studyPlan,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message || "Internal server error",
        });
    }
};

const updateStudyPlan = async (req, res) => {
    try {
        const studyPlanId = req.params.id;
        const userId = req.user.userId;

        const {
            name,
            description,
            exam,
            startDate,
            endDate,
            status,
        } = req.body;

        const studyPlan = await studyPlanService.updateStudyPlan(
            studyPlanId,
            userId,
            {
                name,
                description,
                examId: exam,
                startDate,
                endDate,
                status,
            }
        );

        if (!studyPlan) {
            return res.status(404).json({
                message: "Study plan not found",
            });
        }

        return res.status(200).json({
            message: "Study plan updated successfully",
            studyPlan,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message || "Internal server error",
        });
    }
};

const deleteStudyPlan = async (req, res) => {
    try {
        const studyPlanId = req.params.id;
        const userId = req.user.userId;

        const studyPlan = await studyPlanService.deleteStudyPlan(
            studyPlanId,
            userId
        );

        if (!studyPlan) {
            return res.status(404).json({
                message: "Study plan not found",
            });
        }

        return res.status(200).json({
            message: "Study plan deleted successfully",
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message || "Internal server error",
        });
    }
};

module.exports = {
    createStudyPlan,
    getStudyPlans,
    getStudyPlanById,
    updateStudyPlan,
    deleteStudyPlan,
};