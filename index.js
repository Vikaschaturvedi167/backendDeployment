const express = require('express');
require("dotenv").config();
const app = express();

app.get('/' ,(req, res)=>{
    res.send({msg : 'api working'})
})
app.get('/ping' ,(req, res)=>{
    res.send({msg : 'pong'})
})
app.get('/welcome' ,(req, res)=>{
    res.send({msg : `WELCOME HOME ${process.env.NAME}`})

})

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`port runninng at ${port}`);
})