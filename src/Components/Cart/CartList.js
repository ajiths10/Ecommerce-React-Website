import { useContext } from 'react';
import CartContext from '../../Store/Cart--context';
import './CartList.css';

const CartList= (props) => {
    const CTX = useContext(CartContext);
    
    const removeHandler = (event)=>{
        event.preventDefault();
        CTX.removeHandler(props.id)
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