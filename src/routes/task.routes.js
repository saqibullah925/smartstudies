const express = require("express");

const authMiddleware = require("../middleware/auth.middleware");
const taskController = require("../controllers/task.controller");
const validateObjectId = require("../middleware/objectId.middleware");

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    taskController.createTask
);

router.get(
    "/",
    authMiddleware,
    taskController.getTasks
);

router.get(
    "/:id",
    authMiddleware,
    validateObjectId,
    taskController.getTaskById
);

router.put(
    "/:id",
    authMiddleware,
    validateObjectId,
    taskController.updateTask
);

router.delete(
    "/:id",
    authMiddleware,
    validateObjectId, 
    taskController.deleteTask
);

module.exports = router;