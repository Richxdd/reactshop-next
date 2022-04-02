import React from 'react';
import styles from '@styles/SendEmail.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import Link from 'next/link';

const SendEmail = () => {
  return (
    <div className={styles.SendEmail}>
      <div className={styles.form__container}>
        <img src={logo.src} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>El correo ha sido enviado</h1>
        <p className={styles.subtitle}>Consulte su bandeja de entrada para obtener instrucciones sobre cómo restablecer la contraseña</p>
        <div className={styles.email__image}>
          <img src={email.src} alt="email" />
        </div>
        <Link href="/login" className={styles.btn}>
          <button className={`${styles.primary__button} ${styles.login__button}`}>Iniciar sesión</button>
        </Link>
        <p className={styles.resend}>
          <span>¿No recibiste el correo electrónico?</span>
          <Link href="/password-recovery">Reenviar</Link>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
