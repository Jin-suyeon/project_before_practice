import React from "react";
import "../styles/Route.css";

function Chair({ cartInbuttonClick, furnitureList }) {
  return (
    <div className="Link">
      <div className="Link_in">
        {furnitureList.chair.map((chair) => (
          <div className="Link_list">
            <img className="Link_img" src={chair.img} alt={chair.img} />
            <div className="Link_list_explanation">
              <div className="Link_list_title">{chair.title}</div>
              <div className="Link_list_price">{chair.price}</div>
              <button
                className="Link_list_cart"
                onClick={() => cartInbuttonClick(chair.id, "chair")}
              >
                Cart In
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chair;
