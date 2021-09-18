import React from 'react'
import './SignupWithGoogle.css'
import { useParams, useHistory} from 'react-router'
import logo from '../../components/Images/logo.png'
import GoogleAccount from '../../components/GoogleAccount/GoogleAccount'

function SignupWithGoogle() {

    const history = useHistory()
    const {email} = useParams()
    let signupWithPasswordHandler = () =>{
        let path = `/signupwithpassword`
        history.push(path)
    }

    return (
        <div class="main-container-signupG">
            <div class="logo-welcome-signupG">
                <img id="logo-signupG" src={logo} alt="logo" />
                <p>Hi {email}!</p>
            </div>
            <div id="lower-container-signupG">
                <p id="first-p-signupG">The easiest way for you to sign up is with Google. This will automatically connect your calendar so you can start using Calendly right away!</p>
                <div id="signup-Google-Button">
                <GoogleAccount >Sign up with Google</GoogleAccount>
                </div>
                {/* <button 
                    id="Google-signup-signupG"
                    
                >Sign up with Google</button> */}
                <div id="inner-container-p-signupG">
                    <p>Prefer to create an account with a password?</p>
                    <p id="a-p-signupG" onClick={signupWithPasswordHandler}><a id="a-signupG">Click here </a></p>
                </div>
            </div>

            <p id="last-p-signupG">By creating a Calendly account, you agree to Calendly's Terms and Privacy Policy</p>
        </div>
    )
}
export default SignupWithGoogle
