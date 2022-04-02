import './CartList.css';

const CartList= (props) => {
    return(<div>
        <img src={props.url} className='imageClass' /> 
        <label className='priceList'>{`$${props.price}`}</label>
        <input type='number' value={props.quantity} className='inputQuantity' />
        <button className='removeBtn' >REMOVE</button>
        <hr></hr>
    </div> )
};

export default CartList;