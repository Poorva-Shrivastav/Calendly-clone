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
    
    const [editing, setEditing] = useState(false)
    const [currentEmail, setCurrentEmail] = useState({})


    const history = useHistory();
    const backHandler = () =>{
        let path = `/signin/user/15min/date`
        history.push(path)
        
    }


    const addEmailHandler = () =>{
        if(email !=='' && !emailList.includes(email)){
            const emailData = {
                id:new Date().getTime().toString(),
                name: email,
                completed: false,
            }
            setEmailList([...emailList, emailData])
        }
        // else if(email && !isUpdated){
        //     setEmailList(
        //         emailList.map((item) => {
        //             if(item.id === editEmail){
        //                 return {...item, name: email}
        //             }
        //             return item;
        //         })
        //     )
        // }
        else if (emailList.length > 9){
            alert('Cannot send email to more than 10 people at a time')
        }
        setEmail('')
    
    }


    const handleEditEmailChange = (e) => {
        setCurrentEmail({...currentEmail, name: e.target.value})
        console.log(currentEmail);
    }

    const handleEditedEmailSubmit = () => {
        handleUpdatedEmail(currentEmail.id, currentEmail)
    }

    const handleUpdatedEmail = (id, updatedEmail) => {
        const updatedEMailList = emailList.map((email) => {
            return email.id === id ? updatedEmail : email
        })

        setEditing(false)
        setEmailList(updatedEMailList)
    }

    const handleEditEmailClick = (email) => {
        setEditing(true)
        setCurrentEmail({...email})
    }
    // const emailEditHandler = (id) => {
    //     let newEmailList = emailList.map((item, e) => {
    //             if(item.id === id){
    //                 let newInput = e.target
    //                 return {...newEmailList, name: newInput, isUpdated: true}
    //             }
    //     })
    //     setEmailList(newEmailList)

    // }


    // const deleteHandler = (index) => {
    //     const newEmailLst = [...emailList]
    //     newEmailLst.splice(index,1)
    //     setEmailList(newEmailLst)
    // }

    const deleteHandler = (index) =>{
        const newEmailLst = emailList.filter((ele) => {
            return index !== ele.id
        })
        setEmailList(newEmailLst) 
    }


    
    const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
    
    const validateEmail = () => {
        if(!emailRegex.test(emailList)){
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
                            <div className="invitee-list-container">
                                            {
                                                emailList.map((item, index) => {
                                                    return <li key={index}
                                                                className={isValid ? "list-meeting" : "error-list-meeting"}                                                    
                                                                className={item ? "list-meeting" : 'error-list-meeting'}
                                                                onClick={() => handleEditEmailClick(item)} 
                                                                >{item.name}
                                                                <button 
                                                                className={isValid ? "delete-button-meeting" : "error-delete-button-meeting"}
                                                                // className={!item.isUpdated ? "delete-button-meeting" : ''}
                                                                key={item.id}
                                                                onClick={() => deleteHandler(item.id)}
                                                                
                                                                >X</button>
                                                                
                                                    </li>
                                                })
                                            }
                                        </div>
                                        {
                                                editing ? (
                                                    <>
                                                    <input
                                                        className="guestList-invitee-input"
                                                        type="email"
                                                        value={currentEmail.name}
                                                        onChange={handleEditEmailChange}
                                                        onKeyPress={(e)=> e.key === "Enter" ? addEmailHandler(e) : null}
                                                        />
                                                    {/* <button onClick={()=>setEditing(true)}></button> */}
                                                    </>  
                                                )
                                                :(
                                                    <input
                                                        className="guestList-invitee-input"
                                                        type="email"
                                                        autoComplete="off"
                                                        spellCheck="false"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        onKeyPress={(e)=> e.key === "Enter" ? addEmailHandler(e) : null}
                                                        onClick={validateEmail}
                                                        ></input>
                                                )
                                            }
                                    {/* <input
                                        className="guestList-invitee-input"
                                        type="email"
                                        autoComplete="off"
                                        spellCheck="false"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyPress={(e)=> e.key === "Enter" ? addEmailHandler(e) : null}
                                        onClick={validateEmail}
                                        ></input> */}
                                        
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
