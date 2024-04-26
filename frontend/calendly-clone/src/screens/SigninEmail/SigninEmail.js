import React, { useState } from "react";
import "./SigninEmail.css";
import logo from "../../components/Images/logo.png";
import axios from "axios";
import GoogleAccount from "../../components/GoogleAccount/GoogleAccount";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SigninEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    if (email !== "") {
      // let path = `/user`
      // history.push(path)

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (user) {
            sessionStorage.setItem("userEmail", JSON.stringify(user.email));
            sessionStorage.setItem(
              "userName",
              JSON.stringify(user.displayName)
            );
            history.push(`/user`);
          }
        })
        .catch((err) => {
          alert("Invalid Credentials");
          console.log(err);
        });
    }
  };

  return (
    <div className="signup">
      <img className="logo" src={logo} alt="logo" />
      <p id="p-signup">Welcome back.</p>

      <form className="inner-signup" method="POST" onSubmit={submitHandler}>
        <div id="signin-Google-Button">
          <GoogleAccount>Log in with Google</GoogleAccount>
          {/* <p className="p-signup">Or</p> */}
        </div>
        <p id="or">-------------------or-------------------</p>
        <h3 id="h3">Enter your email to get started.</h3>
        <input
          type="email"
          value={email}
          className="input-signin"
          placeholder="email address"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          value={password}
          className="input-signin"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" value="Submit" id="button-signup">
          Continue
        </button>
        <p className="existing-account">
          Don't have an account?
          <a id="a-signup" href="./signup">
            {" "}
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default SigninEmail;
