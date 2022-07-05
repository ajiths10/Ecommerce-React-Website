import React, { useEffect, useState } from "react";
import ListView from "./ListView";
import "./order.css";

const OrderComp = (props) => {
  const [productArr, setProductArr] = useState([]);
  const [totalState, setTotalState] = useState(0);
  let totalAmount = 0;

  useEffect(() => {
    setProductArr(props.OrderArr);
  }, [props]);

  useEffect(() => {
    productArr?.products?.map((item) => {
      totalAmount = totalAmount + item.price;
      console.log("hiii", item);
    });
    setTotalState(totalAmount);
  }, [productArr]);

  return (
    <div className="order-comp">
      <h3 className="success">Success</h3>
      <hr />
      <div className="details-container">
        <label>
          Order placed at:{" "}
          <span> {productArr?.createdAt ? productArr.createdAt : null} </span>{" "}
        </label>
        <br></br>
        <label className="orderId">
          Order Id:<span> {productArr?.id ? productArr.id : null} </span>{" "}
        </label>
      </div>
      {productArr?.products?.map((data) => {
        return <ListView data={data} />;
      })}
      <div className="details-container">
      <label className="totalamount">Total Amount: {totalState}</label>
      </div>
    </div>
  );
};

export default OrderComp;
