import React, {useState} from 'react'
import {Menu} from './Menu'
import Button from '../Button/Button' 
import './NavbarPostLogin.css'
import logo from '../Images/logoC.jpeg'
import { useHistory } from 'react-router-dom'
import { GoogleLogout} from 'react-google-login'

function NavbarPostLogin() {
    const [clicked, setClicked] = useState(false)
    const [isSignedIn, setIsSignedIn] = useState(true)

    const menuItemClicked = (e) => setClicked(e.target)
    
    const history = useHistory()

    const logoutSuccessHandler = (res) =>{        
        setIsSignedIn(false)
        sessionStorage.clear();
        console.log(res);
        history.push('/')
    }

    const logoutFailureHandler = (err) => console.log(err)

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
           <div className="logout-button">               
                <GoogleLogout
                    clientId= {process.env.REACT_APP_CLIENT_ID}
                    buttonText="Logout"
                    onLogoutSuccess={logoutSuccessHandler}
                    onFailure={logoutFailureHandler}
                    icon={false}

                    >
                </GoogleLogout>
            </div>
        </div>
    )
}

export default NavbarPostLogin
