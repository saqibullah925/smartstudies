const errorMiddleware = (err, req, res, next)=>{
    console.log(err);

    const statusCode = err.statusCode || 500;

    return res.status(statuscode).json({
        message: err.message || "Internal server error",
    });
}
   
module.exports = errorMiddleware;