import React from "react";
import "./order.css";

const ListView = (props) => {
  console.log(props.data);

  return (
    <div className="listView-container">
      <img src={props.data.imageUrl} alt="img" />
      <h3> {props.data.title} </h3>
      <label> quantity: <span>{props.data.customcheckout.quantity}</span> </label>
      <label>  Amount: <span> ${props.data.price}</span> </label>
    </div>
  );
};

export default ListView;
