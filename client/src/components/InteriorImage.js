import React from "react";
import "../styles/InteriorImage.css";

function InteriorImage() {
  return (
    <div className="InteriorImage">
      <div className="InteriorImage_in">
        <div className="InteriorImage_main_text up-on-scroll">
          <div>INTERIOR IMAGE</div>
          <div className="underline"></div>
        </div>
        <div className="InteriorImage_img_container up-on-scroll">
          <div className="InteriorImage_img">
            <img src="/3.jpg" alt="" />
            <div className="InteriorImage_img_text">
              <div className="underline_short"></div>
              <div>How can I make the interior</div>
              <div>pretty and easy?</div>
            </div>
          </div>
          <div className="InteriorImage_img">
            <img src="/4.jpg" alt="" />
            <div className="InteriorImage_img_text">
              <div className="underline_short"></div>
              <div>How can I make the interior</div>
              <div>pretty and easy?</div>
            </div>
          </div>
          <div className="InteriorImage_img">
            <img src="/5.jpg" alt="" />
            <div className="InteriorImage_img_text">
              <div className="underline_short"></div>
              <div>How can I make the interior</div>
              <div>pretty and easy?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteriorImage;
