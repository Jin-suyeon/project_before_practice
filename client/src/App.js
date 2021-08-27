import "./App.css";
import Header from "./components/Header";
import InteriorImage from "./components/InteriorImage";
import PageOne from "./components/PageOne";

function App() {
  return (
    <div className="App">
      <div className="App_Banner">
        <img className="PageOne_img" src="/1.jpg" alt="" />
      </div>
      <div className="App_Header_matinText">
        <Header />
        <PageOne />
      </div>
      <InteriorImage />
    </div>
  );
}

export default App;
