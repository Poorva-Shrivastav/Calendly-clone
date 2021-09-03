import React from 'react'
import { GoogleLogin} from 'react-google-login'
// import { env } from 'process'
import './GoogleAccount.css'
import axios from 'axios'

function GoogleAccount({children}) {

    const googleSuccess = (res) => {
        console.log(res);
        axios({
            method: "POST",
            url: "http://localhost:8000/api/googlelogin",
            data: {tokenId: res.tokenId}
        }).then(res => {
            console.log(res)
        })
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Signin was unsuccessful. Try Again later");
    }

    return (
        <GoogleLogin
            clientId= {process.env.REACT_APP_CLIENT_ID}
            buttonText={children}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={'single_host_origin'}
            id="button-Goglesignin"
        />
        // <GoogleLogin 
        // clientId = {process.env.REACT_APP_CLIENT_ID}
        //                 render = {(renderProps) => (
        //                     <button id="button-Goglesignin" 
        //                             fullWidth onClick={renderProps.onClick} 
        //                             disabled={renderProps.disabled}
        //                             variant="contained"
        //                             >
        //                             <img id="google-G" src="https://img.icons8.com/ios-glyphs/30/ffffff/google-logo--v1.png"/>{children}</button>
        //                 )}
        //                 onSuccess= {googleSuccess}
        //                 onFailure={googleFailure}
        //                 cookiePolicy ={"single_host_origin"}
                     
                // />
    )
}

export default GoogleAccount
