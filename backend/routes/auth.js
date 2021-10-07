const express = require('express');
const bcrypt = require('bcrypt')
const googleloginRouter = express.Router();
const signuptemplate  = require('../models/signupModel') 
const jwt = require('jsonwebtoken')
// let bodyParser = require('body-parser');

const { google } = require('googleapis'); 
const { OAuth2 } = google.auth

const OAuth2Client = new OAuth2(
                    process.env.OAUTH_CLIENTID, 
                    process.env.OAUTH_CLIENT_SECRET
                    )

googleloginRouter.use(express.json())

googleloginRouter.post('/googlelogin',(req, res)=>{
    const {tokenId} = req.body;
   OAuth2Client.verifyIdToken({idToken: tokenId, audience:process.env.OAUTH_CLIENTID})
    .then(response => {        
        const{email_verified, name, email, at_hash} = response.payload;
            if(email_verified){                               
                signuptemplate.findOne({email}).exec((err, user) => {
                        if(err){return res.status(404).json({error: "Something went wrong"})}
                        else{
                            if(user){
                                const token = jwt.sign({email: user.email, _id: user._id}, "text", {expiresIn: 60*1000})
                                const {_id, name, email, password} = user
                                res.json({token, user: {_id, name, email, password}})
                                console.log("User already exists")
                            }   
                            else{
                                const password = email+process.env.API_KEY
                                const newUser = new signuptemplate({name, email, password}) 
                                                newUser.save((err, data) => {
                                                    if(err) {return response.status(404).json({err: "Something went wrong"})}

                                                    const token = jwt.sign({email: data.email, id: data._id}, "text", {expiresIn: 60*1000})
                                                    res.status(200).json({data, token})                                    
                                                    console.log("new User payload: ", response.payload);
                                                })
                                                
                            }
                        }
                    }
                )}                                                
            })       
})

module.exports = googleloginRouter;

