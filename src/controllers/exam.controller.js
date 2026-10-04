const examService = require("../services/exam.service");

const createExam = async (req, res, next ) => {
    try {
        const { name, description, examDate, subject } = req.body;
        const userId = req.user.userId;

        const exam = await examService.createExam({
            name,
            description,
            examDate,
            subjectId: subject,
            userId,
        });
        return res.status(201).json({
            message: "Exam created successfully",
            exam,
        });
    } catch (error) {
        next(error);
    }
};

// 
const getExams = async (req, res, next) => {
    try {
        const userId = req.user.userId;

        const exams = await examService.getExams(userId);

        return res.status(200).json({
            exams,
        });
    } catch (error) {
        next(error);
    }
};

const getExamById = async (req, res, next ) => {
    try {
        const examId = req.params.id;
        const userId = req.user.userId;

        const exam = await examService.getExamById(
            examId,
            userId
        );

        if (!exam) {
            return res.status(404).json({
                message: "Exam not found",
            });
        }

        return res.status(200).json({
            exam,
        });
    } catch (error) {
        next(error);
    }
};

const updateExam = async (req, res, next ) => {
    try {
        const examId = req.params.id;
        const userId = req.user.userId;

        const {
            name,
            description,
            examDate,
            subject,
        } = req.body;

        const exam = await examService.updateExam(
            examId,
            userId,
            {
                name,
                description,
                examDate,
                subjectId: subject,
            }
        );

        if (!exam) {
            return res.status(404).json({
                message: "Exam not found",
            });
        }

        return res.status(200).json({
            message: "Exam updated successfully",
            exam,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message || "Internal server error",
        });
    }
};

const deleteExam = async (req, res, next ) => {
    try {
        const examId = req.params.id;
        const userId = req.user.userId;

        const exam = await examService.deleteExam(
            examId,
            userId
        );

        if (!exam) {
            return res.status(404).json({
                message: "Exam not found",
            });
        }

        return res.status(200).json({
            message: "Exam deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createExam,
    getExams,
    getExamById,
    updateExam,
    deleteExam
};
