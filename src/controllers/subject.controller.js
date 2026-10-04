const subjectService = require("../services/subject.service");

const createSubject = async (req, res, next) => {
    try {
        // Get from request body
        const { name, description } = req.body;

        // Get from authenticated user
        const userId = req.user.userId;

        // Call service
        const subject = await subjectService.createSubject({
            name,
            description,
            userId,
        });

        // Return created subject
        return res.status(201).json({
            message: "Subject was created successfully",
            subject,
        });
    } catch (error) {
        next(error);
    }
};

const getSubjects = async (req, res, next) => {
    try {
        const userId = req.user.userId;

        const subjects = await subjectService.getSubjects(userId);

        return res.status(200).json({
            subjects,
        });
    } catch (error) {
        next(error);
    }
};

const getSubjectById = async (req, res, next) => {
    try {
        const subjectId = req.params.id;
        const userId = req.user.userId;

        const subject = await subjectService.getSubjectById(subjectId, userId);

        if (!subject) {
            return res.status(404).json({
                message: "Subject not found",
            });
        }

        return res.status(200).json({
            subject,
        });
    } catch (error) {
        next(error);
    }
};

const updateSubject = async (req, res, next) => {
    try {

        const subjectId = req.params.id;
        const userId = req.user.userId;

        const { name, description } = req.body;

        const subject = await subjectService.updateSubject(subjectId, userId, { name, description }

        );
        if (!subject) {
            return res.status(404).json({
                message: "Subject not found",
            });
        }
        // Return updated subject
        return res.status(200).json({
            subject,
        });
    } catch (error) {
        next(error);
    }
};

const deleteSubject = async (req, res, next) => {
    try {
        const subjectId = req.params.id;
        const userId = req.user.userId;

        const subject = await subjectService.deleteSubject(subjectId, userId);

        if (!subject) {
            return res.status(404).json({
                message: "Subject not found",
            });
        }

        return res.status(200).json({
            message: "Subject deleted successfully",
        });
        
    } catch (error) {
        next(error);
    }
};


module.exports = {
    createSubject,
    getSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject
};
