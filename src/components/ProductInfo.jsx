import React, { useContext } from 'react';
import addToCart from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';
import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
  const { state } = useContext(AppContext);

  const { product } = state;

  return (
    <>
      <img src={product.images[0]} className={styles.image} alt={product.title} />

      <div className={styles.ProductInfo}>
        <p>{product.price}</p>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <button className={`${styles.primary__button} ${styles.add__to__cart__button}`}>
          <img src={addToCart.src} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
