import React, { useState } from "react";
import "../styles/Header.css";
import Login from "./Login";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

function Header({ setMydata, cartList, isLogin, setIsLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  const [accessToken, setAccessToken] = useState("");

  const openHandler = () => {
    setIsOpen(!isOpen);
    scrollStop();
  };

  //! 로그인창 떳을 때 스크롤 안되게 하는 법!
  const scrollStop = () => {
    if (isOpen === false) {
      document.body.style.overflow = "hidden";
    }
    if (isOpen === true) {
      document.body.style.overflow = "unset";
    }
  };

  const totalQuantity = cartList
    .map((product) => product.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="Header">
      <div className="Header_in">
        <div className="Header_fst">
          <Link className="Header_logo_link" to="/">
            <span className="Header_logo_icon">HOMEINT</span>
          </Link>
        </div>

        <div className="Header_menu">
          <Link to="/chair">CHAIR</Link>
          <Link to="/desk">DESK</Link>
          <Link to="/shelf">SHELF</Link>
          <Link to="/light">LIGHT</Link>
          <Link to="/map">MAP</Link>
        </div>

        <div className="Header_login">
          <div className="Header_login_mypage">
            {isLogin ? (
              <Link to="/mypage" className="Header_login_in user">
                <div className="Header_login_in_page">
                  <div>MYPAGE</div>
                </div>
              </Link>
            ) : (
              <div className="Header_login_in_page" onClick={openHandler}>
                <span>LOGIN</span>
              </div>
            )}
          </div>
          {isLogin ? (
            <div className="Header_login_in">
              <Link to="/cart">
                <FontAwesomeIcon
                  className="Header_icon cart"
                  icon={faShoppingBag}
                />
                <span className="Header_cart_length">{totalQuantity}</span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
      {isOpen ? (
        <Login
          setMydata={setMydata}
          setIsLogin={setIsLogin}
          scrollStop={scrollStop}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          setAccessToken={setAccessToken}
        />
      ) : null}
    </div>
  );
}

export default Header;
