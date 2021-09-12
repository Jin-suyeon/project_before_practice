import "../styles/Login.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function Login({
  setIsOpen,
  isOpen,
  scrollStop,
  setIsLogin,
  setAccessToken,
  setMydata,
}) {
  const backgroundEl = useRef(null);
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [loginErr, setLoginErr] = useState(true);

  const backgroundClick = (e) => {
    if (e.target === backgroundEl.current) {
      setIsOpen(!isOpen);
      scrollStop();
    }
  };

  const inputHandler = (e, num) => {
    if (num === 1) {
      setId(e.target.value);
    }
    if (num === 2) {
      setPwd(e.target.value);
    }
  };

  const loginHandler = () => {
    axios({
      method: "POST",
      url: "https://localhost:4000/login",
      data: {
        userId: id,
        password: pwd,
      },
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLogin(true);
        setAccessToken(res.data.data.accessToken);
        setIsOpen(false);
        document.body.style.overflow = "unset";
      })
      .catch((err) => {
        setLoginErr(false);
        setTimeout(() => {
          setLoginErr(true);
        }, 1000);
      });
  };

  console.log(loginErr);

  return (
    <div
      onClick={(e) => backgroundClick(e)}
      ref={backgroundEl}
      className="Login"
    >
      <div className="Login_in">
        <div className="Login_page">
          <div className="Login_page_main_text">Log In</div>
          <input
            onChange={(e) => inputHandler(e, 1)}
            className={loginErr ? "Login_input" : "Login_input input_change"}
            type="text"
            placeholder="ID"
          />
          <input
            onChange={(e) => inputHandler(e, 2)}
            className={loginErr ? "Login_input" : "Login_input input_change"}
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
          <button className="Login_button" onClick={() => loginHandler()}>
            Log In
          </button>
        </div>
        <div className="Login_sign_up">
          <div className="Login_sign_up_in">
            <span className="Login_sign_up_text">Don't have an account?</span>
            <span className="Login_sign_up_button">Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
