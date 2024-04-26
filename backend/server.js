const express = require("express");
// const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const app = express();
let cors = require("cors");
require("dotenv").config();
const signupUrls = require("./routes/signupRoute");
const signinUrls = require("./routes/signinRoute");
const signinPwdUrls = require("./routes/signinPasswordRoute");
const googleloginUrls = require("./routes/auth");
// const moment = require('moment')
var moment = require("moment-timezone");
const dbURI = process.env.DATABASE_ACCESS;

app.use(express.json()); //activates bodyparser in the application
app.use(express.urlencoded({ extended: false }));
// mongoose.connect(dbURI).then(console.log("Database Connected"));

// app.use(cors({
//       // origin:'https://calendlyclone.netlify.app'
//       origin:"*",
// }));

// app.options('*', cors());

// app.use(cors({origin:true,credentials: true}));

app.use(
  cors({
    // origin: new URL("https://calendlyclone.netlify.app"),
    origin: new URL("http://localhost:3000"),
    credentials: true,
  })
);

app.use("/api", signupUrls);
app.use("/api", signinUrls);
// app.use('/api', signinPwdUrls)
app.use("/api", googleloginUrls);

const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello from backend server of Calendly-Clone");
});

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    // refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

app.post("/send", (req, res) => {
  // console.log(req.body)
  // const emailDate = moment(`${req.body.newDate}`).format("ddd, MMM D YYYY");

  const incomingDate = `${req.body.newDate}`
    .toLocaleString("en-US", { timeZone: "Aisa/Kolkata" })
    .split("T")[0];
  const emailDate = moment(`${incomingDate}T24:00:00-00:00`).format(
    "ddd, MMM D YYYY"
  );

  console.log(req.body.mainEmail);

  var mailOptions = {
    from: process.env.EMAIL, // sender address
    to: `${req.body.mainEmail}`, // list of receivers
    subject: `New Event: ${req.body.receiverName} - 15 Minute Meeting - ${emailDate}, ${req.body.timeSlot}`,
    // <p>Invitee: ${req.body.userName}</p> <p>Invitee Email:${req.body.userEmail}</p>
    html: `<p> Hi ${req.body.receiverName},</p> 
          <p>A new event has been scheduled</p>
          <p>Event Type: 
          15 Minute Meeting</p>
          <p>Invitee:          
          Poorva Shrivastav
          </p>
          <p>Invitee Email:
          poorva024@gmail.com
          </p>
          <p>Event Date/Time:
          ${req.body.timeSlot} - ${emailDate}</p>
          <p>Message, if any:
          ${req.body.message}</p>`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent ");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
