const express=require('express');

const app=express();



app.use("/hello",(req, res) => {
    res.send("hello world 2");
}); 

app.use("/test",(req, res) => {
    res.send("hello world 3");
}); 

app.listen(3000 , ()=>{
    console.log("Server is successfully listening on port no 3000");
});
