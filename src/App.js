import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Header/Heaer";
import MainHeading from "./Components/MainHeading/MainHeading";
import MusicHome from "./Components/Music/MusicHome";
import CartProvider from "./Store/CartProvider";


function App() {
  const [Cartstate, setCartState]= useState(false);
  
  const cartHandler = () =>{
    setCartState(true);
  }

  const cartFalseHandler=()=>{
    setCartState(false);
  }


  return (
    <CartProvider>
      { Cartstate && <Cart onClick={cartFalseHandler} />}
      <Header onClick={cartHandler} />
      <MainHeading />
      <MusicHome />
    </CartProvider>
  );
}

export default App;
