import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../Store/Cart--context';
import './ItemList.css';

const ItemList = (props) => {
const CTX = useContext(CartContext);

const BtnHandler = ()=>{
  const data = {
    id:props.id,
    title: props.title,
    URL: props.URL,
    quantity: props.quantity,
    price:props.price,
  }
  CTX.AddtoButtonHandler(data);
}

  return <div>
  <div className="indLIst">
  <Link to="./Store/p1">
      <h3>{`Album ${props.num}`}</h3>
      <img src={props.URL} />
      </Link> </div> 
      <div className='priceAndButton'>
      <label className='priceList' > {`$${props.price}`}</label>
      <button className='listButton' onClick={BtnHandler} > ADD TO CART</button>
      </div>
      </div>
};

export default ItemList;
