import React from "react";
import "../styles/Mypage.css";

function Mypage() {
  return (
    <div className="Mypage_container">
      <div className="Mypage">
        <div className="Mypage_left">
          <div className="Mypage_left_profile">
            <img src="/girl.jpeg" alt="" />
            <div>Kimcoding</div>
          </div>
          <button>LOGOUT</button>
        </div>
        <div className="Mypage_right"></div>
      </div>
    </div>
  );
}

export default Mypage;
