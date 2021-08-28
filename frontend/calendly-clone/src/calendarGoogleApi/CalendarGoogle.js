import React from 'react'

function CalendarGoogle() {

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

            gapi.auth2.getAuthInstance().signIn()
            .then(() => {
                var event = {
                   'summary': 'Google I/O 2021',
                   'location': '800 Howard St., San Francisco, CA 94103',
                   'description': 'A chance to hear more about Google\'s developer products.',
                    'start': {
                      'dateTime': '2021-08-28T09:00:00-07:00',
                      'timeZone': 'America/Los_Angeles'
                    },
                    'end': {
                      'dateTime': '2021-08-28T17:00:00-07:00',
                      'timeZone': 'America/Los_Angeles'
                    },
                    'recurrence': [
                      'RRULE:FREQ=DAILY;COUNT=2'
                    ],
                    'attendees': [
                      {'email': 'lpage@example.com'},
                      {'email': 'sbrin@example.com'}
                    ],
                    'reminders': {
                      'useDefault': false,
                      'overrides': [
                        {'method': 'email', 'minutes': 24 * 60},
                        {'method': 'popup', 'minutes': 10}
                      ]
                    }
                  };

                  var request = gapi.client.calendar.events.insert({
                    'calendarId': 'primary',
                    'resource': event
                  });

                  request.execute(event => {
                    window.open(event.htmlLink)
                  });
            })

        })
    }
    return (
        <div>
            <h3>Hi</h3>
            <button onClick={handleClick}>Add event</button>
        </div>
    )
}

export default CalendarGoogle
