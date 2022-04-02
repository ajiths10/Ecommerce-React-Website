import CartList from "./CartList";
import "./Cart.css";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const cartListItems = cartElements.map((element) => {
      console.log(element);
    return<CartList
      title={element.title}
      price={element.price}
      url={element.imageUrl}
      quantity={element.quantity}
    />;
  });
  
  return (
    <div className="cartBody">
      <div className="heading-cart">
      <button className="closeButton-cart" onClick={props.onClick} >X</button>
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
          <span > Total:$23.99</span>
          <button className="purchaseBtn" >PURCHASE</button>
      </div>
    </div>
  );
};

export default Cart;
