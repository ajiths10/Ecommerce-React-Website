import React, { useState, useContext, Fragment } from "react";
import { Redirect, Route , Switch } from "react-router-dom";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Header/Heaer";
import MainHeading from "./Components/MainHeading/MainHeading";
import MusicHome from "./Pages/Music/MusicHome";
import About from "./Pages/About/About";
import CartContext from "./Store/Cart--context";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import ContactForm from "./Pages/ContactUs/ContactForm";
import ItemPage from "./Pages/SubPages/ItemPage";
import AuthForm from "./Pages/Auth/AuthForm";

function App() {
  const [Cartstate, setCartState] = useState(false);
  const CTX = useContext(CartContext);

  const cartHandler = () => {
    setCartState(true);
  };

  const cartFalseHandler = () => {
    setCartState(false);
  };
const isLogin =CTX.isLogin;


  return (
    <Fragment>
      {Cartstate && <Cart onClick={cartFalseHandler} />}
      <Header onClick={cartHandler} />
      <MainHeading />
      <Switch>
      <Route path="/About">
        <About />
      </Route>

       <Route path="/Store" exact>
        {isLogin && <MusicHome />}
        {!isLogin&& <Redirect to='/userLogin' /> }
      </Route>

      <Route path="/Home">
        <Home />
      </Route>

      <Route path="/contactus">
        <ContactForm />
      </Route>

      <Route path="/Store/:productId">
        { isLogin && <ItemPage  />}
        {!isLogin && <Redirect to='/userLogin' /> }
      </Route>
      <Route path='/userlogin'>
        <AuthForm />
      </Route>
      <Route path='*' exact>
        <Redirect to='/userlogin'></Redirect>
      </Route>
      </Switch>
      <Footer />
      </Fragment>
  );
}

export default App;
