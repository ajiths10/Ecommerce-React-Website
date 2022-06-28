import axios from 'axios';
import { useContext } from 'react';
import CartContext from '../../Store/Cart--context';
import './CartList.css';

const CartList= (props) => {
    const CTX = useContext(CartContext);
    
    const removeHandler = async(event)=>{
        event.preventDefault(); 

        try {
            const response = await axios.post(`http://localhost:4000/cart-delete-item`, {
              productId: props.id,
            });
            console.log(response);
            CTX.removeHandler(props.id)
          } catch (err) {
            console.log(`Something went wrong!!`);
          }
    }

    return(<div>
        <img src={props.url} className='imageClass' /> 
        <label className='priceList'>{`$${props.price}`}</label>
        <input type='number' value={props.quantity} className='inputQuantity' />
        <button className='removeBtn' onClick={removeHandler} >REMOVE</button>
        <hr></hr>
    </div> )
};
 
export default CartList;