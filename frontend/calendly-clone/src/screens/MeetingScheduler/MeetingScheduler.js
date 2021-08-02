import React, {useState} from 'react'
import TimeBar from '../FifteenMin/TimeBar/TimeBar'
import'./MeetingScheduler.css'
import { useHistory } from 'react-router'
import validator from 'validator'

function MeetingScheduler() {
    const [addGuests, setAddGuests] = useState(false)
    const [email, setEmail] = useState('')
    const [emailList, setEmailList] = useState([])
    const [isValid, setIsValid] = useState(false)
    const [isEditEmail, setIsEditEmail] = useState(null)
    const [toggleUpdated, setToggleUpdated] = useState(true)

    const history = useHistory();
    const backHandler = () =>{
        let path = `/signin/user/15min/date`
        history.push(path)
        
    }

    const inputHandler = (e) => setEmail(e.target.value)

    const addEmailHandler = () =>{
        
        if(email && !toggleUpdated){
            setEmailList(
                emailList.map((ele) => {
                    if(ele.id === isEditEmail){
                        return {...ele, name: email}
                    }
                    return ele;
                })
            )
            setToggleUpdated(true)

            setEmail('');
            
            setIsEditEmail(null)

            // setIsValid(true)
        }

        else if (emailList.length > 9){
            alert('Cannot send email to more than 10 people at a time')
        }

        else if(email !==''){ //&& !emailList.includes(email)
            const emailData = {
                id:new Date().getTime().toString(),
                name: email,
            }
            setEmailList([...emailList, emailData])
            

            const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if(emailRegex.test(email)){
                setIsValid(true)   

                }
                else {
                    setIsValid(false);
                }

        setEmail('')
        
        }
        
    
    }

    const editEmail = (id) => {
        let newEditedEmail = emailList.find((ele) => {
            return ele.id === id ;
        })
        // console.log(newEditedEmail);
        setToggleUpdated(false)
        setEmail(newEditedEmail.name)
        setIsEditEmail(id)
        console.log(isEditEmail);
    }

    const deleteHandler = (index) =>{
        const newEmailLst = emailList.filter((ele) => {
            return index !== ele.id
        })
        setEmailList(newEmailLst) 
    }


        
    // const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
        
    const validateEmail = () => {
        const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!emailRegex.test(email)){
            setIsValid(false)   
        }
        else{
            setIsValid(true)   
        }
        
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
                            
                            <div className="invitee-list-container" 
                    
                            >
                                {
                                                emailList.map((item) => {
                                                    return <div class="email-delete-container" >
                                                             <div
                                                                key={item.id}
                                                                className={isValid ? "list-meeting" : "error-list-meeting"}   
                                                                type="text"                                           
                                                                // className="list-meeting"
                                                                // onChange = {validateEmail}
                                                                onClick={() => editEmail(item.id)}
                                                                value={item.name}
                                                                > {item.name}
                                                                </div>
                                                            <button 
                                                                className={isValid ? "delete-button-meeting" : "error-delete-button-meeting"}
                                                                // key={item.id}
                                                                onClick={() => deleteHandler(item.id)}
                                                            >X</button>
                                                    </div>
     
                                            })  
                                        }
                                    </div>
                                    
                                <input
                                    className="guestList-invitee-input"
                                    type="email"
                                    autoComplete="off"
                                    spellCheck="false"
                                    value={email}
                                    onChange={inputHandler}
                                    // onChange={validateEmail}
                                    // onChange={isEditEmail ? inputHandler : null}
                                    onKeyPress={(e)=> e.key === "Enter" ? addEmailHandler(e) : null}
        
                                />
                                    
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
