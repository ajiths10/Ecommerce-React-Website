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
  const response = await axios.post(`https://crudcrud.com/api/c8bbd3d56bb84a5d853f9ba1ec7a8a7a/cart${userToken}`,data);
  console.log(response);
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
