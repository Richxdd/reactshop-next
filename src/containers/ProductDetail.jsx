import React, { useContext } from 'react';
import ProductInfo from '@components/ProductInfo';
import close from '@icons/icon_close.png';
import styles from '@styles/ProductDetail.module.scss';
import AppContext from '@context/AppContext';

const ProductDetail = () => {
  const { toggleDetailClose } = useContext(AppContext);
  return (
    <aside className={styles.ProductDetail}>
      <div className={styles.ProductDetail__close} onClick={toggleDetailClose}>
        <img src={close.src} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
