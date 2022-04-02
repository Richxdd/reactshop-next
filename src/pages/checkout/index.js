import React, { useContext } from 'react';
import styles from '@styles/Checkout.module.scss';
import AppContext from '@context/AppContext';
import Head from 'next/head';

const Checkout = () => {
  const { state } = useContext(AppContext);

  const carrito = state.cart;

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = carrito.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles.Checkout__container}>
          <h1 className={styles.title}>Mi orden</h1>
          <div className={styles.order}>
            <p>
              <span>03.25.21</span>
              <span>{carrito.length} Articulos</span>
            </p>
            <p>${sumTotal()}.00</p>
          </div>
          <div className={styles.Checkout__content}>
            {carrito.map((data) => (
              <div key={data?.id} className={styles.card}>
                <img className={styles.ProductItem} src={data?.images[0]} />

                <p className={styles.name}>{data?.title}</p>
                <p className={styles.price}>${data?.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
