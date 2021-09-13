import "../styles/Cart.css";

function CartIn({ cartList, setCartList }) {
  const plusMinusButton = (e, productId) => {
    const checkProduct = cartList.filter(
      (product) => product.id === productId
    )[0];

    if (e.target.innerText === "+") {
      checkProduct.quantity++;
      checkProduct.total = checkProduct.total + checkProduct.price;
      setCartList([...cartList]);
    }
    if (e.target.innerText === "-" && checkProduct.quantity > 1) {
      checkProduct.quantity--;
      checkProduct.total = checkProduct.total - checkProduct.price;
      setCartList([...cartList]);
    }
  };

  const deleteProduct = (id) => {
    const sameProduct = cartList.filter((product) => product.id !== id);
    setCartList(sameProduct);
  };

  const totalPrice = cartList
    .map((product) => product.total)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="cartIn_container">
      <div className="cartIn">
        <table className="cartIn_table">
          <thead>
            <th>item</th>
            <th>title</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
          </thead>
          <tbody className="cartIn_none">
            <th>item</th>
            <th>title</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
          </tbody>

          {cartList.map((item) => (
            <tbody>
              <td className="cartIn_item_img">
                <img src={item.img} alt={item.id} />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className="plus-Minus-button"
                  onClick={(e) => plusMinusButton(e, item.id)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="plus-Minus-button"
                  onClick={(e) => plusMinusButton(e, item.id)}
                >
                  +
                </button>
              </td>
              <td>
                {item.total}
                <div
                  onClick={() => deleteProduct(item.id)}
                  className="cartIn_delete"
                >
                  ✕
                </div>
              </td>
            </tbody>
          ))}
        </table>
        <div className="cartIn_total">
          <div>
            Total: <span>{totalPrice}</span>
          </div>
          <button>Buy Products</button>
        </div>
      </div>
    </div>
  );
}

export default CartIn;
