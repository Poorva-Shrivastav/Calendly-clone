import React, { useState } from "react";
import { Menu } from "./Menu";
import Button from "../Button/Button";
import "./NavbarPostLogin.css";
// import logo from '../Images/logoC.jpeg'
import logo from "../Images/logo.png";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function NavbarPostLogin() {
  const [clicked, setClicked] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true);

  const menuItemClicked = (e) => setClicked(e.target);

  const history = useHistory();

  const logoutSuccessHandler = (res) => {
    setIsSignedIn(false);
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logoutFailureHandler = (err) => console.log(err);

  return (
    <div class="navbar-user">
      <img class="logo-user" src={logo} alt="logo" />
      <ul className="menu-icon-user">
        {Menu.map((items, index) => {
          return (
            <li key={index}>
              <a className={items.link} href={items.url}>
                {items.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div id="logout-div">
        <button id="logout-button" onClick={handleSignout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavbarPostLogin;
