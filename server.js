const express = require ("express");
const server = express();


server.get("/", (req, res)=>{
    res.send("soy un index ")})
    server.get("/babbage", (req, res)=>{
        res.send("soy un babbage perfecto")})

server.listen (3030, ()=>{
    console.log ("el servidor inicio")
})

