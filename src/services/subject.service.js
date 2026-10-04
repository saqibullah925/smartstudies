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

const updateSubject = async (
    subjectId,
    userId,
    { name, description }
) => {
    const updateData = {};

    if (name !== undefined) {
        updateData.name = name;
    }

    if (description !== undefined) {
        updateData.description = description;
    }

    return await Subject.findOneAndUpdate(
        {
            _id: subjectId,
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

const deleteSubject = async (subjectId, userId) => {
    const subject = await Subject.findOneAndDelete({
        _id: subjectId,
        user: userId,
    }); 
    return subject;
};


module.exports = {
    createSubject,
    getSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject
};