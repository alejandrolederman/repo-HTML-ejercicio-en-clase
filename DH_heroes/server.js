const express = require ("express");
const server = express();
const path = require("path");

const publiPath = path.resolve(__dirname,"./public");


server.use(express.static(publiPath))

server.listen (3030, ()=>{
    console.log ("el servidor inicio")
})

let BABBAGE_PAGE = "./Views/babbage.html";
let INDEX_PAGE = "/Views/index.html";
let BERNERSLEE_PAGE = "/Views/erners-lee.html";
let CLARKE_PAGE = "/Views/clarke.html";
let HOPPER_PAGE ="/Views/hopper.html";
let HAMILTON_PAGE = "/Views/hamilton.html";
let LOVELACE_PAGE = "/Views/lovelace.html";
let TURING_PAGE = "/Views/turing.html";

server.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, INDEX_PAGE))})

    server.get("/home", (req, res)=>{
        res.sendFile(path.join(__dirname, INDEX_PAGE))})

server.get("/babbage", (req, res)=>{
    res.sendFile(path.resolve(__dirname, BABBAGE_PAGE))})
    
server.get("/berners-lee", (req, res)=>{
    res.sendFile(path.join(__dirname, BERNERSLEE_PAGE))})     

server.get("/clarke", (req, res)=>{
    res.sendFile(path.join(__dirname, CLARKE_PAGE))}) 

server.get("/hopper",(req, res)=>{
    res.sendFile(path.join(__dirname, HOPPER_PAGE))}) 

server.get("/hamilton",(req, res)=>{
    res.sendFile(path.join(__dirname, HAMILTON_PAGE))}) 

server.get("/lovelace",(req, res)=>{
    res.sendFile(path.join(__dirname, LOVELACE_PAGE))}) 

server.get("/index",(req, res)=>{
    res.sendFile(path.join(__dirname, INDEX_PAGE))}) 

server.get("/turing",(req, res)=>{
    res.sendFile(path.join(__dirname, TURING_PAGE))}) 







