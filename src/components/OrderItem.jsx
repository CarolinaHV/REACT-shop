import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import IconClose from '@icons/icon_close.png';
import '@styles/OrderItem.scss';

const OrderItem = ( { product }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = product => {
        removeFromCart(product);
    }

    return (
        <div className="orderItem">
        <figure>
            <img src={product.images[0]} alt={product.title}/>
        </figure>
        <p>{product.title}</p>
        <p>$ {product.price}</p>
        <img src={IconClose} alt="remove" onClick={() => handleRemove(product)} />
    </div>
    );
}

export default OrderItem;