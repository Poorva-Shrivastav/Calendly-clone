import React from 'react'
import './MeetingConfirmation.css'
import Moment from 'react-moment'
import { useHistory } from 'react-router'

function MeetingConfirmation({receiverName, newDate, timeSlot }) {
    const history = useHistory();
    const goBackToHomeHandler = () => {
        let path = `/user`
        history.push(path)    
    }

    console.log({timeSlot});
    return (
        // <div>
            <div className="outerdiv-meetingConf">
                <div className="sub-container-meetingConf">
                    <div className="upper-div-meetingConf">
                        <h3 id="h3-meetingConf">Confirmed</h3>
                        <p id="p-meetingConf">You are scheduled with {receiverName}</p>
                    </div>                    
                    <div className="lower-div-meetingConf">
                        {/* <h4 id="event-string-h4-meetingConf">🟡 15 Minute Meeting</h4> */}
                        {/* <p id="event-string-p-meetingConf">🗓️ 9:30am - 9:45am, Friday, July 30, 2021</p> */}
                        {/* <p id="event-string-p-meetingConf">🗓️ {timeSlot}, <Moment format="MMM DD YYYY" date={newDate} /></p> */}
                        {/* <p id="time-zone-meetingConf">🌎 India Standard Time</p> */}
                        
                        <h5 id="event-string-h5-meetingConf">A calendar invitation has been sent to your email address.</h5>

                        <button id="back-link-p-meetingConf" onClick={goBackToHomeHandler}>Go Back to Home Page</button>
                    </div>
                </div>
            </div>
      
        // </div>
        )
}

export default MeetingConfirmation
