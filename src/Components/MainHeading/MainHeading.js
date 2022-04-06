import React, { useContext } from 'react';
import CartContext from '../../Store/Cart--context';
import './MainHeading.css';

const MainHeading = () => {
  const CTX = useContext(CartContext);
  return  <div className='mainHeading' >
        <h1 className='h1Classs'> The Generics  </h1>
    </div>
};


export default MainHeading;