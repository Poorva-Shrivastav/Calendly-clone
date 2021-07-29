import React from 'react'
import EventTypes from '../../screens/MainUserPage/EventTypes/EventTypes'
import Button from '../Button/Button'
import './CreateEvent.css'

function CreateEvent() {
    return (    
        <div class="main-event">
            <div class="event1">
                <p id="p-heading">My Calendly</p>
                <div class="ptags-holder-event">
                    <a onClick={<EventTypes/>} href="./user/event-types">Event Types</a>
                    <a>Scheduled Events</a>
                    <a>Workflows</a>
                </div>
            </div>
            <div class="event2">
                <Button>+ Create</Button>
            </div>

        </div>
    )
}

export default CreateEvent
