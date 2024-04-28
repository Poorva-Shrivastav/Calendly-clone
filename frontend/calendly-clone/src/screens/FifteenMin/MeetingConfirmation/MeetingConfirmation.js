import React from "react";
import "./MeetingConfirmation.css";
import { useHistory } from "react-router";

function MeetingConfirmation({ receiverName, newDate, timeSlot, setNewDate }) {
  const history = useHistory();
  const goBackToHomeHandler = () => {
    let path = `/user`;
    setNewDate(new Date());
    sessionStorage.getItem("userName") ? history.push(path) : history.push("/");
  };

  return (
    // <div>
    <div className="outerdiv-meetingConf">
      <div className="sub-container-meetingConf">
        <div className="upper-div-meetingConf">
          <h3 id="h3-meetingConf">Confirmed</h3>
          {/* <p id="p-meetingConf">You are scheduled with {receiverName}</p> */}
          <p id="p-meetingConf">
            The meeting is scheduled for Poorva Shrivastav and {receiverName}
          </p>
        </div>
        <div className="lower-div-meetingConf">
          <h5 id="event-string-h5-meetingConf">
            A calendar invitation has been sent to your email address.
          </h5>

          <button id="back-link-p-meetingConf" onClick={goBackToHomeHandler}>
            Go Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeetingConfirmation;
