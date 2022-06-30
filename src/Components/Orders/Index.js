import React, { useEffect, useState } from "react";
import OrderComp from "./OrderComp";
import axios from "axios";
import "./order.css";

const Order = () => {
  const [OrderArr, setOrderArr] = useState([]);

  const getOrders = async (value) => {
    try {
      const res = await axios.get(`http://localhost:4000/yourorders`);
      console.log(res);
      setOrderArr(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <h2>Yours Order</h2>
      <div className="order-container">
        {OrderArr.map((element) => (
          <OrderComp OrderArr={element} />
        ))}
      </div>
    </>
  );
};

export default Order;
