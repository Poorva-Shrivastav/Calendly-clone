import React, { useState, useContext } from "react";
import TimeBar from "../TimeBar/TimeBar";
import { useHistory, useParams } from "react-router";
import "./SelectedDate.css";
import "../Calendar/CalendarReact.css";
import Calendar from "react-calendar";
import Moment from 'react-moment'

function SelectedDate({ time, setNewDate, newDate, setTimeSlot, start, end }) {
  const [clicked, setClicked] = useState(false);

  // const dateToFormat = '2021-11-11';
    // const [date, setDate] = useState(new Date())
    const value = newDate

    const history = useHistory()
    const selectedDateSetHandler = (e) => {      
        let path = `/user/15min/date`;
        history.push(path);
    };

    console.log(newDate);
    
    const meetingScheduleHandler = (e) => {
      let path = `/user/15min/date/meeting`;  
      history.push(path)
    };

    const backHandler = () =>{
        let path = `/user/15min`
        setNewDate(new Date())
        history.push(path)    
    }

  return (
    <div>
      <div className="outerdiv-selectedDate">      
        <div className="left-container-selectedDate">
        <button className="back-button" onClick={backHandler}>⬅</button>
          <TimeBar time={15} />
        </div>

        <div className="right-container-selectedDate">
          <div>
            <h2 id="bottom-h2-date">Select a Date & Time</h2>
            <div>
            <Calendar 
                activeStartDate={newDate}
                selectRange={false}
                minDate={newDate}
                onClickDay= {setNewDate} 
                onChange={selectedDateSetHandler}                 
            />           
            </div>
            <div className="timezone">
              {/* Time Zone - Yet to fix */}
            </div>
          </div>
        </div>
        <div className="rightmost-popup-selectedDate">
          <div>
            <div className="selected-date">
              {/* <p>{selectedDate}</p> */}
              <div id="momentDate-selectedDate">
                <Moment format="MMM DD YYYY" date={newDate} />
              </div>
            </div>
            <div
              className="button-container"
              onClick={(e) => setClicked(e.target.value)}
            >
              <div>
                <button className={clicked == "9" ? "newSetTime" : "setTime"} value="9" name="9:00am - 9:15am" data-start="9:00" data-end="9:15" onClick={setTimeSlot}>
                  9:00am
                </button>
                <button
                  className={
                    clicked == "9" ? "available-onClick" : "display-none"
                  }
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "9.15" ? "newSetTime" : "setTime"} value="9.15" name="9:15am - 9:30am" data-start="9:15" data-end="9:30" onClick={setTimeSlot}>
                  9:15am
                </button>
                <button
                  className={
                    clicked == "9.15" ? "available-onClick" : "display-none"
                  }
                  value="9.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "9.30" ? "newSetTime" : "setTime"} value="9.30" name="9:30am - 9.45am" data-start="9:30" data-end="9:45"onClick={setTimeSlot}>
                9:30am
                </button>
                <button
                  className={
                    clicked == "9.30" ? "available-onClick" : "display-none"
                  }
                  value="9.30"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "9.45" ? "newSetTime" : "setTime"} value="9.45" name="9.45am - 10.00am" data-start="9:45" data-end="10:00" onClick={setTimeSlot}>
                  9:45am
                </button>
                <button
                  className={
                    clicked == "9.45" ? "available-onClick" : "display-none"
                  }
                  value="9.45"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "10" ? "newSetTime" : "setTime"} value="10" name="10.00am - 10.15am" data-start="10:00" data-end="10:15"onClick={setTimeSlot}>
                10:00am
                </button>
                <button
                  className={
                    clicked == "10" ? "available-onClick" : "display-none"
                  }
                  value="10"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button 
                className={clicked == "10.15" ? "newSetTime" : "setTime"} value="10.15" name="10.15am - 10:30am" data-start="10:15" data-end="10:30" onClick={setTimeSlot}>
                  10:15am
                </button>
                <button
                  className={
                    clicked == "10.15" ? "available-onClick" : "display-none"
                  }
                  value="10.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "10.30" ? "newSetTime" : "setTime"} value="10.30" name="10.30am - 10:45am" data-start="10:30" data-end="10:45"onClick={setTimeSlot}>
                  10:30am
                </button>
                <button
                  className={
                    clicked == "10.30" ? "available-onClick" : "display-none"
                  }
                  value="10.30"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "10.45" ? "newSetTime" : "setTime"} value="10.45" name="10.45am - 11:00am" data-start="10:45" data-end="11:00" onClick={setTimeSlot}>
                  10:45am
                </button>
                <button
                  className={
                    clicked == "10.45" ? "available-onClick" : "display-none"
                  }
                  value="10.45"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "11" ? "newSetTime" : "setTime"} value="11" name="11.00am - 11:15am" data-start="11:00" data-end="11:15" onClick={setTimeSlot}>
                  11:00am
                </button>
                <button
                  className={
                    clicked == "11" ? "available-onClick" : "display-none"
                  }
                  value="11"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "11.15" ? "newSetTime" : "setTime"} value="11.15" name="11.15am - 11:30am" data-start="11:15" data-end="11:30" onClick={setTimeSlot}>
                 11:15am
                </button>
                <button
                  className={
                    clicked == "11.15" ? "available-onClick" : "display-none"
                  }
                  value="11.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "11.30" ? "newSetTime" : "setTime"} value="11:30" name="11.30am - 11:45am" data-start="11:30" data-end="11:45" onClick={setTimeSlot}>
                  11:30am
                </button>
                <button
                  className={
                    clicked == "11.30" ? "available-onClick" : "display-none"
                  }
                  value="11.30"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "11.45" ? "newSetTime" : "setTime"} value="11.45"name="11:45am - 12:00pm" data-start="11:45" data-end="12:00" onClick={setTimeSlot}>              
                  11:45am
                </button>
                <button
                  className={
                    clicked == "11.45" ? "available-onClick" : "display-none"
                  }
                  value="11.45"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "12" ? "newSetTime" : "setTime"} value="12" name="12.00 - 12:15" data-start="12:00" data-end="12:15" onClick={setTimeSlot}>
                12:00pm
                </button>
                <button
                  className={
                    clicked == "12" ? "available-onClick" : "display-none"
                  }
                  value="12"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "12.15" ? "newSetTime" : "setTime"} value="12.15"name="12.15p - 12:30" data-start="12:15" data-end="12:30" onClick={setTimeSlot}>
                  12:15pm
                </button>
                <button
                  className={
                    clicked == "12.15" ? "available-onClick" : "display-none"
                  }
                  value="12.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "12.30" ? "newSetTime" : "setTime"} value="12.30" name="12.30 - 12:45" data-start="12:30" data-end="12:45" onClick={setTimeSlot}>
                12:30pm
                </button>
                <button
                  className={
                    clicked == "12.30" ? "available-onClick" : "display-none"
                  }
                  value="12.30"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "12.45" ? "newSetTime" : "setTime"} value="12.45"name="12.45 - 13:00" data-start="12:45" data-end="13:00" onClick={setTimeSlot}>
                12:45pm
                </button>
                <button
                  className={
                    clicked == "12.45" ? "available-onClick" : "display-none"
                  }
                  value="12.45"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "13" ? "newSetTime" : "setTime"} value="13" name="13.00 - 13:15" data-start="13:00" data-end="13:15" onClick={setTimeSlot}>
                1:00pm
                </button>
                <button
                  className={
                    clicked == "1" ? "available-onClick" : "display-none"
                  }
                  value="13"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "13.15" ? "newSetTime" : "setTime"} value="13.15" name="13.15 - 13:30" data-start="13:15" data-end="13:30" onClick={setTimeSlot}>              
                  1:15pm
                </button>
                <button
                  className={
                    clicked == "13.15" ? "available-onClick" : "display-none"
                  }
                  value="13.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "13.30" ? "newSetTime" : "setTime"} value="13.30" name="13.30 - 13:45" data-start="13:30" data-end="13:45" onClick={setTimeSlot}>
                1:30pm
                </button>
                <button
                  className={
                    clicked == "13.30" ? "available-onClick" : "display-none"
                  }
                  value="13.30"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "13.45" ? "newSetTime" : "setTime"} value="13.45" name="13.45 - 14:00" data-start="13:45" data-end="14:00" onClick={setTimeSlot}>
                1:45pm
                </button>
                <button
                  className={
                    clicked == "13.45" ? "available-onClick" : "display-none"
                  }
                  value="13.45"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "14" ? "newSetTime" : "setTime"} value="14" name="14.00 - 14:15" data-start="14:00" data-end="14:15" onClick={setTimeSlot}>
                2:00pm
                </button>
                <button
                  className={
                    clicked == "14" ? "available-onClick" : "display-none"
                  }
                  value="14"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "14.15" ? "newSetTime" : "setTime"} value="14.15" name="14.15 - 14:30" data-start="14:15" data-end="14:30" onClick={setTimeSlot}>
                2:15pm
                </button>
                <button
                  className={
                    clicked == "14.15" ? "available-onClick" : "display-none"
                  }
                  value="14.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "14.30" ? "newSetTime" : "setTime"} value="14.30" name="14.30 - 14:45" data-start="14:30" data-end="14:45" onClick={setTimeSlot}>
                2:30pm
                </button>
                <button
                  className={
                    clicked == "14.30" ? "available-onClick" : "display-none"
                  }
                  value="14.30"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "14.45" ? "newSetTime" : "setTime"}value="14.45" name="14.45 - 14:00" data-start="14:45" data-end="15:00" onClick={setTimeSlot}>
                14:45pm
                </button>
                <button
                  className={
                    clicked == "14.45" ? "available-onClick" : "display-none"
                  }
                  value="14.45"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "3" ? "newSetTime" : "setTime"} value="15" name="15.00 - 15:15" data-start="15:00" data-end="15:15" onClick={setTimeSlot}>
                 3:00pm
                </button>
                <button
                  className={
                    clicked == "15" ? "available-onClick" : "display-none"
                  }
                  value="15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>

              <div>
                <button
                  className={clicked == "15.15" ? "newSetTime" : "setTime"} value="15.15"  name="15.15 - 15:30" data-start="15:15" data-end="15:30" onClick={setTimeSlot}>
                  3:15pm
                </button>
                <button
                  className={
                    clicked == "15.15" ? "available-onClick" : "display-none"
                  }
                  value="15.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "15.30" ? "newSetTime" : "setTime"} value="15.30" name="15.30 - 15:35" data-start="15:30" data-end="15:45" onClick={setTimeSlot}>
                3:30pm
                </button>
                <button
                  className={
                    clicked == "15.30" ? "available-onClick" : "display-none"
                  }
                  value="15.30"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "15.45" ? "newSetTime" : "setTime"} value="15.45" name="15.45 - 16:00" data-start="15:45" data-end="16:00" onClick={setTimeSlot}>
                  3:45pm
                </button>
                <button
                  className={
                    clicked == "15.45" ? "available-onClick" : "display-none"
                  }
                  value="15.45"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "16" ? "newSetTime" : "setTime"} value="16" name="16.00 - 16:15" data-start="16:00" data-end="16:15" onClick={setTimeSlot}>
                4:00pm
                </button>
                <button
                  className={
                    clicked == "16" ? "available-onClick" : "display-none"
                  }
                  value="4"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>

              <div>
                <button
                  className={clicked == "16.15" ? "newSetTime" : "setTime"} value="16.15" name="16.15 - 16:30" data-start="16:15" data-end="16:30" onClick={setTimeSlot}>
                 4:15pm
                </button>
                <button
                  className={
                    clicked == "16.15" ? "available-onClick" : "display-none"
                  }
                  value="16.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "16.30" ? "newSetTime" : "setTime"} value="16.30" name="16.15 - 16:30" data-start="16:15" data-end="16:30" onClick={setTimeSlot}>
                  4:30pm
                </button>
                <button
                  className={
                    clicked == "16.30" ? "available-onClick" : "display-none"
                  }
                  value="16.30"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "16.45" ? "newSetTime" : "setTime"} value="16.45" name="16.45 - 17:00" data-start="16:45" data-end="17:00" onClick={setTimeSlot}>
                4:45pm
                </button>
                <button
                  className={
                    clicked == "16.45" ? "available-onClick" : "display-none"
                  }
                  value="16.45"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SelectedDate;