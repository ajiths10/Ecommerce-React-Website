import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../Store/Cart--context';
import './Header.css';

const Header = (props) => {

    const CTX = useContext(CartContext);

    return(
        <div className='header'>
            <div className='titlediv' >
            <NavLink to='./Home' className='titlelabels'> Home</NavLink>
            <NavLink to='./Store' className='titlelabels'> Store</NavLink>
            <NavLink to='./About' className='titlelabels'> About</NavLink>
            <NavLink to='./contactus' className='titlelabels'> Contact Us</NavLink>
            <div>
            <button className='cart-button' onClick={props.onClick} >Cart</button>
            {CTX.count}
            </div> 
            </div>
        </div>
    )
};

export default Header