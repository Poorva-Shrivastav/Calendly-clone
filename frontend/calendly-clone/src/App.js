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
import MeetingConfirmation from './screens/MeetingConfirmation/MeetingConfirmation';
import SignupWithGoogle from './screens/SignupWithGoogle/SignupWithGoogle';
import CalendarGoogle from './calendarGoogleApi/CalendarGoogle';

export const TimeSlotContext = createContext(null);

function App({loginEmail, email, time, name}) {

  const [selectedDate, setSelectedDate] = useState('0')
  const [timeRange, setTimeRange] = useState('Hello from UseContext')

  return (
    
    <Router>  
      <Switch>
      <TimeSlotContext.Provider value={{ timeRange, setTimeRange }}>
        <div className="App">
        
            <Route exact path="/"><Home/></Route>  
            <Route exact path="/signup" ><Signup/></Route> 
            <Route path="/signup/:email" ><SignupWithGoogle email={email}/></Route> 
            {/* <Link to="/signup/email="><SignupWithGoogle/></Link> */}
            <Route exact path="/signin"><Signin/></Route>  
            <Route exact path="/signin/:loginEmail"><SigninValidation/></Route>  
            <Route exact path="/user"><EventTypes time={time}/></Route>  
            <Route exact path="/user/:time"><FifteenMin/></Route> 
            <Route exact path="/user/15min/date"><SelectedDate selectedDate={selectedDate}/></Route> 
            <Route exact path="/user/15min/date/meeting"><MeetingScheduler CalendarReact={selectedDate}/></Route>
            <Route exact path="/user/15min/date/meeting-confirmation"><MeetingConfirmation /></Route>
            <Route exact path="/googlecalendar"><CalendarGoogle/></Route>  
            
        </div>
        </TimeSlotContext.Provider>
     </Switch>
    </Router>
    
  )
}

export default App;
