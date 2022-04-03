import React, { useState } from "react";
import CartContext from "./Cart--context";

const CartProvider = (props) => {
const [items,UpdateNewItems] = useState([]) 
    const AddToCart= (item) => {
        UpdateNewItems([...items,item])
    };
    
    const cartContent ={
        message: 'Hello world',
        AddtoButtonHandler: AddToCart,
        items:items,
        count:items.length,
    };

  return <CartContext.Provider value={cartContent} >{props.children}</CartContext.Provider>;
};

export default CartProvider;
