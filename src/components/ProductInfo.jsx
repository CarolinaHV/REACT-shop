import React from 'react';
import '../styles/ProductInfo.scss';
import Icon_AddCart from '../assets/Icons/bt_add_to_cart.svg';
import Bike from '../assets/images/bike.jpg';

const ProductInfo = () => {
  return (
    <>
      <img src={Bike} alt="bike" />
      <div className="product-info">
        <p>$ 35,00</p>
        <p>Bike</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi vel placeat error, dignissimos nemo tenetur explicabo animi maxime facilis magni quo saepe unde libero omnis iste et minus, atque voluptates!</p>
        <button className="primary-button add-button">
          <img src={Icon_AddCart} alt="add to cart" />
          Add to cart
        </button>
      </div>

    </>
  );
}

export default ProductInfo;