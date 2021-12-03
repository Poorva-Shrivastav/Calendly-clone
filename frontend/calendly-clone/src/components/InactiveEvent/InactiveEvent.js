import React, { useState } from 'react'
import InactiveModal from '../InactiveModal/InactiveModal'
import './InactiveEvent.css';

function InactiveEvent({time}) {
    const [showInactiveModal, setShowInactiveModal] = useState(false)

    const inactivePopupHandler = () => setShowInactiveModal(true)

    return (
        <div className="min-meeting">           
            <div className="checkbox-div">
            {/* <input type="checkbox"/>
            ⚙️ */}
            </div>
            
            <h2 id="h2-tag-event">{time} Minute Meeting</h2>
            <p id="p-tag-event">{time} min, One-on-One</p>
            <button class="button-inactiveEvent-noBorder" onClick={inactivePopupHandler}>View booking page</button>
            <div class="lower-container">
            <button className="button-inactiveEvent-noBorder" onClick={inactivePopupHandler}>📄 Copy link</button> 
            <button id="button-tag-share"onClick={inactivePopupHandler}>Share</button>                

            {
                    showInactiveModal && <InactiveModal closeInactiveModal={setShowInactiveModal}/>
            }
            </div>
        </div>
    )
}

export default InactiveEvent;
