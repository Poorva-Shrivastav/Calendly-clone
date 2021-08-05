const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(cors())


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
    let mailOptions = {
      from: process.env.EMAIL, // sender address
      to: `${req.body.mainEmail}`,// list of receivers
      subject: `New Event: ${req.body.name} - 10:15am Fri, 27 Aug 2021 - 15 Minute Meeting`, // Subject line
      text: `Hi ${req.body.name}, A new event has been scheduled.`, // plain text body
      html: "<b>Hello world</b>", // html body
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