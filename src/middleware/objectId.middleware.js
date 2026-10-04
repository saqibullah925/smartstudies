const mongoose = require("mongoose");

const validateObjectId = (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error("Invalid ID");
        error.statusCode = 400;

        return next(error);
    }

    next();
};

module.exports = validateObjectId;