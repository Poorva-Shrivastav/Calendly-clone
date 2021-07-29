import React from 'react'
import img from '../Images/banner1.png'
import './Banner.css'
import Button from '../Button/Button'
import { useHistory } from 'react-router'

function Banner() {

    const history = useHistory();
    const signupHandler = () =>{
        let path = `/signup`
        history.push(path)
    }
    return (
        <div className="banner">
            <div className="content">
                <h1 id="h1-banner">Easy scheduling ahead</h1>
                <p id="p-tag">Calendly is your hub for scheduling mettings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work</p>
                <Button onClick={signupHandler}>Sign Up</Button>
            </div>
            <img className="img" src={img} alt="banner"></img>
            
        </div>
    )
}

export default Banner
