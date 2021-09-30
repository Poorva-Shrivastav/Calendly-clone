const express = require('express');
const bcrypt = require('bcrypt')
const googleloginRouter = express.Router();
const signuptemplate  = require('../models/signupModel') 
const jwt = require('jsonwebtoken')
let bodyParser = require('body-parser');


const { google } = require('googleapis'); 
const { OAuth2 } = google.auth

const OAuth2Client = new OAuth2(
                    process.env.OAUTH_CLIENTID, 
                    process.env.OAUTH_CLIENT_SECRET
                    )


googleloginRouter.use(bodyParser.json())

googleloginRouter.post('/googlelogin',async(request, response)=>{
    const {tokenId} = request.body;

   OAuth2Client.verifyIdToken({idToken: tokenId, 
                                audience:process.env.OAUTH_CLIENTID})
                            .then(response =>{
                                const{email_verified, name, email, at_hash} = response.payload;
                                if(email_verified){
                                    // const existingUser = signuptemplate.findOne({email})
                                    // if(existingUser){
                                    //     return response.json({ message : "User already exists"})
                                    // }
                                    signuptemplate.findOne({email})
                                        .then((user) => {
                                            if(user){
                                                response.status(200).json({user}) 
                                            }
                                            else{                                            
                                                const newUser = new signuptemplate({name: name, email: email, password: at_hash}) 
                                                newUser.save()
                                                .then((data) => {
                                                    const token = jwt.sign({email: data.email, id: data._id}, "text", {expiresIn: 60*1000})
                                                    response.status(200).json({data, token})                                    
                                                    console.log("new User payload: ", response.payload);
                                                })
                                            }
                                        })
                                        .catch(err => {console.log(err)})                            
                                        }
                                    })
                            
                            // })       
   

})

module.exports = googleloginRouter;

