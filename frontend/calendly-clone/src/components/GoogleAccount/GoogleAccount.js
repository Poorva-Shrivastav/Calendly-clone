import React, { useState } from 'react'
import { GoogleLogin} from 'react-google-login'
import './GoogleAccount.css'
import axios from 'axios'

function GoogleAccount({children}) {
    const [isSignedIn, setIsSignedIn] = useState(false)

    const googleSuccess = (res) => {
        // setlogOutButton(true)
        const userData = {tokenId: res.tokenId}
        axios.post('http://localhost:8000/api/googlelogin', userData)
        .then((data) => {
            let responseJson = data;
            sessionStorage.setItem('userData', JSON.stringify(data))
            window.location = `/user` 

        })
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google login was unsuccessful. Try Again later");
    }

    return (
        <>
            <GoogleLogin
                clientId= {process.env.REACT_APP_CLIENT_ID}
                render={renderProps => (
                    <button id="button-Goglesignin"onClick={renderProps.onClick} disabled={renderProps.disabled}>{children}</button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
                id="button-Goglesignin"
             />
            {/* <GoogleLogout
                clientId= {process.env.REACT_APP_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={logOutSuccess}
            /> */}
        </>
    )
}

export default GoogleAccount
