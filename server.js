//exercicio de nodejs, todo list utilizando o express
//server.js

const express = require('express');
const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");

const server = express();

server.use(express.json());

server.use(userRouter); 
server.use(taskRouter);

module.exports = server;