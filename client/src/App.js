/* eslint-disable */
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Chair from "./pages/Chair";
import Desk from "./pages/Desk";
import Shelf from "./pages/Shelf";
import Light from "./pages/Light";
import Main from "./pages/Main";
import Header from "./components/Header";
import Cart from "./pages/CartIn";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Mypage from "./pages/Mypage";
import furnitureList from "./assets/furnitureList";
import CartInModal from "./components/CartInModal";
import Map from "./pages/Map";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartList, setCartList] = useState([]);
  const [cartInModal, setCartInModal] = useState(false);
  const [productTitle, setProductTitle] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    scrollStop();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    scrollStop();
  }, [isLoading]);

  useEffect(() => {
    setCartInModal(true);
    setTimeout(() => {
      setCartInModal(false);
    }, 1000);
  }, [productTitle]);

  //! 로딩중일 때는 스크롤 안되게, 로딩 끝나면 스크롤이 되게하는 함수
  const scrollStop = () => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
    if (!isLoading) {
      document.body.style.overflow = "unset";
    }
  };

  const cartInbuttonClick = (id, menuName) => {
    let choiceItem;

    if (menuName === "chair") {
      choiceItem = furnitureList.chair.filter(
        (product) => product.id === id
      )[0];
    }
    if (menuName === "desk") {
      choiceItem = furnitureList.desk.filter((product) => product.id === id)[0];
    }
    if (menuName === "shelf") {
      choiceItem = furnitureList.shelf.filter(
        (product) => product.id === id
      )[0];
    }
    if (menuName === "light") {
      choiceItem = furnitureList.light.filter(
        (product) => product.id === id
      )[0];
    }

    const cartListInProduct = cartList.filter(
      (product) => product.id === id
    )[0];

    setProductTitle(choiceItem);

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

  //! 스크롤 이벤트
  const isElementUnderBottom = (elem, triggerDiff) => {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  };

  const handleScroll = () => {
    const elems = document.querySelectorAll(".up-on-scroll");
    elems.forEach((elem) => {
      if (isElementUnderBottom(elem, -20)) {
        elem.style.opacity = "0";
        elem.style.transform = "translateY(70px)";
      } else {
        elem.style.opacity = "1";
        elem.style.transform = "translateY(0px)";
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <BrowserRouter>
      {/* {isLoading ? <Loading /> : null} */}
      {isLogin ? (
        <CartInModal cartInModal={cartInModal} productTitle={productTitle} />
      ) : null}
      <Header cartList={cartList} isLogin={isLogin} setIsLogin={setIsLogin} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/chair">
          <Chair
            furnitureList={furnitureList}
            cartInbuttonClick={cartInbuttonClick}
          />
        </Route>

        <Route exact path="/desk">
          <Desk
            furnitureList={furnitureList}
            cartInbuttonClick={cartInbuttonClick}
          />
        </Route>

        <Route exact path="/shelf">
          <Shelf
            furnitureList={furnitureList}
            cartInbuttonClick={cartInbuttonClick}
          />
        </Route>

        <Route exact path="/light">
          <Light
            furnitureList={furnitureList}
            cartInbuttonClick={cartInbuttonClick}
          />
        </Route>

        <Route exact path="/cart">
          <Cart cartList={cartList} setCartList={setCartList} />
        </Route>

        <Route exact path="/mypage">
          <Mypage />
        </Route>

        <Route exact path="/map">
          <Map />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
