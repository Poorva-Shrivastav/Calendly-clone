import React from 'react'
import './Button.css'

function Button({children, onClick}) {
    return (
        <div>
            <button id="button" onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button
