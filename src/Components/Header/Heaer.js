import React, { useContext } from 'react';
import CartContext from '../../Store/Cart--context';
import './Header.css';

const Header = (props) => {

    const CTX = useContext(CartContext);

    return(
        <div className='header'>
            <div>
            <label> Home</label>
            <label> Store</label>
            <label> About</label>
            </div>
            <button className='cart-button' onClick={props.onClick} >Cart</button>
            {CTX.count}
        </div>
    )
};

export default Header