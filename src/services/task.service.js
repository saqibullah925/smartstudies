const Task = require("../models/task.model");
const StudyPlan = require("../models/studyPlan.model");

const createTask = async ({
    title,
    description,
    studyPlanId,
    userId,
    dueDate,
    status,
}) => {
    if (!title || !studyPlanId) {
        const error = new Error(
            "Title and study plan are required"
        );
        error.statusCode = 400;
        throw error;
    }

    const studyPlan = await StudyPlan.findOne({
        _id: studyPlanId,
        user: userId,
    });

    if (!studyPlan) {
        const error = new Error("Study plan not found");
        error.statusCode = 404;
        throw error;
    }

    const task = new Task({
        title,
        description,
        studyPlan: studyPlanId,
        user: userId,
        dueDate,
        status,
    });

    await task.save();

    return task;
};

// Get all tasks for a specific user
const getTasks = async (userId) => {
    return await Task.find({
        user: userId,
    });
};

// Get a specific task by its ID and user ID
const getTaskById = async (taskId, userId) => {
    return await Task.findOne({
        _id: taskId,
        user: userId,
    });
};

const updateTask = async (
    taskId,
    userId,
    {
        title,
        description,
        studyPlanId,
        dueDate,
        status,
    }
) => {
    if (studyPlanId !== undefined) {
    const studyPlan = await StudyPlan.findOne({
        _id: studyPlanId,
        user: userId,
    });

    if (!studyPlan) {
        const error = new Error(
            "Study plan not found"
        );
        error.statusCode = 404;
        throw error;
    }
}
    const updateData = {};

    if (title !== undefined) {
        updateData.title = title;
    }

    if (description !== undefined) {
        updateData.description = description;
    }

    if (studyPlanId !== undefined) {
        updateData.studyPlan = studyPlanId;
    }

    if (dueDate !== undefined) {
        updateData.dueDate = dueDate;
    }

    if (status !== undefined) {
        updateData.status = status;
    }

    return await Task.findOneAndUpdate(
        {
            _id: taskId,
            user: userId,
        },
        {
            $set: updateData,
        },
        {
            new: true,
        }
    );
};

const deleteTask = async (taskId, userId) => {
    return await Task.findOneAndDelete({
        _id: taskId,
        user: userId,
    });
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
};