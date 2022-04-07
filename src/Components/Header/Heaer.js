import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../Store/Cart--context';
import './Header.css';

const Header = (props) => {

    const CTX = useContext(CartContext);
    const logoutHandler=(event)=>{
        event.preventDefault();
        CTX.loginStateCall(false);
        localStorage.setItem('JWTTOKEN','');
        localStorage.setItem('userID','');
    }

    return(
        <div className='header'>
            <div className='titlediv' >
            <NavLink to='/Home' className='titlelabels'> Home</NavLink>
            <NavLink to='/Store' className='titlelabels'> Store</NavLink>
            <NavLink to='/About' className='titlelabels'> About</NavLink>
            <NavLink to='/contactus' className='titlelabels'> Contact Us</NavLink>
           {!CTX.isLogin && <NavLink to='/userlogin' className='titlelabels'> Login </NavLink>}
           {CTX.isLogin && <div className='logout-BTN'> <button className='logout-Button'  onClick={logoutHandler} >LogOut</button></div> } 
            
           {CTX.isLogin &&<div className='cartClassbtn'> <button className='cart-button' onClick={props.onClick} >Cart {CTX.count}</button>
            

            </div> }
            
            </div>
        </div>
    )
};

export default Header