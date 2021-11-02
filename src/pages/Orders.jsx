import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/Orders.scss';

const Orders = () => {
   return (
      <section className="orders">
         <div className="orders-container">
            <h1 className="title">My Orders</h1>
            <div className="orders-content">
               <OrderItem />
            </div>
         </div>
      </section>
   );
}

export default Orders;