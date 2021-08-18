import React from 'react'
import './Event.css'
import {useHistory} from 'react-router-dom'

function Event({time}) {

    const history = useHistory();
    
    const bookingHandler = () =>{
        let path = `user/${time}`
        history.push(path)
    }

    return (
        <div className="min-meeting">   
            <div className="checkbox-div">
            <input type="checkbox"/>
            ⚙️
            </div>
            
            <h2 id="h2-tag-event">{time} Minute Meeting</h2>
            <p id="p-tag-event">{time} min, One-on-One</p>
            <button class="button-event-noBorder" onClick={bookingHandler}>View booking page</button>
            <div class="lower-container">
                <button class="button-event-noBorder" onClick={bookingHandler}>📄 Copy link</button>
                <button id="button-tag-event">Share</button>
                
            </div>
        </div>
    )
}

export default Event
