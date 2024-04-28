import React, { useState, useEffect } from "react";
import "./Event.css";
import { useHistory } from "react-router-dom";
import Share from "../Share/Share";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Event({ time }) {
  const [showShare, setShowShare] = useState(false);
  const [textCopied, setTextCopied] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const history = useHistory();

  const bookingHandler = () => {
    let path = `user/${time}`;
    history.push(path);
  };

  const shareHandler = () => {
    setShowShare(true);
  };
  const textCopyHandler = () => setTextCopied(true);

  useEffect(() => {
    const data1 = JSON.parse(sessionStorage.getItem("userEmail"));
    const finalEmail = data1.replace(/@.*$/, "");
    setUserEmail(finalEmail);
  });

  let url = `https://calendlyclone.netlify.app/user=${userEmail}/15`;

  return (
    <div className="min-meeting">
      <div className="checkbox-div">
        {/* <input type="checkbox"/>
            ⚙️ */}
      </div>

      <h2 id="h2-tag-event">{time} Minute Meeting</h2>
      <p id="p-tag-event">{time} min, One-on-One</p>
      <button class="button-event-noBorder" onClick={bookingHandler}>
        View booking page
      </button>
      <div class="lower-container">
        <span
          className={textCopied ? "event-copylink-colorChange" : "display-none"}
        >
          Copied
        </span>
        <CopyToClipboard text={url}>
          <button
            className={textCopied ? "display-none" : "button-event-noBorder"}
            onClick={textCopyHandler}
          >
            📄 Copy link
          </button>
        </CopyToClipboard>
        <button id="button-tag-event" onClick={shareHandler}>
          Share
        </button>
        {showShare && <Share closeShare={setShowShare} userEmail={userEmail} />}
      </div>
    </div>
  );
}

export default Event;
