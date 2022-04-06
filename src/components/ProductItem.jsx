import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart, toggleDetailOpen } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  const handleClickImage = (item) => {
    toggleDetailOpen(item);
  };

  return (
    <>
      {product.images[0] ? (
        <div className={styles.ProductItem}>
          <img src={product.images[0]} className={styles.image} alt={product.title} onClick={() => handleClickImage(product)} />
          <div className={styles['product-info']}>
            <div>
              <p>${product.price}</p>
              <p>{product.title}</p>
            </div>
            <figure className={styles.add} onClick={() => handleClick(product)}>
              {state.cart.includes(product) ? (
                <img className={[styles.disabled, styles['add-to-cart-btn']]} src={addedToCartImage.src} alt="added to cart" />
              ) : (
                <img className={[styles.pointer, styles['add-to-cart-btn']]} src={addToCartImage.src} alt="add to cart" />
              )}
            </figure>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductItem;
