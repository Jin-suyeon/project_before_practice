import "../styles/Login.css";
import React, { useRef } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp";

function Login({ setIsOpen, isOpen, scrollStop }) {
  const backgroundEl = useRef(null);

  const backgroundClick = (e) => {
    if (e.target === backgroundEl.current) {
      setIsOpen(!isOpen);
      scrollStop();
    }
  };
  return (
    <BrowserRouter>
      <div
        onClick={(e) => backgroundClick(e)}
        ref={backgroundEl}
        className="Login"
      >
        <div className="Login_in">
          <div className="Login_page">
            <div className="Login_page_main_text">Log In</div>
            <input className="Login_input" type="text" placeholder="ID" />
            <input
              className="Login_input"
              type="password"
              placeholder="password"
            />
            <div className="Login_checkbox_container">
              <div className="Login_checkbox_in">
                <input type="checkbox" />
                {/* <input className="dry" type="checkbox" /> */}
                <span className="Login_ckeckbox">Remember me</span>
              </div>
              <span className="Login_password_forgot">Forgot Password</span>
            </div>
            <button className="Login_button">Log In</button>
          </div>
          <div className="Login_sign_up">
            <div className="Login_sign_up_in">
              <span className="Login_sign_up_text">Don't have an account?</span>
              <Link className="Login_signUp_link" to="/signUp">
                <span className="Login_sign_up_button">Sign up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Login;
