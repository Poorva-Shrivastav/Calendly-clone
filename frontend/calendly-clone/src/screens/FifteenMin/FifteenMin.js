import React,{useState} from 'react'
import CalendarReact from './Calendar/CalendarReact'
import SelectedDate from './SelectedDate/SelectedDate'
import './FifteenMin.css'
import TimeBar from './TimeBar/TimeBar'
import { useHistory} from "react-router";
// import Calendar from 'react-calendar'

function FifteenMin({time, selectedDate}) {
    const [date, setDate] = useState(new Date())
    
    const history = useHistory();

    const backHandler = () =>{
        let path = `/user`
        history.push(path)    
    }

    return (
        <div class="outermost-date-container">
        <div class="main-date-container">
            <div class="left-container-15">
                <button className="back-button-15" onClick={backHandler}>⬅</button>
                <TimeBar time={15}/>
            </div>

            <div class="right-container-15">
                <div>
                    <h2 id="bottom-h2-date">Select a Date & Time</h2>
                    <CalendarReact selectedDate={selectedDate}/>
                    <div class="timezone">
                    {/* Time Zone - Yet to fix */}
                    </div>
                </div>
            </div>


        </div>
        </div>
    )
}

export default FifteenMin
