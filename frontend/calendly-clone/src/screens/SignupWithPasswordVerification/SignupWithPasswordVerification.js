import React from 'react'
import './SignupWithPasswordVerification.css'
import logo from '../../components/Images/logo.png'
import { useHistory, useParams } from 'react-router'

function SignupWithPasswordVerification() {
    const {email} = useParams()
    return (
        <div className="signupwithpwd-verify">
            <img className="logo" src={logo} alt="logo" />
            <p id="p-signupwithpwd-verify">Before continuing, we need to verify your email address. Please check your inbox for a confirmation link.</p>
            <p id="last-p-signupwithpwd-verify">If you do not receive the email at <span id="email-signup-verify">{email}</span> within an hour, we can resend it to you.</p>
        </div>
    )
}

export default SignupWithPasswordVerification
