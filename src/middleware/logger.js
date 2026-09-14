const logger = (req, res, next) => {
    const method = req.method;
    const path = req.path;
    console.log(`this is the method: ${method} and this is path: ${path}`);
    next()
};

module.exports = logger;