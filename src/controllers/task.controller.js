const taskService = require("../services/task.service");

const createTask = async (req, res) => {
    try {
        const {
            title,
            description,
            studyPlan,
            dueDate,
            status,
        } = req.body;

        const userId = req.user.userId;

        const task = await taskService.createTask({
            title,
            description,
            studyPlanId: studyPlan,
            userId,
            dueDate,
            status,
        });

        return res.status(201).json({
            message: "Task created successfully",
            task,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message:
                error.message || "Internal server error",
        });
    }
};

// 
const getTasks = async (req, res) => {
    try {
        const userId = req.user.userId;

        const tasks = await taskService.getTasks(userId);

        return res.status(200).json({
            tasks,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message:
                error.message || "Internal server error",
        });
    }
};

const getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user.userId;

        const task = await taskService.getTaskById(
            taskId,
            userId
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        return res.status(200).json({
            task,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message:
                error.message || "Internal server error",
        });
    }
};

const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user.userId;

        const {
            title,
            description,
            studyPlan,
            dueDate,
            status,
        } = req.body;

        const task = await taskService.updateTask(
            taskId,
            userId,
            {
                title,
                description,
                studyPlanId: studyPlan,
                dueDate,
                status,
            }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        return res.status(200).json({
            message: "Task updated successfully",
            task,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message:
                error.message || "Internal server error",
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user.userId;

        const task = await taskService.deleteTask(
            taskId,
            userId
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        return res.status(200).json({
            message: "Task deleted successfully",
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message:
                error.message || "Internal server error",
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
};