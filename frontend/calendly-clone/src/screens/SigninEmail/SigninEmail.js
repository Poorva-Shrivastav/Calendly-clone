import React, {useState} from 'react'
import "./SigninEmail.css"
import logo from '../../components/Images/logo.png'
import {useHistory, useParams } from 'react-router'
import axios from 'axios'

function SigninEmail({loginEmail, setLoginEmail}) {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();

        if(loginEmail!== ''){
            // let path = `/user`
            // history.push(path)
            
            const loginRequest = {
                loginEmail: loginEmail
                // email: email,
                // password: password
            }

            axios.post('http://localhost:8000/api/signin', loginRequest)
                .then(res => { console.log(res.data)
                // window.location = '/user'
                window.location = '/signin-pwd'
                })
                .catch(err => {
                    alert("Invalid Credentials")
                    console.log(err)
                })
               
    } 
    }

    return (
        <div className="signup">
            <img className="logo" src={logo} alt="logo" />
            <p id="p-signup">Log into your Calendly account.</p>

            <form className="inner-signup" method="POST" onSubmit={submitHandler}>
                <h3 id="h3">Enter your email to get started.</h3>
                <input type="email" value={loginEmail} id="input"
                    placeholder="email address"
                    onChange={setLoginEmail}></input>
                {/* <input type="password" value={password} id="input"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}></input> */}
                <button type="submit" value="Submit" id="button-signup">Continue</button>
                <p className="existing-account">Don't have an account?
                <a id="a-signup" href="./signin/email"> Sign up</a></p>
            </form>
        </div>
    )
}

export default SigninEmail
