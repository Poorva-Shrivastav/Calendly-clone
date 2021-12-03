const express = require('express');
const mongoose = require('mongoose')
const nodemailer = require('nodemailer');
const app = express();
let cors = require("cors");
require("dotenv").config();
const signupUrls = require('./routes/signupRoute')
const signinUrls = require('./routes/signinRoute')
const signinPwdUrls = require('./routes/signinPasswordRoute')
const googleloginUrls = require('./routes/auth')
const moment = require('moment')
const dbURI = process.env.DATABASE_ACCESS

app.use(express.json()) //activates bodyparser in the application
app.use(express.urlencoded({ extended: false }));
mongoose.connect(dbURI)
    .then(console.log("Database Connected"))


// app.use(cors({
//       // origin:'https://calendlyclone.netlify.app'
//       origin:"*", 
// }));


// app.options('*', cors()); 

// app.use(cors({origin:true,credentials: true}));

app.use(cors({origin: new URL('https://calendlyclone.netlify.app'), credentials: true}));

/*
app.use((req,res,next)=>{
  res.setHeader("Acces-Control-Allow-Origin","*");
  res.setHeader('Acces-Control-Allow-Origin','https://calendlyclone.netlify.app', 'https://content.googleapis.com', 'https://www.googleapis.com')
  res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader("Acces-Contorl-Allow-Headers","Origin ,Content-Type, X-Content-Range, X-Token, Authorization, Accept");
  next(); 
})
*/

app.use('/api', signupUrls)
app.use('/api', signinUrls)
// app.use('/api', signinPwdUrls)
app.use('/api', googleloginUrls)

const { google } = require('googleapis') 
const { OAuth2 } = google.auth

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send("Hello from backend server of Calendly-Clone")
})

let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
      user: process.env.EMAIL,
      pass: process.env.WORD, 
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

app.post('/send', (req, res) => {
    // console.log(req.body)
    const emailDate = moment(`${req.body.newDate}`).format()
    // const incomingDate = (`${req.body.newDate}`).toISOString().split('T')[0];
    // const formattedDate = `${incomingDate}T$00:00:00-18:30` 
    // const emailDate = moment(formattedDate).format("ddd, MMM D YYYY");

    
    var mailOptions = {
    from: process.env.EMAIL, // sender address
    to: `${req.body.mainEmail}`,// list of receivers
    subject: `New Event: ${req.body.receiverName} - 15 Minute Meeting - ${emailDate}, ${req.body.timeSlot}`, 
    html:`<p> Hi ${req.body.receiverName},</p> 
          <p>A new event has been scheduled</p>
          <p>Event Type: 
          15 Minute Meeting</p>
          <p>Invitee: 
          ${req.body.userName}</p>
          <p>Invitee Email: 
          ${req.body.userEmail}</p>
          <p>Event Date/Time:
          ${req.body.timeSlot} - ${emailDate}</p>
          <p>Message, if any:
          ${req.body.message}</p>`
  };


  transporter.sendMail(mailOptions, (err, info) =>{
        if (err) {
          console.log("Error " + err);
        }else{
            console.log("Email sent " );
        }
      });

})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})