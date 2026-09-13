const express = require("express");
const config = require("./config/env");

const app = express();


const port = config.port;

app.listen(port, ()=>{
    console.log(`Server will running on port ${port}`);

});
    
