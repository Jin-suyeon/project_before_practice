import React from "react";
import "../styles/Route.css";
import ChairList from "../assets/ChairList";

function Chair({ cartInbuttonClick }) {
  return (
    <div id="Link">
      <div id="Link_in">
        {ChairList.map((chair) => (
          <div id="Link_list">
            <img id="Link_img" src={chair.img} alt={chair.img} />
            <div id="Link_list_explanation">
              <div id="Link_list_title">{chair.title}</div>
              <div id="Link_list_price">{chair.price}</div>
              {/* <select id="Link_options">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select> */}
              <button
                id="Link_list_cart"
                onClick={() => cartInbuttonClick(chair.id)}
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
