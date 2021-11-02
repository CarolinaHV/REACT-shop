import React from 'react';
import ProductInfo from '../components/ProductInfo';
import IconClose from '../assets/Icons/icon_close.png';
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
   return (
      <aside className="product-detail">
         <div className="product-detail-close">
            <img src={IconClose} alt="close" />
         </div>
         <ProductInfo />
      </aside>
   );
}

export default ProductDetail;

