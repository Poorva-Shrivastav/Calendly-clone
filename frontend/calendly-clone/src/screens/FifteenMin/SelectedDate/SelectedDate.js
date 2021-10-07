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
    const [date, setDate] = useState(new Date())
    const value = new Date()

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

  return (
    <div>
      <div className="outerdiv-selectedDate">
        <div className="left-container-selectedDate">
          <TimeBar time={15} />
        </div>

        <div className="right-container-selectedDate">
          <div>
            <h2 id="bottom-h2-date">Select a Date & Time</h2>
            <div>
            <Calendar 
                activeStartDate={date}
                selectRange={false}
                minDate={date}
                onClickDay= {setNewDate} 
                onChange={selectedDateSetHandler} 
            />
              {/* <Calendar
                value={date}
                onChange={dateHandler}
                selectRange={false}
                minDate={date}
                onClickDay={setSelectedDate}                
                onClick={selectedDateSetHandler}
                // selectedDate={selectedDate}
              /> */}
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
              <Moment format="MMM DD YYYY" date={newDate} />
            </div>
            <div
              className="button-container"
              onClick={(e) => setClicked(e.target.value)}
            >
              <div>
                <button className={clicked == "9" ? "newSetTime" : "setTime"} value="9" name="9:00am - 9:15am" data-start="9:00" data-end="9:15"onClick={setTimeSlot}>
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
                >
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
                  className={clicked == "12" ? "newSetTime" : "setTime"} value="12" name="12.00pm - 12:15pm" data-start="12:00" data-end="12:15" onClick={setTimeSlot}>
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
                  className={clicked == "12.15" ? "newSetTime" : "setTime"} value="12.15"name="12.15pm - 12:30pm" data-start="12:15" data-end="12:30" onClick={setTimeSlot}>
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
                  className={clicked == "12.30" ? "newSetTime" : "setTime"} value="12.30" name="12.30pm - 12:45pm" data-start="12:30" data-end="12:45" onClick={setTimeSlot}>
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
                  className={clicked == "12.45" ? "newSetTime" : "setTime"} value="12.45"name="12.45pm - 1:00pm" data-start="12:45" data-end="1:00" onClick={setTimeSlot}>
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
                  className={clicked == "1" ? "newSetTime" : "setTime"} value="1" name="1.00pm - 1:15pm" data-start="1:00" data-end="1:15" onClick={setTimeSlot}>
                1:00pm
                </button>
                <button
                  className={
                    clicked == "1" ? "available-onClick" : "display-none"
                  }
                  value="1"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "1.15" ? "newSetTime" : "setTime"} value="1.15" name="1.15pm - 1:30pm" data-start="1:15" data-end="1:30" onClick={setTimeSlot}>
                >
                  1:15pm
                </button>
                <button
                  className={
                    clicked == "1.15" ? "available-onClick" : "display-none"
                  }
                  value="1.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "1.30" ? "newSetTime" : "setTime"} value="1.30" name="1.30pm - 1:45pm" data-start="1:30" data-end="1:45" onClick={setTimeSlot}>
                1:30pm
                </button>
                <button
                  className={
                    clicked == "1.30" ? "available-onClick" : "display-none"
                  }
                  value="1.30"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "1.45" ? "newSetTime" : "setTime"} value="1.45" name="1.45pm - 2:00pm" data-start="1:45" data-end="2:00" onClick={setTimeSlot}>
                1:45pm
                </button>
                <button
                  className={
                    clicked == "1.45" ? "available-onClick" : "display-none"
                  }
                  value="1.45"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "2" ? "newSetTime" : "setTime"} value="2" name="2.00pm - 2:15pm" data-start="2:00" data-end="2:15" onClick={setTimeSlot}>
                2:00pm
                </button>
                <button
                  className={
                    clicked == "2" ? "available-onClick" : "display-none"
                  }
                  value="2"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "2.15" ? "newSetTime" : "setTime"} value="2.15" name="2.15pm - 2:30pm" data-start="2:15" data-end="2:30" onClick={setTimeSlot}>
                2:15pm
                </button>
                <button
                  className={
                    clicked == "2.15" ? "available-onClick" : "display-none"
                  }
                  value="2.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "2.30" ? "newSetTime" : "setTime"} value="2.30" name="2.30pm - 2:45pm" data-start="2:30" data-end="2:45" onClick={setTimeSlot}>
                2:30pm
                </button>
                <button
                  className={
                    clicked == "2.30" ? "available-onClick" : "display-none"
                  }
                  value="2.30"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "2.45" ? "newSetTime" : "setTime"}value="2.45" name="2.45pm - 3:00pm" data-start="2:45" data-end="3:00" onClick={setTimeSlot}>
                2:45pm
                </button>
                <button
                  className={
                    clicked == "2.45" ? "available-onClick" : "display-none"
                  }
                  value="2.45"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "3" ? "newSetTime" : "setTime"} value="3" name="3.00pm - 3:15pm" data-start="3:00" data-end="3:15" onClick={setTimeSlot}>
                 3:00pm
                </button>
                <button
                  className={
                    clicked == "3" ? "available-onClick" : "display-none"
                  }
                  value="3"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>

              <div>
                <button
                  className={clicked == "3.15" ? "newSetTime" : "setTime"} value="3.15"  name="3.15pm - 3:30pm" data-start="3:15" data-end="3:30" onClick={setTimeSlot}>
                  3:15pm
                </button>
                <button
                  className={
                    clicked == "3.15" ? "available-onClick" : "display-none"
                  }
                  value="3.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "3.30" ? "newSetTime" : "setTime"} value="3.30" name="3.30pm - 3:35pm" data-start="3:30" data-end="3:45" onClick={setTimeSlot}>
                3:30pm
                </button>
                <button
                  className={
                    clicked == "3.30" ? "available-onClick" : "display-none"
                  }
                  value="3.30"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "3.45" ? "newSetTime" : "setTime"} value="3.45" name="3.45pm - 4:00pm" data-start="3:45" data-end="4:00" onClick={setTimeSlot}>
                  3:45pm
                </button>
                <button
                  className={
                    clicked == "3.45" ? "available-onClick" : "display-none"
                  }
                  value="3.45"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "4" ? "newSetTime" : "setTime"} value="4" name="4.00pm - 4:15pm" data-start="4:00" data-end="4:15" onClick={setTimeSlot}>
                4:00pm
                </button>
                <button
                  className={
                    clicked == "4" ? "available-onClick" : "display-none"
                  }
                  value="4"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>

              <div>
                <button
                  className={clicked == "4.15" ? "newSetTime" : "setTime"} value="4.15" name="4.15pm - 4:30pm" data-start="4:15" data-end="4:30" onClick={setTimeSlot}>
                 4:15pm
                </button>
                <button
                  className={
                    clicked == "4.15" ? "available-onClick" : "display-none"
                  }
                  value="4.15"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "4.30" ? "newSetTime" : "setTime"} value="4.30" name="4.15pm - 4:30pm" data-start="4:15" data-end="4:30" onClick={setTimeSlot}>
                  4:30pm
                </button>
                <button
                  className={
                    clicked == "4.30" ? "available-onClick" : "display-none"
                  }
                  value="4.30"
                  onClick={meetingScheduleHandler}
                >
                  Confirm
                </button>
              </div>
              <div>
                <button
                  className={clicked == "4.45" ? "newSetTime" : "setTime"} value="4.45" name="4.45pm - 5:00pm" data-start="4:45" data-end="5:00" onClick={setTimeSlot}>
                4:45pm
                </button>
                <button
                  className={
                    clicked == "4.45" ? "available-onClick" : "display-none"
                  }
                  value="4.45"
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
