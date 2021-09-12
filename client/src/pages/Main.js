import React from "react";
import InteriorImage from "../components/InteriorImage";
import "../styles/Main.css";

function Main() {
  return (
    <div id="Main">
      <div id="Main_in">
        <div className="Main_black_opacity" />
        <div className="Main_img" src="/1.jpg" alt="">
          <div id="Main_text_container">
            <div className="Main_text">모두의 인테리어 HOMEINT</div>
            <div className="Main_sub_text">
              모두들 인테리어가 어렵다고만 생각하시지만 전혀 어렵지 않습니다
              그렇습니다 그렇고요 그랬답니다
            </div>
            <div className="Main_sub_text">
              모두 같이 만들어갈 수 있습니다 그렇습니다 그렇고요 그렇답니다
            </div>
            <div className="Main_sub_text">
              모두들 인테리어가 어렵다고만 생각하시지만
            </div>
          </div>
        </div>
      </div>
      <InteriorImage />
    </div>
  );
}

export default Main;
