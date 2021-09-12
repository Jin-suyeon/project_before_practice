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
        <table className="cartIn_items">
          <thead>
            <td>item</td>
            <td></td>
            <td>price</td>
            <td>quantity</td>
            <td>total</td>
            <td></td>
          </thead>
          <br />
          {cartList.map((product) => (
            <tbody>
              <td className="cartIn_items_img">
                <img src={product.img} alt={product.title} />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <button
                  onClick={(e) => {
                    plusMinusButton(e, product.id);
                  }}
                >
                  -
                </button>
                {product.quantity}
                <button onClick={(e) => plusMinusButton(e, product.id)}>
                  +
                </button>
              </td>
              <td>{product.total}</td>
              <td>
                <div
                  onClick={() => deleteProduct(product.id)}
                  className="cartIn_delete"
                >
                  x
                </div>
              </td>
            </tbody>
          ))}
        </table>
        <div className="cartIn_total_price">
          <div>
            Total: <span>{totalPrice}₩</span>
          </div>
        </div>
        <div className="cartIn_buy_button">
          <button>Buy Product</button>
        </div>
      </div>
    </div>
  );
}

export default CartIn;
