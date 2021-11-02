import React from 'react';
import '../styles/Order.scss';
import IconArrow from '../assets/Icons/flechita.svg';

const Order = () => {
  return (
          <div className="resume">
            <p>
              <span>28.10.21</span>
              <span>6 article</span>
            </p>
            <p>$ 560.00</p>
            <img src={IconArrow} alt="arrow" />
          </div>
  );
}

export default Order;