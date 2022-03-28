const express = require("express");

const todoControllers = require("./controllers/todo.control.js");
const {register,login}=require("./controllers/auth.control.js");
const app = express();

app.use(express.json());
app.post("/register",register)
app.post("/login",login)
app.use("/todos", todoControllers);

module.exports = app;
