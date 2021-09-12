import React, { useState } from "react";
import "../styles/Header.css";
import Login from "./Login";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import SubMenu from "../pages/SubMenu";

function Header({ setMydata, cartList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
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
    <div id="Header">
      <div id="Header_in">
        <div id="Header_fst">
          <div id="Header_menu">
            <FontAwesomeIcon id="Header_menu_bar" icon={faBars} />
            <SubMenu />
          </div>
          <Link className="Header_logo_link" to="/">
            <span id="Header_logo_icon">HOMEINT</span>
          </Link>
        </div>

        <div className="Header_login">
          {/* <div className="Header_login_in">
            <span>
              <span id="Header_search">
                <input id="Header_input" type="text"></input>
                <FontAwesomeIcon id="Header_input_icon" icon={faSearch} />
              </span>
            </span>
          </div> */}
          <div className="Header_login_mypage">
            {isLogin ? (
              <Link to="/mypage" className="Header_login_in user">
                <span>
                  <FontAwesomeIcon
                    className="Header_icon"
                    icon={faUserCircle}
                  />
                </span>
              </Link>
            ) : (
              <div className="Header_login_in_page" onClick={openHandler}>
                <span className="">Login</span>
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
                <span id="Header_cart_length">{totalQuantity}</span>
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
