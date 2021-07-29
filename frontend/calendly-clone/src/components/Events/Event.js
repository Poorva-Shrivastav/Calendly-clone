import React from 'react'
import './Event.css'

function Event({time}) {
    return (
        <div className="min-meeting">
            <div className="checkbox-div">
            <input type="checkbox"/>
            ⚙️
            </div>
            <h2 id="h2-tag-event">{time} Minute Meeting</h2>
            <p id="p-tag-event">{time} min, One-on-One</p>
            <a class="a-event" href="/signin/user/15min">View booking page</a>
            <div class="lower-container">
                <a class="a-event" href="/signin/user/15min">📄 Copy link</a>
                <button id="button-tag-event">Share</button>
            </div>
        </div>
    )
}

export default Event
