import React, {useState, useEffect} from 'react'
import './CalendarReact.css'
import Calendar from 'react-calendar'
import dateFormat from 'dateformat';
import { useHistory } from 'react-router';
// import 'react-calendar/dist/Calendar.css';


function CalendarReact({time}) {
    const [date, setDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState('')
    const [value, onChange] = useState(new Date());

    const history = useHistory();

    const dateHandler = () => {
        setDate(date)
    }
    
    const selectedDateSetter = (value, e) => {
        let path = `/user/15min/date`
        history.push(path)
        setSelectedDate(e.target.ariaLabel)
    }
    
    return (
        <div>
            <Calendar 
                value={value} 
                onChange={onChange} 
                selectRange={false}
                minDate ={date}
                onClickDay={selectedDateSetter}
                selectedDate={selectedDate}
            
            />
                
        </div>
    )
}

export default CalendarReact


//https://calendly.com/poorva0305/15min?month=2021-07

//https://calendly.com/poorva0305/15min?month=2021-07&date=2021-07-28