import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import InteriorImage from "./components/InteriorImage";
import PageOne from "./components/PageOne";

function App() {
  const [menu, setMenu] = useState(false);

  const clickMenu = () => {
    setMenu(true);
  };

  const clickMenuHome = () => {
    setMenu(false);
  };
  return (
    <BrowserRouter>
      <Route exact path="/">
        <div className="App">
          {!menu ? (
            <div className="App_Banner">
              <img className="PageOne_img" src="/1.jpg" alt="" />
            </div>
          ) : null}
          <div className="App_Header_matinText">
            <Header clickMenu={clickMenu} clickMenuHome={clickMenuHome} />
            {!menu ? <PageOne /> : null}
          </div>
          {!menu ? <InteriorImage /> : null}
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
