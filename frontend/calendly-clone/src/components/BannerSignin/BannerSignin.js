import React, {useState} from 'react'
import img from '../Images/banner2.png'
import './BannerSignin.css'
import Button from '../Button/Button'
import { useHistory } from 'react-router'

function BannerSignin({email}) {
    const [loginEmail, setLoginEmail] = useState('')
    const history = useHistory();

    const signinHandler = () =>{
        // let path = `/signin/${loginEmail}`
        let path = `/signin`
        history.push(path)
    }
    return (
        <div className="banner">
            <div className="content">
                <h1 class="h1-banner">Welcome back to Calendly</h1>
                <p class="p-tag">Log in to your account.   </p>
                {/* <Button onClick={signinHandler}>Log In</Button> */}
                <div className="signin-banner">
                    <input type="email" id="input-banner-signin"  value={loginEmail} placeholder="Enter your email" onChange={(e) => setLoginEmail(e.target.value)}/>
                    <button id="button-banner-signin" onClick={signinHandler}>Log In</button>
                </div>
                <p class="p-tag-banner">Don't have an account? 
                    <a id="a-tag"href="/signup"> Signup</a>
                </p>
            </div>
            <img className="img-banner" src={img} alt="banner"></img>
            
        </div>
    )
}

export default BannerSignin;    