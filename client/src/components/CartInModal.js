import React from "react";
import "../styles/CartInModal.css";

function CartInModal({ productTitle, cartInModal }) {
  return (
    <div
      className={
        cartInModal
          ? "cart_in_modal-container cartmodal-container-change"
          : "cart_in_modal-container"
      }
    >
      <div className="cart_in_modal">
        <div>
          <span>{productTitle.title}</span>상품
        </div>
        <div>1개가 장바구니에 추가 되었습니다</div>
      </div>
    </div>
  );
}

export default CartInModal;
