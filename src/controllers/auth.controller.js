const authService = require("../services/auth.service");

const register = async( req, res )=>{
    try{
       const {name, email, password} = req.body;

       const user = await authService.register({
        name,
        email,
        password
       });

       return res.status(201).json({
        message: "User registered successffully", user
       });

    } catch(error){
        return res.status(error.statusCode || 500).json({  message: error.message || "Internal server error"});
    }
    
} ;
const login = async(req, res)=>{
    try{
        const {email, password} = req.body;
        const result = await authService.login({
            email,
            password
        });
        return res.status(200).json({
            message: "User logged in succesffully",
            ...result
        });
    } catch (error){
        return res.status(error.statusCode || 500).json({ message: error.message || "unauthurized access"});
    }
};


module.exports = {
    register,
    login
};
