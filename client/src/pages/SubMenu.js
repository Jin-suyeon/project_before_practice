import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function SubMenu() {
  return (
    <div id="Submenu">
      <div id="Submenu_in">
        <Link className="SubMenu_link" to="/chair">
          <span className="SubMenu_text">chair</span>
        </Link>
        <Link className="SubMenu_link" to="/desk">
          <span className="SubMenu_text">desk</span>
        </Link>
        <Link className="SubMenu_link" to="shelf">
          <span className="SubMenu_text">shelf</span>
        </Link>
        <Link className="SubMenu_link" to="light">
          <span className="SubMenu_text">light</span>
        </Link>
      </div>
    </div>
  );
}

export default SubMenu;
