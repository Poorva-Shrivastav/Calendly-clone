import React, {useState, useContext} from 'react'
import TimeBar from '../FifteenMin/TimeBar/TimeBar'
import'./MeetingScheduler.css'
import { useHistory, useParams } from 'react-router'
import validator from 'validator'
import CalendarGoogle from '../../calendarGoogleApi/CalendarGoogle'
import {useLocation} from 'react-router-dom'
import Moment from 'react-moment'

// import TimeSlotContext from '../../App'

function MeetingScheduler({ newDate ,timeSlot, start, end, setReceiverName, receiverName}) {
    const [addGuests, setAddGuests] = useState(false)
    // const [name, setName] = useState('')
    const [mainEmail, setMainEmail] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isEmptyName, setIsEmptyName] = useState(false)
    const [isEmptyEmail, setIsEmptyEmail] = useState(false)
    const [emailList, setEmailList] = useState([])
    const [isEditEmail, setIsEditEmail] = useState(null)
    const [toggleUpdated, setToggleUpdated] = useState(true)
    const [emailError, setEmailError] = useState('')    


    const {time} = useParams();
    const history = useHistory();
    const backHandler = () =>{
        let path = `/user/15min/date`
        history.push(path)    
    }
    console.log(`I'm from Meeting - ${timeSlot} - ${newDate}`)

    // const nameChangeHandler = (e) => setName(e.target.value)

    const emailChangeHandler = (e) => setMainEmail(e.target.value)

    const messageChangeHandler = (e) => setMessage(e.target.value)

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

        }

        else if (emailList.length > 9){
            alert('Cannot send email to more than 10 people at a time')
        }

        else if(email !==''){ //&& !emailList.includes(email)
            const emailData = {
                id:new Date().getTime().toString(),
                email: email,
            }
            console.log(emailList);
            setEmailList([...emailList, emailData])
            
            if (validator.isEmail(email)) {
                setEmailError('Valid Email :)')
              } else {
                setEmailError('Enter valid Email!')
                }
            

            // const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            //     if(!emailRegex.test(email)){
            //         setIsValid(true)   
            //     }
            //     else {
            //         setIsValid(false);
            //     }
                // setIsValid(false)

        setEmail('')
        }
        
    }

    const editEmail = (id) => {
        let newEditedEmail = emailList.find((ele) => {
            return ele.id === id ;
        })
        // console.log(newEditedEmail);
        setToggleUpdated(false)
        setEmail(newEditedEmail.email)
        setIsEditEmail(id)
        console.log(isEditEmail);
    }


    const deleteHandler = (index) =>{
        const newEmailLst = emailList.filter((ele) => {
            return index !== ele.id
        })
        setEmailList(newEmailLst) 
    }


    // const validateEmail = (email) => {
    //     const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    //         if(emailRegex.test(email)){
    //             setIsValid(false)
    //         }
    //         else{
    //             setIsValid(true)   
    //         }
    // } 
    const formattedDate = newDate.toISOString().split('T')[0];
    const startTime = `${formattedDate}T${start}:00-06:30`
    const endTime = `${formattedDate}T${end}:00-06:30`

    var gapi = window.gapi
    var CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    var API_KEY = process.env.REACT_APP_API_KEY
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar.events";
                    
    
    const submitHandler = async (e) => {
        e.preventDefault();
        if(receiverName == ''){
            setReceiverName(true)
        }else if(mainEmail == ''){
            setIsEmptyEmail(true)
        }else if(receiverName !== '' && mainEmail !== ''){
            let path = `/user/15min/date/meeting-confirmation`
            
            gapi.load('client: auth2', () => {
                console.log('loaded client');
    
                gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                })
    
                gapi.client.load('calendar', 'v3', ()=> console.log('Calendar logged'))
    
                gapi.auth2.getAuthInstance().signIn()
                .then(() => {
                    var event = {
                        'summary': `Meeting with ${receiverName}`,
                        'description': '',
                        'start': {
                            'dateTime': `${startTime}`,
                          'timeZone': 'Asia/Calcutta'
                        },
                        'end': {
                        'dateTime': `${endTime}`,
                          'timeZone': 'Asia/Calcutta'
                        },
                        'recurrence': [
                          'RRULE:FREQ=DAILY;COUNT=2'
                        ],
                        // 'attendees': [
                        //   {'email': 'lpage@example.com'},
                        //   {'email': 'sbrin@example.com'}
                        // ],
                        'reminders': {
                          'useDefault': false,
                          'overrides': [
                            {'method': 'email', 'minutes': 24 * 60},
                            {'method': 'popup', 'minutes': 10}
                          ]
                        }
                      }
    
                      var request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event
                      });
    
                      request.execute(event => {
                        history.push(path)
                      });
                })
    
            })

            const response = await fetch("http://localhost:8000/send", {
            method: "POST",
            headers: {
                "Content-type" : "application/json",
            },
            body: JSON.stringify({receiverName, mainEmail, message, timeSlot, newDate }),
            })
            .then((res) => res.json())
            .then(async(res) => {
                const resData = await res;
                console.log(resData);
                if(resData.status === "success"){
                    // alert('email sent')
                    setIsEmptyName(false)
                    setIsEmptyEmail(false)
                }
                else if(resData.status === 'fail'){
                    alert('Email sending failed')
                    
                }
            })
            .then(() => {
                setReceiverName('')
                setEmail('')
                setMessage('')
                setEmailList('')
            })
   
        }   
           
    }


    return (
        <div>
            <div className="outerdiv-meeting">
                <div className="left-container-meeting">
                    <button className="back-button" onClick={backHandler}>⬅</button>
                    <TimeBar time={15}/>
                    {/* <p id="event-string-p">🗓️ 9:00am - 9:15am, Friday, July 30, 2021</p> */}
                    <p id="event-string-p" name="timeslot">🗓️ {timeSlot}, <Moment format="MMM DD YYYY" date={newDate} /> </p>
                    <p id="time-zone">🌎 India Standard Time</p>
                </div>

                <form method="POST" onSubmit={submitHandler} className="right-container-meeting">
                    <div>
                        <p class="meetingp">Enter Details</p>
                        <div className="input-container-meeting">
                            <label className="meeting-label">Name *</label>
                            <input 
                                className={isEmptyName? "input-meeting-error" :"input-meeting" }
                                value={receiverName} 
                                name="receiverName"
                                onChange={setReceiverName}></input>
                            <div className={isEmptyName? "input-meeting-error-hidden" : "display-none"}>Can't be blank.</div>    
                        </div>
                        <div className="input-container-meeting">
                            <label className="meeting-label">Email *</label>
                            <input className={isEmptyEmail? "input-meeting-error" :"input-meeting"}
                                type="email"
                                value={mainEmail} 
                                name="mainEmail"
                                onChange={emailChangeHandler}></input>
                            <div className={isEmptyEmail? "input-meeting-error-hidden" : "display-none"}>Can't be blank.</div>
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
                                        return <div 
                                                    // className={validator.isEmail(email) ?  "error-list-meeting" : "email-delete-container"  }   
                                                    className="email-delete-container"
                                                    key={item.id}>
                                                    <span style={{
                                                        fontWeight: 'bold',
                                                        color: 'red',
                                                        }}>{emailError}</span>
                                                <div
                                                    className="list-meeting"
                                                    type="text" 
                                                    onClick={() => editEmail(item.id)}
                                                    value={item.name}
                                                    > 
                                                    {item.name}
                                                    
                                                </div>
                                                <button 
                                                    className="delete-button-meeting"
                                                    onClick={() => deleteHandler(item.id)}
                                                >X</button>
                                            </div>
                                            })  
                                        }
                            </div>
                                
                                <input
                                    className="guestList-invitee-input"
                                    id={email}
                                    type={email}
                                    autoComplete="off"
                                    spellCheck="false"
                                    value={email}
                                    onChange={inputHandler}
                                    // onChange={isEditEmail ? inputHandler : null}
                                    onKeyPress={(e)=> e.key === "Enter" ? addEmailHandler(e) : ''}
                               
                                />
                                    
                                    
                            </div>
                        <p className={addGuests ?  "p-meeting": "display-none"}>Notify up to 10 additional guests of the scheduled event.</p>
                    </div>
                    <div>
                        <label className="meeting-label">Please share anything that will help prepare for our meeting.</label>
                        <textarea className="textarea-meeting" 
                            value={message} 
                            onChange={messageChangeHandler}
                            ></textarea>

                        <div>
                        <p className="display-none" name="timeslot">🗓️ {timeSlot}, <Moment format="MMM DD YYYY" date={newDate} /> </p>
                        {/* <input className="display-none" type="text" value={timeSlot} name="timeSlot" ></input>
                        <input className="display-none" type="text" value={newDate} name="timeSlot" ></input> */}
                        </div>
                        <button type="submit" value="Submit" className="schedule-event-button" onClick={submitHandler}>Schedule Event</button>
                    </div>
                </div>
            </form>
            
    </div>
    </div >
)

}

export default MeetingScheduler
