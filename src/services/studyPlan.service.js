const StudyPlan = require("../models/studyPlan.model");
const Exam = require("../models/exam.model");

const createStudyPlan = async ({
    name,
    description,
    examId,
    userId,
    startDate,
    endDate,
    status,
}) => {
    if (!name || !name.trim() || !examId) {
        const error = new Error("Name and exam are required");
        error.statusCode = 400;
        throw error;
    }

    // Verify that the exam belongs to the authenticated user.
    const exam = await Exam.findOne({
        _id: examId,
        user: userId,
    });

    if (!exam) {
        const error = new Error("Exam not found");
        error.statusCode = 404;
        throw error;
    }

    const studyPlan = new StudyPlan({
        name: name.trim(),
        description,
        exam: examId,
        user: userId,
        startDate,
        endDate,
        status,
    });

    await studyPlan.save();

    return studyPlan;
};

const getStudyPlans = async (userId) => {
    const studyPlans = await StudyPlan.find({
        user: userId,
    }).populate("exam", "name examDate subject");

    return studyPlans;
};

const getStudyPlanById = async (studyPlanId, userId) => {
    const studyPlan = await StudyPlan.findOne({
        _id: studyPlanId,
        user: userId,
    }).populate("exam", "name examDate subject");

    return studyPlan;
};

const updateStudyPlan = async (
    studyPlanId,
    userId,
    {
        name,
        description,
        examId,
        startDate,
        endDate,
        status,
    }
) => {
    // Validate the new exam only if the user wants to change it.
    if (examId !== undefined) {
        const exam = await Exam.findOne({
            _id: examId,
            user: userId,
        });

        if (!exam) {
            const error = new Error("Exam not found");
            error.statusCode = 404;
            throw error;
        }
    }

    const updateData = {};

    if (name !== undefined) {
        if (typeof name !== "string" || !name.trim()) {
            const error = new Error("Name cannot be empty");
            error.statusCode = 400;
            throw error;
        }

        updateData.name = name.trim();
    }

    if (description !== undefined) {
        updateData.description = description;
    }

    if (examId !== undefined) {
        updateData.exam = examId;
    }

    if (startDate !== undefined) {
        updateData.startDate = startDate;
    }

    if (endDate !== undefined) {
        updateData.endDate = endDate;
    }

    if (status !== undefined) {
        updateData.status = status;
    }

    if (Object.keys(updateData).length === 0) {
        const error = new Error("At least one field is required to update");
        error.statusCode = 400;
        throw error;
    }

    const studyPlan = await StudyPlan.findOneAndUpdate(
        {
            _id: studyPlanId,
            user: userId,
        },
        {
            $set: updateData,
        },
        {
            new: true,
            runValidators: true,
        }
    ).populate("exam", "name examDate subject");

    return studyPlan;
};

const deleteStudyPlan = async (studyPlanId, userId) => {
    const studyPlan = await StudyPlan.findOneAndDelete({
        _id: studyPlanId,
        user: userId,
    });

    return studyPlan;
};

module.exports = {
    createStudyPlan,
    getStudyPlans,
    getStudyPlanById,
    updateStudyPlan,
    deleteStudyPlan,
};