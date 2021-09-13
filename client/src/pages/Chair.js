import React from "react";
import "../styles/Route.css";

function Chair({ cartInbuttonClick, furnitureList }) {
  return (
    <div id="Link">
      <div id="Link_in">
        {furnitureList.chair.map((chair) => (
          <div id="Link_list">
            <img id="Link_img" src={chair.img} alt={chair.img} />
            <div id="Link_list_explanation">
              <div id="Link_list_title">{chair.title}</div>
              <div id="Link_list_price">{chair.price}</div>
              <button
                id="Link_list_cart"
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
