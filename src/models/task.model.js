const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
        },

        studyPlan: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "StudyPlan",
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },

        dueDate: {
            type: Date,
        },

        status: {
            type: String,
            enum: ["pending", "completed"],
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;