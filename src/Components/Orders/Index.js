import React from "react";
import OrderComp from "./OrderComp";
import "./order.css";

const Order = () => {
  return (
    <>
    <h2>Yours Order</h2>
      <div className="order-container">
        <OrderComp />
      </div>
    </>
  );
};

export default Order;
