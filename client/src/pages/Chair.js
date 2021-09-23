import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions";
import "../styles/Route.css";

function Chair({ cartInbuttonClick, furnitureList }) {
  const state = useSelector((state) => state.itemReducer);
  const { items, cartItems } = state;
  const dispatch = useDispatch();

  const cartInbuttonClick = (itemId, name) => {
    dispatch(addToCart(itemId, name));
  };
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
                Cart In<span className="Link_list_cart_plus">✕</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chair;
