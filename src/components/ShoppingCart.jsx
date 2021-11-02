import React from 'react';
import Mug from '../assets/images/mugs.jpg';
import IconClose from '../assets/Icons/icon_close.png';
import '../styles/ShoppingCart.scss';

const ShoppingCart = () => {
   return (
      <div className="shopping-card">
         <figure>
            <img src={Mug} alt="mugs" />
         </figure>
         <p>Mugs</p>
         <p>$ 20.00</p>
         <img src={IconClose} alt="remove" />
      </div>
   );
}

export default ShoppingCart;