const app = require("./app");
const config = require("./config/env");


const port = config.port;

app.get("/health",(req, res) =>{
    res.send({
  "status": "ok"
})
}) 


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);

});
    
