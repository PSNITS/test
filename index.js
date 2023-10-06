const express = require("express");

const app = express();

app.get("/nodejs",(req,res,next)=>{
    res.send("<h1>Running node js 2</h1>")
    next();
})

app.get("/just",(req,res,next)=>{
    res.send("<h1>just</h1>")
    next();
})


app.get("/",(req,res,next)=>{
    res.send("<h1>Running node js</h1>")
    next();
})


app.listen(4000,()=>{
    console.log("runnng ");
})