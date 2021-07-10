const express = require("express");
const verifyAuth = express.Router();
const User = require("../models/user.model");
const {registerUser,loginUser,getAllUsers} = require("../controllers/verifyAuth.controller");

verifyAuth.post("/register",registerUser);
verifyAuth.post("/login",loginUser);
verifyAuth.get("/users",getAllUsers);

module.exports = { verifyAuth } ;