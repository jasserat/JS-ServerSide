const express = require("express");

var app = express();



app.get('/',(req,res,next)=>{
    console.log('middleware 1')
    //req.sendDate = new Date();
    next();
},(req,res,next)=>{
    res.send(`Hello ${req.sendDate}`);
    next();
});

app.use((req,res,next)=>{
    console.log('middleware 2')
    req.sendDate = new Date();
    next();
})

app.listen(8080);