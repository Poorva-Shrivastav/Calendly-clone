import React, {useState} from 'react'
import {Menu} from './Menu'
import Button from '../Button/Button' 
import './NavbarPostLogin.css'
import logo from '../Images/logoC.jpeg'
import { useHistory } from 'react-router-dom'

function NavbarPostLogin() {
    const [clicked, setClicked] = useState(false)

    const menuItemClicked = (e) => {
        setClicked(e.target)
    }

    return (
        <div class="navbar-user">
           <img class="logo-user" src={logo} alt="logo"/>
           <ul className="menu-icon-user">
               {
                   Menu.map((items,index) => {
                       return(
                           <li key={index}>
                                <a className={items.link} href={items.url}>{items.title}</a>
                            </li>
                        )
                    })
                }
           </ul>
        
        </div>
    )
}

export default NavbarPostLogin
