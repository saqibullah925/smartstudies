const Subject = require("../models/subject.model");

const createSubject = async ({ name, description, userId }) => {
    const subject = new Subject({
        name: name,
        description: description,
        user: userId,
    });

    await subject.save();

    return subject;
};

const getSubjects = async (userId) => {
    const subjects = await Subject.find({
        user: userId,
    });

    return subjects;
};

const getSubjectById = async (subjectId, userId) => {
    const subject = await Subject.findOne({
        _id: subjectId,
        user: userId,
    });

    return subject;
};

const updateSubject = async (subjectId, userId) =>{
    const subject = await Subject.findByIdAndUpdate({
        _id: subjectId,
    });
    return subject;
}

module.exports = {
    createSubject,
    getSubjects,
    getSubjectById,
};