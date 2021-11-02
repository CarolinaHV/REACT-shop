import React from 'react'
import OrderItem from '../components/OrderItem';
import IconArrow from '../assets/Icons/flechita.svg';
import '../styles/Checkout.scss';

const Checkout = () => {
    return (
        <main className="checkout">
        <section className="checkout-container">
            <h1 className="title">My Orders</h1>
            <div className="checkout-content">
                <div className="order">
                    <p>
                        <span>28.10.21</span>
                        <span>6 article</span>
                    </p>
                    <p>$ 560.00</p>
                    <img src={IconArrow} alt="arrow"/>
                </div>
            </div>
            <OrderItem />
        </section>
    </main>
    );
}

export default Checkout;