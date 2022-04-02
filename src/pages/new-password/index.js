import React from 'react';
import styles from '@styles/NewPassword.module.scss';
import logo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
  return (
    <div className={styles.NewPassword}>
      <div className={styles.NewPassword__container}>
        <img src={logo.src} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Crear una nueva contraseña</h1>
        <p className={styles.subtitle}>Ingrese una nueva contraseña para su cuenta</p>
        <form action="/" className={styles.form}>
          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <input type="password" id="password" placeholder="*********" className={`${styles.input} ${styles.input__password}`} />
          <label htmlFor="new-password" className={styles.label}>
            Contraseña
          </label>
          <input type="password" id="new-password" placeholder="*********" className={`${styles.input} ${styles.input__password}`} />
          <input type="submit" value="Confirmar" className={`${styles.primary__button} ${styles.login__button}`} />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
