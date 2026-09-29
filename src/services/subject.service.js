const Subject = require("../models/subject.model");

const createSubject = async({name, description, userId})=>{
    const subject = new Subject({
        name: name,
        description: description,
        user: userId,
    });
    await subject.save();
    return subject;
};

module.exports = {
    createSubject
};