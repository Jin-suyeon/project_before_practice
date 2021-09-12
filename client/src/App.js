import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Chair from "./pages/Chair";
import Main from "./pages/Main";
import Header from "./components/Header";
import Cart from "./pages/CartIn";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Mypage from "./components/Mypage";
import ChairList from "./assets/ChairList";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mydata, setMydata] = useState({});
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    scrollStop();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    scrollStop();
  }, [isLoading]);

  //! 로딩중일 때는 스크롤 안되게, 로딩 끝나면 스크롤이 되게하는 함수
  const scrollStop = () => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
    if (!isLoading) {
      document.body.style.overflow = "unset";
    }
  };

  const cartInbuttonClick = (id) => {
    const choiceItem = ChairList.filter((chair) => chair.id === id)[0];

    const cartListInProduct = cartList.filter(
      (product) => product.id === id
    )[0];

    if (cartList.length === 0) {
      setCartList([{ ...choiceItem, quantity: 1, total: choiceItem.price }]);
    } else {
      if (cartListInProduct) {
        cartListInProduct.quantity++;
        cartListInProduct.total =
          cartListInProduct.total + cartListInProduct.price;
        setCartList([...cartList]);
      } else
        setCartList([
          ...cartList,
          { ...choiceItem, quantity: 1, total: choiceItem.price },
        ]);
    }
  };

  return (
    <BrowserRouter>
      {/* {isLoading ? <Loading /> : null} */}
      <Header cartList={cartList} setMydata={setMydata} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/chair">
          <Chair cartInbuttonClick={cartInbuttonClick} />
        </Route>

        <Route exact path="/desk">
          <Chair />
        </Route>

        <Route exact path="/shelf">
          <Chair />
        </Route>

        <Route exact path="/light">
          <Chair />
        </Route>

        <Route exact path="/cart">
          <Cart cartList={cartList} setCartList={setCartList} />
        </Route>

        <Route exact path="/mypage">
          <Mypage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
