import React, { useEffect, useState } from "react";
import CartContext from "./Cart--context";
import axios from "axios";

const CartProvider = (props) => {
  const [items, UpdateNewItems] = useState([]);
  const [amountState, setAmount] = useState("");
  const [loginState, setLoginState] = useState(false);
  const [response, setResponse] = useState("");

  const userStoredID = localStorage.getItem("userID");
  let newSubArray = [...items];

  const cartReloadHandler = async () => {
    try {
      const cloudData = await axios.get(`http://localhost:4000/cart`);
      let newCloudArray = cloudData.data;
      setResponse('')
      newCloudArray.map((item) => {
        item.URL = item.imageUrl;
        item.quantity = item.cartItem.quantity;
      });

      UpdateNewItems(newCloudArray);
      console.log(newCloudArray);
    } catch (err) {
      console.log("something went wrong");
    }
  };
  useEffect(() => {
        cartReloadHandler()
  }, [response]);

  const AddToCart = (item) => {
    let sameItem = false;
    newSubArray.forEach((element, index) => {
      if (item.id === element.id) {
        sameItem = true;
        newSubArray[index].quantity = newSubArray[index].quantity + 1;
      }
    });
    if (sameItem === true) {
      UpdateNewItems(newSubArray);
    } else {
      UpdateNewItems([...items, item]);
    }
  };

  const removeBtnHandler = (id) => {
    console.log(`id:${id} Removing...`);

    newSubArray.forEach((element, index) => {
      if (id == element.id) {
        newSubArray.splice(index, 1);
      }
    });
    UpdateNewItems(newSubArray);
  };

  const totalAmountHandler = () => {
    let totalAmount = 0;
    items.map((element) => {
      totalAmount = totalAmount + element.price * element.quantity;
      setAmount(totalAmount);
      console.log(totalAmount);
    });
  };
  useEffect(totalAmountHandler, [items]);

  const isLoginHandler = () => {
    const localData = localStorage.getItem("JWTTOKEN");

    if (localData == null) {
      setLoginState(false);
    } else if (localData.trim() == "") {
      setLoginState(false);
    } else {
      setLoginState(true);
    }
  };
  useEffect(isLoginHandler, []);

  const loginStateHandler = (value) => {
    setLoginState(value);
  };

  const cartResponseHAndler = (value) => {
    setResponse(value);
  };
  const cartContent = {
    message: "Hello world",
    AddtoButtonHandler: AddToCart,
    items: items,
    count: items.length,
    total: amountState,
    removeHandler: removeBtnHandler,
    loginStateCall: loginStateHandler, //isLogin State function
    cartResponseHAndler: cartResponseHAndler,
    cartResponse: response,
    isLogin: loginState, //State
  };

  return (
    <CartContext.Provider value={cartContent}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
