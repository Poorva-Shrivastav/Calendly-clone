import React, {createContext, useState} from 'react';
import Home from './screens/Home/Home';
import Signup from './screens/Signup/Signup';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Signin from './screens/Signin/Signin';
import SigninValidation from './screens/SigninValidation/SigninValidation';
import MainUserPage from './screens/MainUserPage/MainUserPage';
import EventTypes from './screens/MainUserPage/EventTypes/EventTypes';
import FifteenMin from './screens/FifteenMin/FifteenMin';
import SelectedDate from './screens/FifteenMin/SelectedDate/SelectedDate';
import MeetingScheduler from './screens/MeetingScheduler/MeetingScheduler';
import CalendarReact from './screens/FifteenMin/Calendar/CalendarReact';
import MeetingConfirmation from './screens/FifteenMin/MeetingConfirmation/MeetingConfirmation';
import SignupWithGoogle from './screens/SignupWithGoogle/SignupWithGoogle';
import CalendarGoogle from './calendarGoogleApi/CalendarGoogle';
// import { useHistory } from 'react-router';

function App({loginEmail, email, time, name}) {

  // const [selectedDate, setSelectedDate] = useState("I'm date from App.js")
  const [timeSlot, setTimeSlot] = useState('Hello from App.js')
  const timeSlotSetter = (e) => setTimeSlot(e.target.name);
  
  const [newDate, setNewDate] = useState(new Date())
  const dateSetter = (e) => setNewDate(e)

  return (
    
    <Router>  
      <Switch>
        <div className="App">
        
            <Route exact path="/"><Home/></Route>  
            <Route exact path="/signup" ><Signup/></Route> 
            <Route path="/signup/:email" ><SignupWithGoogle email={email}/></Route> 
            <Route exact path="/signin"><Signin/></Route>  
            <Route exact path="/signin/:loginEmail"><SigninValidation/></Route>  
            <Route exact path="/user"><EventTypes time={time}/></Route>  
            <Route exact path="/user/:time"><FifteenMin/></Route> 
            <Route exact path="/user/15min/date"><SelectedDate newDate={newDate} setNewDate={dateSetter} setTimeSlot={timeSlotSetter}/></Route> 
            <Route exact path="/user/15min/date/meeting"><MeetingScheduler newDate={newDate} timeSlot={timeSlot}/></Route>
            <Route exact path="/user/15min/date/meeting-confirmation" newDate={newDate} timeSlot={timeSlot}><MeetingConfirmation /></Route>
            <Route exact path="/googlecalendar"><CalendarGoogle/></Route>  
            
        </div>
     </Switch>
    </Router>
    
  )
}

export default App;
