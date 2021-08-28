import React from 'react'

function CalendarGoogleApi() {

    var gapi = window.gapi
    var CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    var API_KEY = process.env.REACT_APP_API_KEY
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar.events";

    const handleClick = () =>{
        gapi.load('client: auth2', () => {
            console.log('loaded client');

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', ()=> console.log('Calendar logged'))

            gapi.auth2.getAuthInstance().signedIn()
        })
    }

    return (
        <div>
            <h3>Hi</h3>
            <button onClick={handleClick}>Add event</button>
        </div>
    )
}

export default CalendarGoogleApi
