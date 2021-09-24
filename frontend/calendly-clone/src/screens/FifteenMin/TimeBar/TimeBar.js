import React from 'react'
import './TimeBar.css'

function TimeBar({time}) {
    return (
        <div>
            <h4 id="h4-date" name="user">Poorva Shrivastav</h4>
            <h2 id="h2-date">{time} Minute Meeting</h2>
            <h4 id="h4-date">🕒 {time} min</h4>
        </div>
    )
}

export default TimeBar
