import React from 'react'
import { GoogleLogin} from 'react-google-login'
import './GoogleAccount.css'
import axios from 'axios'
// import {useHistory} from 'react-router-dom'


function GoogleAccount({children}) {
    const googleSuccess = (res) => {
        // const userData = {tokenId: res.tokenId}
        // axios.post('http://localhost:8000/api/googlelogin', userData)
        axios({
            method: "POST",
            url: "http://localhost:8000/api/googlelogin",
            data: {tokenId: res.tokenId}
        })
        .then(res => {
            // window.location = 'http://localhost:3000/user'
            console.log(res)
            // history.push('http://localhost:3000/user')
     
        })
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google login was unsuccessful. Try Again later");
    }

    return (
        <GoogleLogin
            clientId= {process.env.REACT_APP_CLIENT_ID}
            render={renderProps => (
                <button id="button-Goglesignin"onClick={renderProps.onClick} disabled={renderProps.disabled}>{children}</button>
              )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={'single_host_origin'}
            id="button-Goglesignin"
            isSignedIn={true}
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
