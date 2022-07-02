import React, { useState, useContext, Fragment, Suspense } from "react";
import { Redirect, Route , Switch } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import { SnackbarProvider } from 'notistack'
import Header from "./Components/Header/Heaer";
import CartContext from "./Store/Cart--context";
import Footer from "./Components/Footer/Footer";
import AuthForm from "./Pages/Auth/AuthForm";
import Order from "./Components/Orders/Index";

const MusicHome = React.lazy(()=>import ("./Pages/Music/MusicHome"));
const About = React.lazy(()=>import("./Pages/About/About"));
const Home = React.lazy(()=>import("./Pages/Home/Home"));
const ContactForm = React.lazy(()=>import('./Pages/ContactUs/ContactForm'));
const ItemPage = React.lazy(()=>import('./Pages/SubPages/ItemPage'));
const MainHeading = React.lazy(()=>import('./Components/MainHeading/MainHeading'))

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

  const localData = localStorage.getItem('JWTTOKEN');
  console.log(localData); 

  return (
    <Fragment>
      <SnackbarProvider maxSnack={3} >
      <Suspense fallback={<div><h3>Loading...</h3></div>}>
      {Cartstate && <Cart onClick={cartFalseHandler} />}
      <Header onClick={cartHandler} />
      <MainHeading />
      <Switch>
      <Route path="/About">
        <About />
      </Route>

       <Route path="/Store" exact>
        {CTX.isLogin && <MusicHome />}
        {!CTX.isLogin && <Redirect to='/userLogin' /> }
      </Route>

      <Route path="/Home">
        <Home />
      </Route>

      <Route path="/orders">
        <Order />
      </Route>

      <Route path="/contactus">
        <ContactForm />
      </Route>

      <Route path="/Store/:productId">
        { isLogin && <ItemPage  />}
        {!isLogin && <Redirect to='/userLogin' /> }
      </Route>

       {!isLogin && <Route path='/userlogin'>
        <AuthForm />
      </Route>}

      <Route path='*' exact>
        {isLogin && <Redirect to='/Store'></Redirect>}
        {!isLogin && <Redirect to='/userlogin'></Redirect>}
      </Route>
      </Switch>
      
      <Footer />
      </Suspense>
      </SnackbarProvider>
      </Fragment>
  );
}

export default App;
