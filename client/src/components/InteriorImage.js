import React from "react";
import "../styles/InteriorImage.css";

function InteriorImage() {
  return (
    <div className="InteriorImage">
      <div className="InteriorImage_in">
        <div className="InteriorImage_main_text">Interior Image</div>
        <div className="InteriorImage_img_container">
          <span className="InteriorImage_img">
            <img src="/2.jpg" alt="" />
          </span>
          <span className="InteriorImage_img">
            <img src="/3.jpg" alt="" />
          </span>
          <span className="InteriorImage_img">
            <img src="/4.jpg" alt="" />
          </span>
          <span className="InteriorImage_img">
            <img src="/5.jpg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default InteriorImage;
