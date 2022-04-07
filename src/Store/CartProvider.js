import React, { useEffect, useState } from "react";
import CartContext from "./Cart--context";

const CartProvider = (props) => {
const [items,UpdateNewItems] = useState([]) ;
const [amountState, setAmount] = useState('');
const [loginState, setLoginState] =useState(false);

let newSubArray = [...items];

    const AddToCart= (item) => {

        let sameItem=false;

        newSubArray.forEach((element,index) => {
            if(item.id===element.id){
                sameItem=true;
                newSubArray[index].quantity = newSubArray[index].quantity + 1;
            }
        })
        if(sameItem===true){
            UpdateNewItems(newSubArray);
        }else{
            UpdateNewItems([...items,item]);
        }
    };

    const removeBtnHandler = (id) => {
        console.log(`id:${id} Removing...`);
        console.log(newSubArray);
        newSubArray.forEach((element,index) => {
            if(id == element.id){
                newSubArray.splice(index,1);
            }
        })
        UpdateNewItems(newSubArray);
    }

    
    const totalAmountHandler=() =>{
        let totalAmount = 0;
        items.map((element)=>{
        totalAmount= totalAmount + (element.price * element.quantity);
        setAmount(totalAmount);
        console.log(totalAmount);
    })
    }
useEffect(totalAmountHandler,[items]); 

const isLoginHandler=() => {
    const localData = localStorage.getItem('JWTTOKEN')

    if(localData==null){
        setLoginState(false);
    }else if(localData.trim() =='') {
        setLoginState(false);
    }else{
        setLoginState(true);
    }
}
useEffect(isLoginHandler,[])

const loginStateHandler = (value) =>{
    setLoginState(value);
};

    const cartContent ={
        message: 'Hello world',
        AddtoButtonHandler: AddToCart,
        items:items,
        count:items.length,
        total:amountState,
        removeHandler: removeBtnHandler,
        loginStateCall: loginStateHandler, //isLogin State function
        isLogin: loginState,  //State
    };

  return <CartContext.Provider value={cartContent} >{props.children}</CartContext.Provider>;
};

export default CartProvider;
