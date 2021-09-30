import React, {useState} from 'react'
import logo from '../../components/Images/logo.png'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

function SigninPasswordRequired({loginEmail}) {
    const [password, setPassword] = useState('')

    console.log(`I'm from SigninPass - ${loginEmail}`)
    const history = useHistory()
    const submitHandler = (e) => {
        e.preventDefault();

        if(password!== ''){
            // let path = `/user`
            // history.push(path)

            const loginPassword = {loginEmail:loginEmail, password: password}
            axios.post('http://localhost:8000/api/signinpwd', loginPassword)
                .then(res => { console.log(res.data)
                window.location = '/user'
                })
                .catch(err => {
                    alert("Invalid Password")
                    console.log(err)
                })

        }
    }

    return (
         <div className="signup">
            <img className="logo" src={logo} alt="logo" />
            <p id="p-signup">Welcome back,{loginEmail}</p>
            <p>(This is not me.)</p>

            <form className="inner-signup" method="POST" onSubmit={submitHandler}>
                <h3 id="h3">Enter your  password.</h3>
                <input type="password" value={password} id="input"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit" value="Submit" id="button-signup">Continue</button>
                <p className="existing-account"> I forgot my password. Please send me a recovery email.</p>
                <p className="existing-account">Don't have an account?
                <a id="a-signup" href="./signin/email">Sign up.</a></p>
            </form>
        </div>
    )
}

export default SigninPasswordRequired

