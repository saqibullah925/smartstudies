const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
        },

        examDate: {
            type: Date,
            required: true,
        },

        subject: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Subject",
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;