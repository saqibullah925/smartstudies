const mongoose = require("mongoose");

const studyPlanSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
        },

        exam: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Exam",
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },

        startDate: {
            type: Date,
        },

        endDate: {
            type: Date,
        },

        status: {
            type: String,
            enum: ["planned", "active", "completed"],
            default: "planned",
        },
    },
    {
        timestamps: true,
    }
);

const StudyPlan = mongoose.model("StudyPlan", studyPlanSchema);

module.exports = StudyPlan;