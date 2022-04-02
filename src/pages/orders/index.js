import React from 'react';
import styles from '@styles/Orders.module.scss';

const Orders = () => {
  return (
    <div className={styles.Orders}>
      <div className={styles.Orders__container}>
        <h1 className={styles.title}>Mis ordenes</h1>
        <div className={styles.Orders__content}></div>
      </div>
    </div>
  );
};

export default Orders;
