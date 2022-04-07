import React, { useState } from "react";
import { Route , Switch } from "react-router-dom";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Header/Heaer";
import MainHeading from "./Components/MainHeading/MainHeading";
import MusicHome from "./Pages/Music/MusicHome";
import About from "./Pages/About/About";
import CartProvider from "./Store/CartProvider";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import ContactForm from "./Pages/ContactUs/ContactForm";
import ItemPage from "./Pages/SubPages/ItemPage";
import AuthForm from "./Pages/Auth/AuthForm";

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
      <Switch>
      <Route path="/About">
        <About />
      </Route>

      <Route path="/Store" exact>
        <MusicHome />
      </Route>

      <Route path="/Home">
        <Home />
      </Route>

      <Route path="/contactus">
        <ContactForm />
      </Route>

      <Route path="/Store/:productId">
        <ItemPage  />
      </Route>
      <Route path='/userlogin'>
        <AuthForm />
      </Route>
      </Switch>
      <Footer />
    </CartProvider>
  );
}

export default App;
