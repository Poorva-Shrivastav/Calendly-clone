const express = require('express');
const mongoose = require('mongoose')
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
require("dotenv").config();
const signupUrls = require('./routes/signupRoute')
const signinUrls = require('./routes/signinRoute')
const signinPwdUrls = require('./routes/signinPasswordRoute')
const googleloginUrls = require('./routes/auth')

const dbURI = process.env.DATABASE_ACCESS

mongoose.connect(dbURI)
    .then(console.log("Database Connected"))
    //  .catch(error => {console.log(error)})

app.use(express.json()) //activates bodyparser in the application
app.use(cors());

app.use('/api', signupUrls)
app.use('/api', signinUrls)
app.use('/api', signinPwdUrls)
app.use('/api', googleloginUrls)

const { google } = require('googleapis') 
const { OAuth2 } = google.auth

const PORT = process.env.PORT || 8000;

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: process.env.EMAIL,
      pass: process.env.WORD, 
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});


app.post('/send', (req, res) => {
  console.log(req.body)
  let mailOptions = {
    from: process.env.EMAIL, // sender address
    to: `${req.body.mainEmail}`,// list of receivers
    subject: `New Event: ${req.body.receiverName} - ${req.body.timeSlot}, ${req.body.newDate} - 15 Minute Meeting`, // Subject line
    html:`<p> Hi ${req.body.receiverName},</p> 
          <p>A new event has been scheduled</p>
          <p>Event Type: 
          15 Minute Meeting</p>
          <p>Invitee: 
          Poorva</p>
          <p>Invitee Email: 
          poorva0305@gmail.com</p>
          <p>Event Date/Time:
          10:15am - Friday, 27 August 2021 (India Standard Time)</p>
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


// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.WORD, 
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//     },
//   });


//   app.post('/send', (req, res) => {
//     let mailOptions = {
//       from: process.env.EMAIL, // sender address
//       to: `${req.body.mainEmail}`,// list of receivers
//       subject: `New Event: ${req.body.name} - 10:15am Fri, 27 Aug 2021 - 15 Minute Meeting`, // Subject line
//       text: `Hi ${req.body.name}, A new event has been scheduled.`, // plain text body
//       html: "<b>Hello world</b>", // html body
//     };
  

//     transporter.sendMail(mailOptions, (err, info) =>{
//           if (err) {
//             console.log("Error " + err);
//           }else{
//               console.log("Email sent " );
//           }
//         });

//  })


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})