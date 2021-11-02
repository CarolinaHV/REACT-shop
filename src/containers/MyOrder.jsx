import React, { useContext } from 'react';
import AppContent from '../context/AppContext';
import OrderItem from '@components/OrderItem';
import Icon_Arrow from '@icons/flechita.svg';
import Icon_Menu from '@icons/icon_menu.svg';
import '@styles/MyOrder.scss';

const MyOrder = () => {
   const { state } = useContext(AppContent);

   const sumTotal = () => {
      const total = (accumulator, currentValue) => accumulator + currentValue.price;
      const sum = state.cart.reduce(total, 0);
      return sum;
   }

   return (
      <aside className="myorder">
         <div className="title-container">
            <img src={Icon_Menu} alt="menu" className="menu" />
            <img src={Icon_Arrow} alt="arrow" className="arrow" />
            <h2 className="title">My Order</h2>
         </div>

         <div className="myorder-content">
            {state.cart.map((product, index) => (
               <OrderItem product={product} key={`orderItem-${product.id}-${index}`}/>
            ))}
            <div className="resume">
               <p>Total</p>
               <p>$ {sumTotal()}</p>
            </div>
         </div>
         <button className="primary-button">
            Checkout
         </button>
      </aside>
   );
}

export default MyOrder;
