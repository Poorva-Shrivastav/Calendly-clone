const express = require('express');
const bcrypt = require('bcrypt')
const googleloginRouter = express.Router();
const signuptemplate  = require('../models/signupModel') 
// const jwt = require('jsonwebtoken')
let bodyParser = require('body-parser');
// const auth = require('../middlewares/middleware')

const { google } = require('googleapis') 
const { OAuth2 } = google.auth

const OAuth2Client = new OAuth2(
                    process.env.OAUTH_CLIENTID, 
                    // process.env.OAUTH_CLIENT_SECRET
                    )



googleloginRouter.use(bodyParser.json())

googleloginRouter.post('/googlelogin',async(req, res)=>{
    const {tokenId} = req.body;

   OAuth2Client.verifyIdToken({idToken: tokenId, 
                                audience:process.env.OAUTH_CLIENTID})
                            .then(res =>{
                                const{email_verified, name, email} = res.payload;
                                if(email_verified){
                                    User.findOne({email}).exec((err, user) => {
                                        if(err){
                                            return res.status(404).json({
                                                error: "Something went wrong"
                                            })
                                        }
                                        else{
                                            if(user){ //user exits in db
                                                console.log("learn from old course")
                                            }
                                            else{ //user doesn't exits in db
                                                let newUser = 
                                            }
                                        }
                                    })
                                }
                                console.log(res.payload);
                            })       
   

})

module.exports = googleloginRouter;