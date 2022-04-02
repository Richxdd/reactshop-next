import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
  const { state, toggleOrder } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles.title__container}>
        <img src={arrow.src} alt="arrow" className={[styles.title__container__img]} onClick={() => toggleOrder()} />
        <p className="title">Mi Orden</p>
      </div>
      <div className={styles.my__order__content}>
        <div className={styles.my__orders}>
          {state.cart.map((product, index) => (
            <OrderItem product={product} key={`orderItem-${product.id}-${index}`} />
          ))}
        </div>
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link href="/checkout">
          <button className={styles.boton} onClick={() => toggleOrder()}>
            Verificar
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
