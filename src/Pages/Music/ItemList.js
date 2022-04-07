import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CartContext from '../../Store/Cart--context';
import './ItemList.css';

const ItemList = (props) => {
const CTX = useContext(CartContext);

const data = {
    id:props.id,
    title: props.title,
    URL: props.URL,
    quantity: props.quantity,
    price:props.price,

}
const BtnHandler = async(event)=>{
  event.preventDefault();
  const userToken = localStorage.getItem('userID').trim();

  CTX.AddtoButtonHandler(data);
try{ 
  const response = await fetch(`https://crudcrud.com/api/25ed1372ef22486e91a8a553b6182b32/cart${userToken}`,
  {
    headers: { "Content-Type": "application/json" },
    
    method: 'POST',
    body: JSON.stringify({
      "id":props.id,
      "title": props.title,
      "URL": props.URL,
      "quantity": props.quantity,
      "price":props.price,
    })
  }
  );
  console.log(JSON.stringify(response));
}catch(err){
  console.log(`Something went wrong!!`);
}

}



  return <div>
  <div className="indLIst">
  <Link to={`./Store/p${props.id}`}>
      <h3 >{`Album ${props.num}`}</h3>
      <img src={props.URL} />
      </Link> </div> 
      <div className='priceAndButton'>
      <label className='priceList' > {`$${props.price}`}</label>
      <button className='listButton' onClick={BtnHandler} > ADD TO CART</button>
      </div>
      </div>
};

export default ItemList;
