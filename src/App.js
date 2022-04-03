import React, { useState } from "react";
import { Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Header/Heaer";
import MainHeading from "./Components/MainHeading/MainHeading";
import MusicHome from "./Pages/Music/MusicHome";
import About from "./Pages/About/About";
import CartProvider from "./Store/CartProvider";

function App() {
  const [Cartstate, setCartState] = useState(false);

  const cartHandler = () => {
    setCartState(true);
  };

  const cartFalseHandler = () => {
    setCartState(false);
  };

  return (
    <CartProvider>
      {Cartstate && <Cart onClick={cartFalseHandler} />}
      <Header onClick={cartHandler} />
      <MainHeading />
      <Route path='/About' >
        <About />
      </Route>
      <Route path='/Store' >
        <MusicHome />
      </Route>
    </CartProvider>
  );
}

export default App;
