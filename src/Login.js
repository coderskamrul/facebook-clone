import React, { useEffect, useState } from "react";
import "./Login.css";
//import Button from '@material-ui/core/Button';
//import fire from './firebase'

function Login({ name }) {
  const [email, setEmail] = useState("");
  let emailValue = '';

    const emailHandel = (e) => {
      emailValue = e.target.value;
     console.log(emailValue);
  }
  

    useEffect(() => {
        name(email);
      }, [email]);

  return (
    <div className="f__page">
      <span class="f__pageBody">
        <div class="f__header">
          <img
            class="f__logo"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt=""
          />
          <div class="f__subHeader">
            Facebook helps you connect and share <br />
            with the people in your life.
          </div>
        </div>

        <div class="f__body">
          <form action="" class="f__loginForm">
            <div class="f__loginFormInputGroup">
              <input
                type="text"
               onChange={emailHandel}
                //value={email}
                class="f__loginFormUsername"
                placeholder="Email address or phone number"
              />
            </div>
            <div class="f__loginFormInputGroup">
              <input
                type="password"
                id="passwordInput"
                class="f__loginFormPassword"
                placeholder="password"
              />
              <button
                type="button"
                id="passwordToggleBtn"
                class="f__loginFormShowPasswordToggleBtn"
                // onClick={() => setState("something")}
              >
                <span class="f__icon f__eyeIcon"></span>
              </button>
            </div>
             <button onClick={(e)=>{
                 e.preventDefault();
                 setEmail(emailValue)
                 }} class="f__loginFormLogInButton">Log In</button> 
            <a href="" class="f__loginFormLink">
              {" "}
              Forgotten password?{" "}
            </a>
            <div class="f__divider"></div>
            <a class="f__signUpButton">Create New Account</a>
          </form>
          <span class="f__createPageLinkContainer">
            <a href="" class="f__createPageLink">
              {" "}
              Create a Page{" "}
            </a>
            for a celebrity, band or business.
          </span>
        </div>
      </span>
    </div>
  );
}

export default Login;
  // const loog=()=>{
  //     fire.auth().signInWithEmailAndPassword("iughdfjg@gmial.com", "passyujyword")
  //     .then((userCredential) => {
  //       // Signed in
  //       var user = userCredential.user;
  //       console.log(userCredential);
  //       // ...
  //     })
  //     .catch((error) => {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //     });
  // }