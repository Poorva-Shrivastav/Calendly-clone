import React, {useState} from 'react'
import CalendarReact from '../Calendar/CalendarReact'
import TimeBar from '../TimeBar/TimeBar'
import { useHistory } from 'react-router'

// import TimeRange from 'react-time-range';
// import moment from 'moment';

import './SelectedDate.css'

function SelectedDate({selectedDate}) {
    const [timeSetter, SettimeSetter] = useState('')
    const [clicked, setClicked] = useState(false)

    const history = useHistory();
    const meetingScheduleHandler = () => {
        let path = `/signin/user/15min/date/meeting`
        history.push(path)
    
    }
    return (
        <div>
            <div className="outerdiv-selectedDate">
                <div className="left-container-selectedDate">
                    <TimeBar />
                </div>

                <div className="right-container-selectedDate">
                    <div>
                        <h2 id="bottom-h2-date">Select a Date & Time</h2>
                        <CalendarReact/>
                        <div className="timezone">
                            Time Zone - Yet to fix
                        </div>
                    </div>
                </div>
                <div className="rightmost-popup-selectedDate">
                    <div>
                        <div className="selected-date">
                            <p>Selected date - {selectedDate}</p>
                        </div>
                        <div 
                            className="button-container" 
                            onClick={(e) => setClicked(e.target.value)}
                        >
                            <div>
                                <button className={clicked == '9' ? 'newSetTime' : 'setTime'} value="9">9:00am</button>
                                <button className={clicked == '9'? 'available-onClick' : 'display-none'} value="9" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='9.15' ? 'newSetTime' : 'setTime'} value="9.15">9:15am</button>
                                <button className={clicked=='9.15' ? 'available-onClick' : 'display-none'} value="9.15" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='9.30' ? 'newSetTime' : 'setTime'} value="9.30">9:30am</button>
                                <button className={clicked=='9.30' ? 'available-onClick' : 'display-none'} value="9.30" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='9.45' ? 'newSetTime' : 'setTime'} value="9.45">9:45am</button>
                                <button className={clicked=='9.45' ? 'available-onClick' : 'display-none'} value="9.45" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button 
                                    className={clicked == '10' ? 'newSetTime' : 'setTime'} value="10">10:00am</button>
                                <button className={clicked == '10'? 'available-onClick' : 'display-none'} value="10" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='10.15' ? 'newSetTime' : 'setTime'} value="10.15">10:15am</button>
                                <button className={clicked=='10.15' ? 'available-onClick' : 'display-none'} value="10.15" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='10.30' ? 'newSetTime' : 'setTime'} value="10.30">10:30am</button>
                                <button className={clicked=='10.30' ? 'available-onClick' : 'display-none'} value="10.30" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='10.45' ? 'newSetTime' : 'setTime'} value="10.45">10:45am</button>
                                <button className={clicked=='10.45' ? 'available-onClick' : 'display-none'} value="10.45" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button 
                                    className={clicked == '1' ? 'newSetTime' : 'setTime'} value="11">10:00am</button>
                                <button className={clicked == '11'? 'available-onClick' : 'display-none'} value="11" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='11.15' ? 'newSetTime' : 'setTime'} value="11.15">11:15am</button>
                                <button className={clicked=='11.15' ? 'available-onClick' : 'display-none'} value="11.15" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='11.30' ? 'newSetTime' : 'setTime'} value="11.30">11:30am</button>
                                <button className={clicked=='11.30' ? 'available-onClick' : 'display-none'} value="11.30" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='11.45' ? 'newSetTime' : 'setTime'} value="11.45">11:45am</button>
                                <button className={clicked=='11.45' ? 'available-onClick' : 'display-none'} value="11.45" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button 
                                    className={clicked == '12' ? 'newSetTime' : 'setTime'} value="12">12:00pm</button>
                                <button className={clicked == '12'? 'available-onClick' : 'display-none'} value="12" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='12.15' ? 'newSetTime' : 'setTime'} value="12.15">12:15pm</button>
                                <button className={clicked=='12.15' ? 'available-onClick' : 'display-none'} value="12.15" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='12.30' ? 'newSetTime' : 'setTime'} value="12.30">12:30pm</button>
                                <button className={clicked=='12.30' ? 'available-onClick' : 'display-none'} value="12.30" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='12.45' ? 'newSetTime' : 'setTime'} value="12.45">12:45pm</button>
                                <button className={clicked=='12.45' ? 'available-onClick' : 'display-none'} value="12.45" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button 
                                    className={clicked == '1' ? 'newSetTime' : 'setTime'} value="1">1:00pm</button>
                                <button className={clicked == '1'? 'available-onClick' : 'display-none'} value="1" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='1.15' ? 'newSetTime' : 'setTime'} value="1.15">1:15pm</button>
                                <button className={clicked=='1.15' ? 'available-onClick' : 'display-none'} value="1.15" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='1.30' ? 'newSetTime' : 'setTime'} value="1.30">1:30pm</button>
                                <button className={clicked=='1.30' ? 'available-onClick' : 'display-none'} value="1.30" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='1.45' ? 'newSetTime' : 'setTime'} value="1.45">1:45pm</button>
                                <button className={clicked=='1.45' ? 'available-onClick' : 'display-none'} value="1.45" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button 
                                    className={clicked == '2' ? 'newSetTime' : 'setTime'} value="2">2:00pm</button>
                                <button className={clicked == '2'? 'available-onClick' : 'display-none'} value="2" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='2.15' ? 'newSetTime' : 'setTime'} value="2.15">2:15pm</button>
                                <button className={clicked=='2.15' ? 'available-onClick' : 'display-none'} value="2.15" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='2.30' ? 'newSetTime' : 'setTime'} value="2.30">2:30pm</button>
                                <button className={clicked=='2.30' ? 'available-onClick' : 'display-none'} value="2.30" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='2.45' ? 'newSetTime' : 'setTime'} value="2.45">2:45pm</button>
                                <button className={clicked=='2.45' ? 'available-onClick' : 'display-none'} value="2.45" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button 
                                    className={clicked == '3' ? 'newSetTime' : 'setTime'} value="3">3:00pm</button>
                                <button className={clicked == '3'? 'available-onClick' : 'display-none'} value="3" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>

                            <div>
                                <button className={clicked=='3.15' ? 'newSetTime' : 'setTime'} value="3.15">3:15pm</button>
                                <button className={clicked=='3.15' ? 'available-onClick' : 'display-none'} value="3.15" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='3.30' ? 'newSetTime' : 'setTime'} value="3.30">3:30pm</button>
                                <button className={clicked=='3.30' ? 'available-onClick' : 'display-none'} value="3.30" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='3.45' ? 'newSetTime' : 'setTime'} value="3.45">3:45pm</button>
                                <button className={clicked=='3.45' ? 'available-onClick' : 'display-none'} value="3.45" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button 
                                    className={clicked == '4' ? 'newSetTime' : 'setTime'} value="4">4:00pm</button>
                                <button className={clicked == '4'? 'available-onClick' : 'display-none'} value="4" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>

                            <div>
                                <button className={clicked=='4.15' ? 'newSetTime' : 'setTime'} value="4.15">4:15pm</button>
                                <button className={clicked=='4.15' ? 'available-onClick' : 'display-none'} value="4.15" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='4.30' ? 'newSetTime' : 'setTime'} value="4.30">4:30pm</button>
                                <button className={clicked=='4.30' ? 'available-onClick' : 'display-none'} value="4.30" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                            <div>
                                <button className={clicked=='4.45' ? 'newSetTime' : 'setTime'} value="4.45">4:45pm</button>
                                <button className={clicked=='4.45' ? 'available-onClick' : 'display-none'} value="4.45" onClick={meetingScheduleHandler}>Confirm</button>
                            </div>
                        
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedDate
