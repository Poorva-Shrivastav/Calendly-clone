import React, {useState} from 'react'
import logo from '../../components/Images/logo.png'
import GoogleAccount from '../../components/GoogleAccount/GoogleAccount'
import { GoogleLogin} from 'react-google-login'
import "./SigninValidation.css"
import {useHistory, useParams} from 'react-router-dom'



function SigninValidation() {
    // const [email, setEmail] = useState("")

    const {loginEmail} = useParams()
    // const googleSuccess = async (res) => {
    //     console.log(res);
    // }

    // const googleFailure = (error) => {
    //     console.log(error);
    //     console.log("Google Signin was unsuccessful. Try Again later");
    // }
    
    
    return (
        <div className="signup">
            <img className="logo" src={logo} alt="logo" />
            <p id="p-signin">Welcome back, {loginEmail}!</p>
            <a class="anchor-signinVal" href="../signup">(This is not me.)</a>
            <div className="inner-signin">
                
                <GoogleAccount>Log in with Google</GoogleAccount>
                {/* <GoogleLogin
                        clientId = {process.env.REACT_APP_API_KEY}
                        
                        render = {(renderProps) => (
                            <button id="button-signin" 
                                    fullWidth onClick={renderProps.onClick} 
                                    disabled={renderProps.disabled}
                                    ariant="contained">Log in with Google</button>
                        )}
                        onSuccess= {googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy = "single_host_origin"
                    
                />  */}
                <p className="existing">Don't have an account?
                <a class="anchor-signinVal" href="../signup"> Sign up</a></p>
            </div>
        </div>
    )
}

export default SigninValidation
