import React from "react";
import InteriorBigImage from "../components/InteriorBigImage";
import InteriorImage from "../components/InteriorImage";
import "../styles/Main.css";

function Main() {
  return (
    <div className="Main">
      <div className="Main_in">
        <div className="Main_img"></div>
      </div>
      <InteriorImage />
      <InteriorBigImage />
    </div>
  );
}

export default Main;
