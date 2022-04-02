import React from 'react';
import styles from '@styles/MyAccount.module.scss';

const MyAccount = () => {
  return (
    <div className={styles.MyAccount}>
      <div className={styles.MyAccount__container}>
        <h1 className={styles.title}>Mi Cuenta</h1>
        <form action="/edit" className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Nombre
            </label>
            <p className={styles.value}>Camila Yokoo</p>
            <label htmlFor="email" className={styles.label}>
              Correo electrónico
            </label>
            <p className={styles.value}>camilayokoo@gmail.com</p>
            <label htmlFor="password" className={styles.label}>
              Contraseña
            </label>
            <p className={styles.value}>*********</p>
          </div>
          <input type="submit" value="Editar" className={`${styles.secondary__button} ${styles.login__button}`} />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
