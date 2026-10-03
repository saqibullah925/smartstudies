const examService = require("../services/exam.service");

const createExam = async (req, res) => {
    try {
        const { name, description, examDate, subjectId } = req.body;
        const userId = req.user._id;

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
        res.status(error.statusCode || 500).json({ message: error.message });
    }
};

module.exports = {
    createExam,
};
