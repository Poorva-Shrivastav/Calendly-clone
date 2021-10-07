import React, { useState, useEffect } from 'react'
import { useHistory, useParams} from 'react-router'
import CreateEvent from '../../../components/CreateEvent/CreateEvent'
import Event from '../../../components/Events/Event'
import NavbarPostLogin from '../../../components/NavbarPostLogin/NavbarPostLogin'
import './EventTypes.css'

function EventTypes({time}) {

    // const {loginEmail, googleLoginName, googleLoginEmail} = useParams()
    const[userName, setUserName] = useState('')
    const[userEmail, setUserEmail] = useState('')

    useEffect(() => {
        const data1 = JSON.parse(sessionStorage.getItem('userData'))
        setUserName(data1.data.user.name)
        setUserEmail(data1.data.user.email)
    })
    // console.log(userName);


    return (
        <div class="main-div-eventtypes">
            <NavbarPostLogin />
            <div className="separator-user"></div>
            <CreateEvent/>
            <div className= "outer-most-container-event">
            <div className="main-container-event">
                <div className="upper-div-event">
                    <div>
                        {/* <p id="p-event"><span id="span-event"></span>Poorva Shrivastav</p>
                        <a id="a-event" href="http://localhost:3000/user/:{loginEmail}"></a> */}
                        <p id="p-event"><span id="span-event">P</span>{userName}</p>
                        <a id="a-event" href=""> calendly.com/{userEmail}</a>
                    </div>
                    <div>
                        <button class="button-event">+ New Event Type </button>
                        <a>⚙️</a> 
                    </div>
                </div>
                {/* <div className="lower-div-main"> */}
                    <div className="lower-div-event">
                        <div className="meeting" id="_15">
                            <Event time={15}/>
                        </div>

                        <div className="meeting" id="_30">
                            <Event time={30}/>
                        </div>
                        
                        <div className="meeting" id="_60">
                            <Event time={60}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventTypes
