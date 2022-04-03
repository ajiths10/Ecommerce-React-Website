import React, { useContext, } from 'react';
import CartContext from '../../Store/Cart--context';
import './ItemList.css';

const ItemList = (props) => {
const CTX = useContext(CartContext);

const BtnHandler = ()=>{
  CTX.AddtoButtonHandler(props);
}

  return <div>
  <div className="indLIst">
      <h3>{`Album ${props.num}`}</h3>
      <img src={props.URL} />
      </div>
      <div className='priceAndButton'>
      <label className='priceList' > {`$${props.price}`}</label>
      <button className='listButton' onClick={BtnHandler} > ADD TO CART</button>
      </div>
      </div>
};

export default ItemList;
