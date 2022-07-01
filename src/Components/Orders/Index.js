import React, { useEffect, useState, useContext } from "react";
import OrderComp from "./OrderComp";
import CartContext from "../../Store/Cart--context";
import axios from "axios";
import "./order.css";

const Order = () => {
  const [OrderArr, setOrderArr] = useState([]);
  const CTX = useContext(CartContext);
  const { cartResponse } = CTX;

  const getOrders = async (value) => {
    try {
      const res = await axios.get(`http://localhost:4000/yourorders`);
      console.log(res);
      const arr = res.data.reverse()
      setOrderArr(arr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
  }, [cartResponse]);

  return (
    <div className="mainOrder-container">
      <h2>Yours Order</h2>
      <div className="order-container">
        {OrderArr.map((element) => (
          <OrderComp OrderArr={element} />
        ))}
      </div>
    </div>
  );
};

export default Order;
