import React, {useState} from 'react'
import TimeBar from '../FifteenMin/TimeBar/TimeBar'
import'./MeetingScheduler.css'
import { useHistory } from 'react-router'

function MeetingScheduler() {
    const [addGuests, setAddGuests] = useState(false)
    const [email, setEmail] = useState('')
    const [emailList, setEmailList] = useState([])
    // const [deleteEMail, setDeleteEMail] = useState('')

    const addEmailHandler = (e) =>{
        if(email !=='' && !emailList.includes(email)){
                setEmailList([
                    ...emailList,
                    email
                ])
        }
        if (emailList.length > 9){
              alert('Cannot send email to more than 10 people at a time')
        }
        setEmail('')
    
    }

    const isEmail = (email) =>{
        return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
    }

    // console.log(emailList);

    const deleteHandler = (index) => {
        const newEmailLst = [...emailList]
        newEmailLst.splice(index,1)
        setEmailList(newEmailLst)
    }

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
                        <button className={addGuests ? "display-none" : "add-guest-meeting"}
                                onClick = {(e) => setAddGuests(e.target)}    
                            >Add Guests
                        </button>

                        <div>
                            <label className={addGuests ?  "meeting-label": "display-none"}>Guest Email(s)</label>
                            <div type="button" className={addGuests ?  "textarea-meeting-hidden": "display-none"}>
                            <div className="invitee-list-container">
                                            {
                                                emailList.map((item, index) => {
                                                    return <li key={index} 
                                                                // className="list-meeting"
                                                                className={isEmail ? "list-meeting" : "error-list-meeting"}
                                                                >{item}
                                                            <button className="delete-button-meeting"
                                                                onClick={() => deleteHandler(index)}>X</button>
                                                    </li>
                                                })
                                            }
                                                
                                               
                                        </div>
                                    <input
                                        className="guestList-invitee-input"
                                        type="email"
                                        autoComplete="off"
                                        spellCheck="false"
                                        value={email}
                                        onChange={((e) => setEmail(e.target.value))}
                                        onKeyPress={(e)=> e.key === "Enter" ? addEmailHandler(e) : null}
                                        // isEmail="true"
                                        ></input>
                                        
                                </div>
                            <p className={addGuests ?  "p-meeting": "display-none"}>Notify up to 10 additional guests of the scheduled event.</p>
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
