import React from "react";
import './order.css'

const OrderComp = (props) => {
    console.log(props.OrderArr)
    return (
        <div className="order-comp">
            <h3>Success</h3>
            <hr />
            <label>Order placed at: {props.OrderArr.createdAt}</label>
            <br></br>
            <label>Order Id: {props.OrderArr.id}</label>
        </div>
    )
}

export default OrderComp;