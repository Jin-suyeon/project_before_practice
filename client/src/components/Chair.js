import React from "react";
import "../styles/Chair.css";
import ChairList from "./ChairList";

function Chair() {
  return (
    <div className="Chair">
      <div className="Chair_in">
        {ChairList.map((chair) => (
          <div className="Chair_list">
            <img className="Chair_img" src={chair.img} alt={chair.img} />
            <div className="Chair_list_explanation">
              <div className="Chair_list_title">{chair.title}</div>
              <div className="Chair_list_price">{chair.price}</div>
              <button className="Chair_list_cart">Cart In</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chair;
