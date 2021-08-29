import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import Login from "./Login";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Chair from "./Chair";

function Header({ clickMenu, clickMenuHome }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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

  //! header 변경 함수
  //! window.scrollY : 문서가 수직으로 얼마나 스크롤 됐는지 픽셀 단위로 반환한다
  //! document.documentElement.scrollTop : y축 방향으로 스크롤한 거리
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <BrowserRouter>
      <div className={scrollPosition > 70 ? "Header_change" : "Header"}>
        <div className="Header_in">
          <Link className="Header_logo_link" style={{ textDecoration: "none" }}>
            <div
              className={
                scrollPosition > 70 ? "Header_logo_change" : "Header_logo"
              }
            >
              <Link onClick={clickMenuHome} className="Header_logo_link" to="/">
                <span>HOMEINT</span>
              </Link>
            </div>
          </Link>
          <div
            className={
              scrollPosition > 70 ? "Header_menu_change" : "Header_menu"
            }
          >
            <Link className="Header_menu_link" to="/chair">
              <span onClick={clickMenu}>chair</span>
            </Link>
            <Link className="Header_menu_link">
              <span onClick={clickMenu}>desk</span>
            </Link>
            <Link className="Header_menu_link">
              <span onClick={clickMenu}>shelf</span>
            </Link>
            <Link className="Header_menu_link">
              <span onClick={clickMenu}>light</span>
            </Link>
          </div>
          <div className="Header_login">
            <div
              className={
                scrollPosition > 70
                  ? "Header_login_in_change"
                  : "Header_login_in"
              }
              onClick={openHandler}
            >
              <span>Login</span>
            </div>
            <div
              className={
                scrollPosition > 70
                  ? "Header_login_in_change"
                  : "Header_login_in"
              }
            >
              <span>Cart</span>
            </div>
          </div>
        </div>
        {isOpen ? (
          <Login
            scrollStop={scrollStop}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        ) : null}
      </div>
      <Switch>
        <Route exact path="/chair">
          <Chair />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
