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
import SignupWithPassword from './screens/SignupWithPassword/SignupWithPassword';
import SignupWithPasswordVerification from './screens/SignupWithPasswordVerification/SignupWithPasswordVerification';
import SigninEmail from './screens/SigninEmail/SigninEmail';
import SigninPasswordRequired from './screens/SigninPasswordRequired/SigninPasswordRequired';
// import { useHistory } from 'react-router';

function App({email, time, googleLoginName,googleLoginEmail}) {

  // const [selectedDate, setSelectedDate] = useState("I'm date from App.js")
  const [timeSlot, setTimeSlot] = useState('Hello from App.js')
  const [start, setStart] = useState('Im start from App.js')
  const [end, setEnd] = useState('Im end from App.js')
  const [newDate, setNewDate] = useState(new Date())

  //signup
  const [firstEmail, setFirstEmail] = useState('')
  const [receiverName, setReceiverName] = useState('')

  // const [loggedInUser, setLoggedInUser] = useState()

  const timeSlotSetter = (e) => {
    setTimeSlot(e.target.name);
    setStart(e.target.dataset.start)
    setEnd(e.target.dataset.end)
  }
  
  const firstEmailHandler = e => setFirstEmail(e.target.value)

  const dateSetter = (e) => setNewDate(e)
  
  const receiverNameChangeHandler = (e) => setReceiverName(e.target.value)

  return (
    
    <Router>  
      <Switch>
        <div className="App">
            {/* <Route exact path="/"> {loggedIn ? <Redirect to="/user" /> : <Home/>}</Route> */}
            <Route exact path="/"><Home setFirstEmail={firstEmailHandler} firstEmail={firstEmail}/></Route>  
            <Route exact path="/signup" ><Signup firstEmail={firstEmail}/></Route> 
            <Route path="/signup/:email" ><SignupWithGoogle email={email}/></Route> 
            <Route path="/signupwithpassword" ><SignupWithPassword /></Route> 
            <Route path="/signupwithpassword-verify" ><SignupWithPasswordVerification/></Route> 
            <Route exact path="/signin-email"><Signin/></Route> 
            <Route exact path="/signin"><SigninEmail /></Route> 
            <Route exact path="/signin/:loginEmail"><SigninValidation/></Route> 
            {/* <Route path="/signin-pwd" ><SigninPasswordRequired/></Route>   */}
            <Route exact path="/user"><EventTypes googleLoginName={googleLoginName} googleLoginEmail={googleLoginEmail} time={time} /></Route>  
            <Route exact path="/user/:time"><FifteenMin/></Route> 
            <Route exact path="/user/15min/date"><SelectedDate newDate={newDate} setNewDate={dateSetter} setTimeSlot={timeSlotSetter} start={start} end={end}/></Route> 
            <Route exact path="/user/15min/date/meeting"><MeetingScheduler newDate={newDate} timeSlot={timeSlot} start={start} end={end} setReceiverName={receiverNameChangeHandler} receiverName={receiverName}/></Route>
            <Route exact path="/user/15min/date/meeting-confirmation"><MeetingConfirmation newDate={newDate} timeSlot={timeSlot} receiverName={receiverName} /></Route>
            <Route exact path="/googlecalendar"><CalendarGoogle/></Route>  
            
        </div>
     </Switch>
    </Router>
    
  )
}

export default App;
