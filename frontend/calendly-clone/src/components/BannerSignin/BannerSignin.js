import React from 'react'
import img from '../Images/banner2.png'
import './BannerSignin.css'
import Button from '../Button/Button'
import { useHistory } from 'react-router'

function BannerSignin({email}) {

    const history = useHistory();
    const signinHandler = () =>{
        let path = `/signin/email`
        history.push(path)
    }
    return (
        <div className="banner">
            <div className="content">
                <h1 class="h1-banner">Welcome back to Calendly</h1>
                <p class="p-tag">Log in to your account.   </p>
                <Button onClick={signinHandler}>Log In</Button>
                <p class="p-tag-banner">Don't have an account? 
                    <a id="a-tag"href="/signup"> Signup</a>
                </p>
            </div>
            <img className="img-banner" src={img} alt="banner"></img>
            
        </div>
    )
}

export default BannerSignin;    