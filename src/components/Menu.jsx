import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
    return (
        <div className="desktop-menu">
        <ul>
            <li>
                <a href="/">My orders</a>
            </li>
            <li>
                <a href="/">My account</a>
            </li>
            <li>
                <a href="/">Sing out</a>
            </li>
        </ul>
    </div>
    );
}

export default Menu;