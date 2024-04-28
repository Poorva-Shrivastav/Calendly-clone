import React, { useState, useEffect } from "react";
import TimeBar from "../FifteenMin/TimeBar/TimeBar";
import "./MeetingScheduler.css";
import { useHistory, useParams } from "react-router";
import validator from "validator";
// import CalendarGoogle from '../../calendarGoogleApi/CalendarGoogle'
import { useLocation } from "react-router-dom";
import Moment from "react-moment";

// import TimeSlotContext from '../../App'

function MeetingScheduler({
  newDate,
  timeSlot,
  start,
  end,
  setReceiverName,
  receiverName,
}) {
  const [addGuests, setAddGuests] = useState(false);
  // const [name, setName] = useState('')
  const [mainEmail, setMainEmail] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmptyName, setIsEmptyName] = useState(false);
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [emailList, setEmailList] = useState([]);
  const [isEditEmail, setIsEditEmail] = useState(null);
  const [toggleUpdated, setToggleUpdated] = useState(true);
  const [emailError, setEmailError] = useState("");

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const { time } = useParams();
  const history = useHistory();
  const backHandler = () => {
    let path = `/user/15min/date`;
    history.push(path);
  };

  const emailChangeHandler = (e) => setMainEmail(e.target.value);

  const messageChangeHandler = (e) => setMessage(e.target.value);

  const inputHandler = (e) => setEmail(e.target.value);

  const addEmailHandler = () => {
    if (email && !toggleUpdated) {
      setEmailList(
        emailList.map((ele) => {
          if (ele.id === isEditEmail) {
            return { ...ele, name: email };
          }
          return ele;
        })
      );
      setToggleUpdated(true);

      setEmail("");

      setIsEditEmail(null);
    } else if (emailList.length > 9) {
      alert("Cannot send email to more than 10 people at a time");
    } else if (email !== "") {
      //&& !emailList.includes(email)
      const emailData = {
        id: new Date().getTime().toString(),
        email: email,
      };

      setEmailList([...emailList, emailData]);

      if (validator.isEmail(email)) {
        setEmailError("Valid Email :)");
      } else {
        setEmailError("Enter valid Email!");
      }

      setEmail("");
    }
  };

  const editEmail = (id) => {
    let newEditedEmail = emailList.find((ele) => {
      return ele.id === id;
    });

    setToggleUpdated(false);
    setEmail(newEditedEmail.email);
    setIsEditEmail(id);
  };

  const deleteHandler = (index) => {
    const newEmailLst = emailList.filter((ele) => {
      return index !== ele.id;
    });
    setEmailList(newEmailLst);
  };

  const formattedDate = newDate.toISOString().split("T")[0];
  const startTime = `${formattedDate}T${start}:00-18:30`;
  const endTime = `${formattedDate}T${end}:00-18:30`;

  var gapi = window.gapi;
  var CLIENT_ID =
    "1051195399308-odlc2nv9r2ml1ud7rro852lc1uj49mpi.apps.googleusercontent.com";
  var API_KEY = "AIzaSyBwoqrDjr3840k7PTkQbcyK-u107c7TuNM";
  var DISCOVERY_DOCS =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const submitHandler = async (e) => {
    e.preventDefault();
    if (receiverName == "") {
      setReceiverName(true);
    } else if (mainEmail == "") {
      setIsEmptyEmail(true);
    } else if (receiverName !== "" && mainEmail !== "") {
      let path = `/user/15min/date/meeting-confirmation`;

      gapi.load("client: auth2", () => {
        console.log("loaded client");

        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [DISCOVERY_DOCS],
          scope: SCOPES,
        });

        gapi.client.load("calendar", "v3", () =>
          console.log("Calendar logged")
        );

        gapi.auth2
          .getAuthInstance()
          .signIn()
          .then(() => {
            console.log("Signed In");

            var event = {
              summary: `Meeting - Poorva Shrivastav and ${receiverName} `,
              description: `${mainEmail}`,
              start: {
                dateTime: `${startTime}`,
                timeZone: "Asia/Kolkata",
              },
              end: {
                dateTime: `${endTime}`,
                timeZone: "Asia/Kolkata",
              },

              attendees: [
                { email: `${mainEmail}` },
                { email: `poorva024@gmail.com` },
              ],
              reminders: {
                useDefault: false,
                overrides: [
                  { method: "email", minutes: 24 * 60 },
                  { method: "popup", minutes: 10 },
                ],
              },
            };

            var request = gapi.client.calendar.events.insert({
              calendarId: "primary",
              resource: event,
              sendUpdates: "all",
            });

            request.execute((event) => {
              window.open(event.htmlLink);
              console.log("Calendar event created");
              history.push(path);
            });
          });
      });

      // const response = await fetch("http://localhost:8000/send", {
      const response = await fetch(
        "https://calendly-backend-xd7d.onrender.com/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/json;charset=utf-8"
          },
          // mode: 'no-cors',
          credentials: "same-origin",
          body: JSON.stringify({
            receiverName,
            mainEmail,
            message,
            timeSlot,
            newDate,
          }), //userName, userEmail
        }
      )
        .then((res) => res.json())
        .then(async (res) => {
          const resData = res;
          if (resData.status === "success") {
            alert("email sent");
            setIsEmptyName(false);
            setIsEmptyEmail(false);
          } else if (resData.status === "fail") {
            alert("Email sending failed");
          }
        })
        .then(() => {
          setReceiverName("");
          setEmail("");
          setMessage("");
          setEmailList("");
          setUserName("");
          setUserEmail("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div className="outerdiv-meeting">
        <div className="left-container-meeting">
          <button className="back-button" onClick={backHandler}>
            ⬅
          </button>
          <TimeBar time={15} />
          {/* <p id="event-string-p">🗓️ 9:00am - 9:15am, Friday, July 30, 2021</p> */}
          <p id="event-string-p" name="timeslot">
            🗓️ {timeSlot}, <Moment format="MMM DD YYYY" date={newDate} />{" "}
          </p>
          <p id="time-zone">🌎 India Standard Time</p>
        </div>

        <form
          method="POST"
          onSubmit={submitHandler}
          className="right-container-meeting"
        >
          <div>
            <p class="meetingp">Enter Details</p>
            <div className="input-container-meeting">
              <label className="meeting-label">Name *</label>
              <input
                className={
                  isEmptyName ? "input-meeting-error" : "input-meeting"
                }
                value={receiverName}
                name="receiverName"
                onChange={setReceiverName}
              ></input>
              <div
                className={
                  isEmptyName ? "input-meeting-error-hidden" : "display-none"
                }
              >
                Can't be blank.
              </div>
            </div>
            <div className="input-container-meeting">
              <label className="meeting-label">Email *</label>
              <input
                className={
                  isEmptyEmail ? "input-meeting-error" : "input-meeting"
                }
                type="email"
                value={mainEmail}
                name="mainEmail"
                onChange={emailChangeHandler}
              ></input>
              <div
                className={
                  isEmptyEmail ? "input-meeting-error-hidden" : "display-none"
                }
              >
                Can't be blank.
              </div>
            </div>
            <button
              className={addGuests ? "display-none" : "add-guest-meeting"}
              // onClick = {(e) => setAddGuests(e.target)}
            >
              Add Guests
            </button>

            <div>
              <label className={addGuests ? "meeting-label" : "display-none"}>
                Guest Email(s)
              </label>
              <div
                type="button"
                className={
                  addGuests ? "textarea-meeting-hidden" : "display-none"
                }
              >
                <div className="invitee-list-container">
                  {emailList.map((item) => {
                    return (
                      <div
                        // className={validator.isEmail(email) ?  "error-list-meeting" : "email-delete-container"  }
                        className="email-delete-container"
                        key={item.id}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "red",
                          }}
                        >
                          {emailError}
                        </span>
                        <div
                          className="list-meeting"
                          type="text"
                          onClick={() => editEmail(item.id)}
                          value={item.name}
                        >
                          {item.name}
                        </div>
                        <button
                          className="delete-button-meeting"
                          onClick={() => deleteHandler(item.id)}
                        >
                          X
                        </button>
                      </div>
                    );
                  })}
                </div>

                <input
                  className="guestList-invitee-input"
                  id={email}
                  type={email}
                  autoComplete="off"
                  spellCheck="false"
                  value={email}
                  onChange={inputHandler}
                  // onChange={isEditEmail ? inputHandler : null}
                  onKeyPress={(e) =>
                    e.key === "Enter" ? addEmailHandler(e) : ""
                  }
                />
              </div>
              <p className={addGuests ? "p-meeting" : "display-none"}>
                Notify up to 10 additional guests of the scheduled event.
              </p>
            </div>
            <div>
              <label className="meeting-label">
                Please share anything that will help prepare for our meeting.
              </label>
              <textarea
                className="textarea-meeting"
                value={message}
                onChange={messageChangeHandler}
                placeholder="❗️Please note, you might not be able to book your calendar as Google calendar API is a sensitive API, and this product is under testing. If you would like to test the product, please write a note to poorva024@gmail.com. Thank you."
              ></textarea>

              <div>
                <p className="display-none" name="timeslot">
                  🗓️ {timeSlot}, <Moment format="MMM DD YYYY" date={newDate} />{" "}
                </p>

                <input
                  className="display-none"
                  type="text"
                  value={userName}
                  name="userName"
                ></input>
                <input
                  className="display-none"
                  type="text"
                  value={userEmail}
                  name="userEmail"
                ></input>
              </div>
              <button
                type="submit"
                value="Submit"
                className="schedule-event-button"
                onClick={submitHandler}
              >
                Schedule Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MeetingScheduler;
