import React, { useRef, useState } from 'react';
import styles from '@styles/PasswordRecovery.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

const PasswordRecovery = () => {
  const navigate = useRouter();
  const form = useRef(null);
  const [Incorrecta, setIncorrecta] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const datos = {
      email: formData.get('email'),
    };

    try {
      const API = 'https://tranquil-ravine-83407.herokuapp.com/api/v1/auth/recovery';

      await axios({
        method: 'post',
        url: API,
        data: datos,
      }).then((res) => res.status === 200 && navigate.push('/send-email'));
    } catch (error) {
      console.log(error);
      setIncorrecta('Correo no valido');
    }
  };

  return (
    <div className={styles.PasswordRecovery}>
      <div className={styles.PasswordRecovery__container}>
        <img src={logo.src} alt="logo" className={styles.logo} />
        <h1 className={styles.titulo}>Recuperar Contraseña</h1>
        <p className={styles.subtitle}>Informar la dirección de correo utilizada para crear su cuenta</p>
        <label className={styles.incorrecta}>{Incorrecta}</label>
        <form className={styles.form} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Dirección de correo electrónico
          </label>
          <input type="text" id="email" name="email" className={`${styles.input} ${styles.input__email}`} />
          <Link href="/send-email">
            <input type="submit" value="Confirmar" className={`${styles.primary__button} ${styles.login__button}`} onClick={handleSubmit} />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
