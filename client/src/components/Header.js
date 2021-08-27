import React, { useState } from "react";
import "../styles/Header.css";
import Login from "./Login";
import { BrowserRouter, Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <div className="Header">
        <div className="Header_in">
          <div className="Header_logo">
            <span>HOMEINT</span>
          </div>
          <div className="Header_menu">
            <span>chair</span>
            <span>desk</span>
            <span>shelf</span>
            <span>light</span>
          </div>
          <div className="Header_login">
            <div className="Header_login_in">
              <span onClick={openHandler}>Login</span>
            </div>
            <div className="Header_login_in">
              <span>Cart</span>
            </div>
          </div>
        </div>
        {isOpen ? <Login setIsOpen={setIsOpen} isOpen={isOpen} /> : null}
      </div>
    </BrowserRouter>
  );
}

export default Header;
