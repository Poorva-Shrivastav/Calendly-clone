import React, {useState} from 'react'
import "./Signup.css"
import logo from '../../components/Images/logo.png'


function Signup() {
    const [email, setEmail] = useState("")

    return (
        <div className="signup">
            <img className="logo" src={logo} alt="logo" />
            <p id="p-signup">Sign up with Calendly for free</p>

            <div className="inner-signup">
                <h3 id="h3">Enter your email to get started.</h3>
                <input type="text" value={email} id="input"
                    placeholder="email address"
                    onChange={(e) => setEmail(e.target.value)}></input>
                <button id="button-signup">Get Started</button>
                <p className="existing-account">Already have an account?
                <a id="a-signup" href="./signin/email"> Log in</a></p>
            </div>
        </div>
    )
}

export default Signup
