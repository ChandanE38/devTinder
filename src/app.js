const express=require('express');

const app=express();



app.get("/hello",(req, res) => {
    res.send("we get hello world 2");
}); 

app.post("/test",(req, res) => {
    res.send("We tested hello world 3");
}); 

app.delete("/test",(req, res) => {
    res.send("We have Deleted successfully 3");
}); 

app.use("/test",(req, res) => {
    res.send("hello world");
}); 

app.listen(3000 , ()=>{
    console.log("Server is successfully listening on port no 3000");
});
