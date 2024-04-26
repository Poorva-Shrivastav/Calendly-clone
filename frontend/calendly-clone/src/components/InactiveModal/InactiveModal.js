import React, { useState } from 'react'
import './InactiveModal.css'

function InactiveModal({closeInactiveModal}) {

    return (
        <div className="outermost-div-inactivemodal">
            <div className="outer-div-inactivemodal">
            <div className="content-div-inactivemodal">
            <h3 id="inactivemodal-title">This feature is not active yet.</h3> 
            <div className="lower-div-inactivemodal">
                <button id="inactivemodal-close-button" onClick={() => closeInactiveModal(false)}>Close</button>                                                                                      
            </div>
            </div>
            </div>
        </div>

    )
}

export default InactiveModal
