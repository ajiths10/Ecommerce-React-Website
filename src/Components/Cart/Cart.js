import React, { useContext, useEffect } from "react";
import CartContext from "../../Store/Cart--context";
import CartList from "./CartList";
import { useSnackbar } from "notistack";
import "./Cart.css";
import axios from "axios";

const Cart = (props) => {
  const CTX = useContext(CartContext);
  const { enqueueSnackbar } = useSnackbar();
  const { cartResponseHAndler, cartResponse } = CTX;

  const checkoutHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4000/checkout`);
      console.log(response);
      cartResponseHAndler(response.data);
      enqueueSnackbar("Order Placed Successfull", {
        variant: "success",
        anchorOrigin: { vertical: "bottom", horizontal: "left" },
        preventDuplicate: true,
      });
    } catch (err) {
      enqueueSnackbar("Something went wrong", {
        variant: "error",
        anchorOrigin: { vertical: "bottom", horizontal: "left" },
        preventDuplicate: true,
      }
      );
      console.log(`Something went wrong!!`);
    }
  };

  const cartListItems = CTX.items.map((element) => {
    return (
      <CartList
        title={element.title}
        price={element.price}
        url={element.URL}
        quantity={element.quantity}
        id={element.id}
      />
    );
  });

  return (
    <div className="cartBody">
      <div className="heading-cart">
        <button className="closeButton-cart" onClick={props.onClick}>
          X
        </button>
        <h1> Cart</h1>
      </div>
      <div>
        <label className="Item">ITEM </label>
        <label className="price">PRICE </label>
        <label className="quantity">QUANTITY </label>
        <hr></hr>
      </div>
      <div>{cartListItems}</div>
      <div className="totalAmount">
        <span>Total Amount:{CTX.total} </span>
        <button className="purchaseBtn" onClick={checkoutHandler}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
