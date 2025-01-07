import Navbar from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Item from "./components/Item";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
      </div>
      <div className="content">
        <Cart />
      </div>
      <div className="content">
        <Item />
      </div>
    </div>
  );
}

export default App;
