const subjectService = require("../services/subject.service");

const createSubject = async (req, res) => {
    try {
        // Get from request body
        const { name, description } = req.body;

        // Get from authenticated user
        const userId = req.user.userId;

         // Call service
        const subject = await subjectService.createSubject({
            name,
            description,
            userId,

        });

        // Return created subject
        return res.status(201).json({
            message:"Subject was created successfully",
            subject
        })

    } catch (error) {
        // error response
        return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }

}

const getSubjects = async (req, res) => {
    try {
        const userId = req.user.userId;

        const subjects = await subjectService.getSubjects(userId);

        return res.status(200).json({
            subjects,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message || "Internal server error",
        });
    }
};

const getSubjectById = async(req, res) =>{
    try{
        const subjectId = req.params.id;
        const userId = req.user.userId;
        
        return res.status(200).json({
            subject
        })
    } catch(error){
        return res.status(error.statusCode || 404).json({
            message: error.message || "Not found",
        });
    }
}

module.exports = {
    createSubject,
    getSubjects,
    getSubjectById
};