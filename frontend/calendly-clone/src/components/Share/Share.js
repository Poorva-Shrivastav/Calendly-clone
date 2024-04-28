import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Share.css";

function Share({ showShare, closeShare, userEmail }) {
  const [textCopied, setTextCopied] = useState(false);

  const textCopyHandler = () => setTextCopied(true);
  let url = `https://calendlyclone.netlify.app/user=${userEmail}/15`;

  return (
    <div className="outermost-div-share">
      <div className="outer-div-share">
        <div className="content-div-share">
          <h4 id="share-title">{} 15 Minute Meeting</h4>
          <p id="share-timeclock">🕒 {} 15 min</p>
          <div className="border-inner-share"></div>
          <p id="share-a-link">Share a link</p>
          <div class="inner-div-share">
            <p>Copy and paste your scheduling link into a message</p>

            <div id="url-to-share">{url}</div>
            <div className="lower-div-share">
              <button id="share-close-button" onClick={() => closeShare(false)}>
                Close
              </button>
              <span
                className={
                  textCopied ? "share-copylink-colorChange" : "display-none"
                }
              >
                Copied
              </span>
              <CopyToClipboard text={url}>
                <button
                  className={textCopied ? "display-none" : "share-copylink"}
                  onClick={textCopyHandler}
                >
                  Copy Link
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
