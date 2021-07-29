import React, { Children } from 'react';
import Home from './screens/Home/Home';
import Signup from './screens/Signup/Signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signin from './screens/Signin/Signin';
import SigninValidation from './screens/SigninValidation/SigninValidation';
import MainUserPage from './screens/MainUserPage/MainUserPage';
import EventTypes from './screens/MainUserPage/EventTypes/EventTypes';
import FifteenMin from './screens/FifteenMin/FifteenMin';
import SelectedDate from './screens/FifteenMin/SelectedDate/SelectedDate';
import MeetingScheduler from './screens/MeetingScheduler/MeetingScheduler';
import CalendarReact from './screens/FifteenMin/Calendar/CalendarReact';


function App() {
  return (
    <Router>  
      <Switch>
        <div className="App">
            <Route exact path="/"><Home/></Route>  
            <Route exact path="/signup"><Signup/></Route>   
            <Route exact path="/signin"><Signin/></Route>  
            <Route exact path="/signin/email"><SigninValidation/></Route>  
            <Route exact path="/signin/user"><EventTypes/></Route>  
            <Route exact path="/signin/user/event-types"><EventTypes/></Route>  
            <Route exact path="/signin/user/15min"><FifteenMin /></Route> 
            <Route exact path="/signin/user/15min/date"><SelectedDate component={CalendarReact}/></Route> 
            <Route exact path="/signin/user/15min/date/meeting"><MeetingScheduler/> </Route>
        </div>
     </Switch>
    </Router>
  );
}

export default App;
