const express = require('express');
// require("dotenv").config;
const bcrypt = require('bcrypt')
const signinPwdRouter = express.Router();
const signuptemplate  = require('../models/signupModel') 
const jwt = require('jsonwebtoken')


signinPwdRouter.post('/signinpwd',async(req, res)=>{
    const {loginEmail, password} = req.body;

    try{
        const existingUser = await signuptemplate.findOne({ loginEmail })
        if(!existingUser) {
            return res.status(404).json({ message : "User doesn't exist"})
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect){
            return res.status(400).json({ message: "Invalid credentials"})
        }

        const token = jwt.sign({ loginEmail: existingUser.loginEmail, id: existingUser._id}, "text", {expiresIn: 60*1000})
        res.status(200).json({  result: existingUser, token })   
    
    } catch(error){
        res.status(500).json({message : "Something went wrong"})
        console.log(error);

    }
})

module.exports = signinPwdRouter;