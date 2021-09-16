import React from 'react'
import './SignupWithPassword.css'
import logo from '../../components/Images/logo.png'
import { useParams, useHistory} from 'react-router'

function SignupWithPassword() {
    const {email, password} = useParams()

    const submitHandler = () => console.log("Something");
    return (
        <div className="signup">
            <img className="logo" src={logo} alt="logo" />
            <p id="p-signup">Sign up with Calendly for free</p>

            <form className="inner-signupwithpwd" method="POST" onSubmit={submitHandler}>
                <h3 id="h3">Enter your email to get started.</h3>
                <input type="email" value={email} id="input-signupwithpwd"
                    placeholder="email address"
                    // onChange={(e) => setEmail(e.target.value)}
                    ></input>
                <h3 id="h3">Enter your full name.</h3>
                <input type="text" value={password} class="input-signupwithpwd"
                    placeholder="name"
                    // onChange={(e) => setEmail(e.target.value)}
                    ></input>
                <h3 id="h3">Choose a password with at least 8 characters.</h3>
                <input type="password" value={password} class="input-signupwithpwd"
                    placeholder="password"
                    // onChange={(e) => setEmail(e.target.value)}
                    ></input>
                <button type="submit" value="Submit" id="button-signupwithpwd">Continue</button>
            </form>
            <p id="last-p-signupwithpwd">By creating a Calendly account, you agree to Calendly's Terms and Privacy Policy</p>
        </div>
    )
}

export default SignupWithPassword
