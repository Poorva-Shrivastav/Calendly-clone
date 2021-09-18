import React from 'react'
import './SignupWithPassword.css'
import logo from '../../components/Images/logo.png'
import { useParams, useHistory} from 'react-router'

function SignupWithPassword(props) {
    const {email, password} = useParams()
    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault();
        let registered = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password:document.getElementById('password').value
        }

        if(props.name.length > 12){
            alert("Long Name!");
        }

        else if(props.password.length < 8){
            alert("Password is less than 8 characters");
        }
        else{
            // axios.post('http://localhost:8000/api/signup', registered)
            // .then(res => { console.log(res.data)
            // window.location = '/signupwithpassword-verify'
            // })
            
            // .catch(err => console.log(err))
            let path = '/signupwithpassword-verify'
            history.push(path)
        }

        
    }
    return (
        <div className="signupwithpwd">
            <img className="logo" src={logo} alt="logo" />
            <p id="p-signupwithpwd">Sign up with Calendly for free</p>

            <form className="inner-signupwithpwd" method="POST" onSubmit={submitHandler}>
                <h3 id="h3">Enter your email to get started.</h3>
                <input type="email" value={email} className="input-signupwithpwd"
                    placeholder="email address" id="email"
                    // onChange={(e) => setEmail(e.target.value)}
                    ></input>
                <h3 id="h3">Enter your full name.</h3>
                <input type="text" value={password} className="input-signupwithpwd"
                    placeholder="Name" id="name"
                    // onChange={(e) => setEmail(e.target.value)}
                    ></input>
                <h3 id="h3">Choose a password with at least 8 characters.</h3>
                <input type="password" value={password} className="input-signupwithpwd"
                    placeholder="password" id="password"
                    // onChange={(e) => setEmail(e.target.value)}
                    ></input>
                <button type="submit" value="Submit" id="button-signupwithpwd">Continue</button>
            </form>
            <p id="last-p-signupwithpwd">By creating a Calendly account, you agree to Calendly's Terms and Privacy Policy</p>
        </div>
    )
}

export default SignupWithPassword
