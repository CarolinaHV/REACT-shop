import React, { useContext } from 'react';
import Icon_AddToCart from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';
import '@styles/ProductItem.scss';

const ProductItem = ({ product }) => {
  const { addToCart, state } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item)
  }
  //test
  const knowState = () => {
    console.log(state)
  }
  return (
    <div className="product-item">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p onClick={() => knowState()}>$ {product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={Icon_AddToCart} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;