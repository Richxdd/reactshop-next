import React from 'react';
import styles from '@styles/PasswordRecovery.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import Link from 'next/link';

const PasswordRecovery = () => {
  return (
    <div className={styles.PasswordRecovery}>
      <div className={styles.PasswordRecovery__container}>
        <img src={logo.src} alt="logo" className={styles.logo} />
        <h1 className={styles.titulo}>Recuperar Contraseña</h1>
        <p className={styles.subtitle}>Informar la dirección de correo utilizada para crear su cuenta</p>
        <form className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Dirección de correo electrónico
          </label>
          <input type="text" id="email" className={`${styles.input} ${styles.input__email}`} />
          <Link href="/send-email">
            <input type="submit" value="Confirmar" className={`${styles.primary__button} ${styles.login__button}`} />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
