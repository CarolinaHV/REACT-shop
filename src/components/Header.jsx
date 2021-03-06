import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import AppContext from '../context/AppContext';
import Logo from '@logos/logo_yard_sale.svg';
import Icon_menu from '@icons/icon_menu.svg';
import Icon_cart from '@icons/icon_shopping_cart.svg';


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav>
      <img src={Icon_menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={Logo} alt="logo" className="logo_header" />
        <ul>
          <li><a href="/">All</a></li>
          <li><a href="/">Clothes</a></li>
          <li><a href="/">Electronics</a></li>
          <li><a href="/">Furnitures</a></li>
          <li><a href="/">Toys</a></li>
          <li><a href="/">Others</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            example@example.com
          </li>
          <li className="navbar-shopping-card" 
              onClick={() => setToggleOrders(!toggleOrders)} >
            <img src={Icon_cart} alt="shopping card" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
}

export default Header;