import React from "react";
import "../styles/Route.css";

function Light({ cartInbuttonClick, furnitureList }) {
  return (
    <div className="Link">
      <div className="Link_in">
        {furnitureList.light.map((chair) => (
          <div className="Link_list">
            <img className="Link_img" src={chair.img} alt={chair.img} />
            <div className="Link_list_explanation">
              <div className="Link_list_title">{chair.title}</div>
              <div className="Link_list_price">{chair.price}</div>
              <button
                className="Link_list_cart"
                onClick={() => cartInbuttonClick(chair.id, "light")}
              >
                Cart In<span className="Link_list_cart_plus">✕</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Light;
