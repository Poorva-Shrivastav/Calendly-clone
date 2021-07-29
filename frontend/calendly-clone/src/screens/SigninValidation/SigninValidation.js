import React, {useState} from 'react'
import "./SigninValidation.css"
import logo from '../../components/Images/logo.png'
import { GoogleLogin} from 'react-google-login'

function SigninValidation() {
    const [email, setEmail] = useState("")

    const googleSuccess = async (res) => {
        console.log(res);
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Signin was unsuccessful. Try Again later");
    }

    return (
        <div className="signup">
            <img className="logo" src={logo} alt="logo" />
            <p id="p-signin">Welcome back, poorva0305@gmail.com{email}!</p>
            <a class="anchor-signinVal" href="./signup">(This is not me.)</a>
            <div className="inner-signin">
                <GoogleLogin 
                        clientId = "1051195399308-odlc2nv9r2ml1ud7rro852lc1uj49mpi.apps.googleusercontent.com"
                        render = {(renderProps) => (
                            <button id="button-signin" 
                                    fullWidth onClick={renderProps.onClick} 
                                    disabled={renderProps.disabled} v
                                    ariant="contained">Log in with Google</button>
                        )}
                        onSuccess= {googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy = "single_host_origin"
                    
                />
                <p className="existing">Don't have an account?
                <a class="anchor-signinVal" href="./signup"> Sign up</a></p>
            </div>
        </div>
    )
}

export default SigninValidation
