const express = require ("express");
const server = express();
const path = require("path");

server.use("/public",express.static("public"))


server.get("/", (req, res)=>{
       res.send("soy un index ")})


server.get("/babbage", (req, res)=>{
    res.sendFile(path.join(__dirname,"/Views/babbage.html"))})
    //  res.send("soy un babbage perfecto")})

server.get("/berners-lee", (req, res)=>{
    res.send("soy un berners-lee perfecto")})     

server.get("/clarke", (req, res)=>{
    res.send("soy un clarke perfecto")}) 


server.get("/hopper",(req, res)=>{
    res.send("soy un hopper")
})

server.get("/hamilton",(req, res)=>{
    res.send("soy un hamilton")
})

server.get("/lovelace",(req, res)=>{
    res.send("soy un lovelace")
})

server.get("/index",(req, res)=>{
    res.send("soy un index")
})

server.get("/turing",(req, res)=>{
    res.send("soy un turing")
})





server.listen (3030, ()=>{
    console.log ("el servidor inicio")
})

