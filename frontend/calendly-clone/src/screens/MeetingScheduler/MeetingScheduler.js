import React from 'react'
import TimeBar from '../FifteenMin/TimeBar/TimeBar'
import'./MeetingScheduler.css'
import { useHistory } from 'react-router'

function MeetingScheduler() {

    const history = useHistory();
    const backHandler = () =>{
        let path = `/signin/user/15min/date`
        history.push(path)
        
    }
    return (
        <div>
             <div className="outerdiv-selectedDate">
                <div className="left-container-selectedDate">
                    <button className="back-button" onClick={backHandler}>⬅</button>
                    <TimeBar />
                    <p id="event-string-p">🗓️ 9:30am - 9:45am, Friday, July 30, 2021</p>
                    <p id="time-zone">🌎 India Standard Time</p>

                </div>

                <div className="right-container-selectedDate">
                    <div>
                        <p class="meetingp">Enter Details</p>
                        <div className="input-container-meeting">
                            <label className="meeting-label">Name *</label>
                            <input className="input-meeting"></input>
                        </div>
                        <div className="input-container-meeting">
                            <label className="meeting-label">Email *</label>
                            <input className="input-meeting"></input>
                        </div>
                        
                            <button className="add-guest-meeting">Add Guests</button>
                        <div className="hidden">
                            <label className="meeting-label">Guest Email(s)</label>
                            <textarea className="textarea-meeting-hidden"></textarea>
                            <p id="p-meeting">Notify up to 10 additional guests of the scheduled event.</p>
                        </div>
                        <div>
                            <label className="meeting-label">Please share anything that will help prepare for our meeting.</label>
                            <textarea className="textarea-meeting"></textarea>
                            <button className="schedule-event-button">Schedule Event</button>
                        </div>
                    </div>
                </div>
        </div>
        </div >
    )
}

export default MeetingScheduler
