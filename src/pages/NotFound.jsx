import React from 'react';
import Error404 from '../assets/images/404.png';

const NotFound = () => {
    return (
        <div>
            <img src={Error404} alt='Page not found' />
        </div>
    );
}

export default NotFound;