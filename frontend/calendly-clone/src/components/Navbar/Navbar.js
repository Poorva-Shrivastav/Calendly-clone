import React, {useState} from 'react'
import {MenuItems} from './MenuItems'
import Button from '../Button/Button' 
import './Navbar.css'
import logo from '../Images/logo.png'
import { useHistory } from 'react-router-dom'

function Navbar() {
    const [clicked, setClicked] = useState(false)
    
    const history = useHistory();
    const signupHandler = () =>{
        let path = `/signup`
        history.push(path)
    }

    const signinHandler = () =>{
        let path = `/signin`
        history.push(path)
    }


    const menuItemClicked = (e) => {
        setClicked(e.target)
    }

    return (
        <div class="navbar-list">
           <img class="logo" src={logo} alt="logo"/>
           <ul className="menu-icon">
               {
                   MenuItems.map((items,index) => {
                       return(
                           <li key={index}>
                                <a className={items.link} href={items.url}>{items.title}</a>
                            </li>
                        )
                    })
                }
           </ul>
           <div className="signin-up">
                <p id="login" onClick={signinHandler}>Login</p>
                <Button onClick={signupHandler}>Sign up free</Button>
           </div>
        </div>
    )
}

export default Navbar
