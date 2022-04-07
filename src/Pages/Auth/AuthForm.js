import { useState, useRef,useContext } from "react";
import { useHistory } from "react-router-dom";

import CartContext from "../../Store/Cart--context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const CTX = useContext(CartContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try{
    if (isLogin) {
      setLoading(true);
         const res =  await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDYvgMIyWWmOzJ3IXis-uRWEguL3xNOPww",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      if (res.ok) {
        setLoading(false);
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        const data = await res.json();
        console.log(data)
         localStorage.setItem('JWTTOKEN' , data.idToken);
         localStorage.setItem('userID' , data.localId);
         CTX.loginStateCall(true);
         history.replace('/Store');
      }else{
        const data = await res.json();
        setLoading(false); 
        alert(data.error.message);
      }
    }else{
      setLoading(true);
      const res =  await  fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDYvgMIyWWmOzJ3IXis-uRWEguL3xNOPww",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
   )
   if (res.ok) {
     setLoading(false);
     emailInputRef.current.value = "";
     passwordInputRef.current.value = "";
     const data = await res.json();
      //localStorage.setItem('JWTTOKEN' , data.idToken);
      // history.replace('/Store');
   }else{
     const data = await res.json();
     setLoading(false); 
     alert(data.error.message);
   }
    }
      }catch(err){
        console.log(err);
        alert(err);
      }
    }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && (
            <label className={classes.labelClass}>Sending request...</label>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
