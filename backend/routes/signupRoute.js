const express = require('express');
const signupRouter = express.Router();
const signuptemplate  = require('../models/signupModel') 
const bcrypt = require('bcrypt'); //for encrypting the password
const jwt = require('jsonwebtoken')

signupRouter.post('/signup', async (request, response) =>{
    const {name, email, password} = request.body;
    
     try{
        const existingUser = await signuptemplate.findOne({ name })
        if(existingUser) return response.status(400).json({ message : "Name already in use. Try another name"})

        const existingEmail = await signuptemplate.findOne({ email })
        if(existingEmail) return response.status(400).json({ message : "User already exists"})

        // if(password.length < 8) return response.status(400).json({ message : "Password doesn't match the criteria"})

        const saltPassword = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(request.body.password, saltPassword)

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await signuptemplate.create({name, email, password: hashedPassword})
    
        const token = jwt.sign({ email: result.email, id: result._id}, "text", {expiresIn: 60*1000})

        response.status(200).json({result, token})
        response.status(200).json({result})

    }catch(error){
        console.log(error)
        response.status(500).json({message : "Something went wrong"})        
    }    
})



module.exports = signupRouter;