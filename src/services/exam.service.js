const Exam = require("../models/exam.model");
const Subject = require("../models/subject.model");

// 
const createExam = async ({name, description, examDate, subjectId, userId}) => {
    if(!name || !subjectId || !userId) {
        throw new Error("Name, subjectId and userId are required");
        error.statusCode = 400;
        throw error;
    }

    // Verify that the subject belongs to the authenticated user
    const subject = await Subject.findOne({
        _id: subjectId,
        user: userId,
    });

    // 
    if (!subject) {
        const error = new Error("Subject not found or does not belong to the user");
        error.statusCode = 404;
        throw error;
    };

    // 
    const exam = new Exam({
        name: name,
        description: description,   
        examDate: examDate,
        subject: subjectId,
        user: userId,
    });
    await exam.save();
    return exam;

};

const getExamsById = async (examId, userId) => {
    const exams = await Exam.findOne({
        _id: examId,
        user: userId,
    });
};

const updateExam = async (examId, userId, { name, description, examDate , subjectId}) => {
    if(!subjectId){
        const subject = await Subject.findOne({
            _id: subjectId,
            user: userId,
        });
        if (!subject) {
            const error = new Error("Subject not found or does not belong to the user");
            error.statusCode = 404;
            throw error;
        };
    };

const updateData = {};

if(name !== undefined) updateData.name = name;
if(description !== undefined) updateData.description = description;
if(examDate !== undefined) updateData.examDate = examDate;
if(subjectId !== undefined) updateData.subject = subjectId;

return await Exam.findOneAndUpdate(
    {
        _id: examId,    
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

const deleteExam = async (examId, userId) => {
    const exam = await Exam.findOneAndDelete({
        _id: examId,
        user: userId,
    });
    return exam;
}

module.exports = {
    createExam,
    getExamsById,
    updateExam,
    deleteExam  
};