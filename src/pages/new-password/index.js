import React, { useRef, useState } from 'react';
import styles from '@styles/NewPassword.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import { useRouter } from 'next/router';
import axios from 'axios';

const NewPassword = () => {
  const navigate = useRouter();
  const { token } = navigate.query;

  const form = useRef(null);
  // const [Incorrecta, setIncorrecta] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const datos = {
      token,
      newPassword: formData.get('password'),
    };

    try {
      const API = 'https://tranquil-ravine-83407.herokuapp.com/api/v1/auth/change-password';

      await axios({
        method: 'post',
        url: API,
        data: datos,
      }).then((res) => res.status === 200 && navigate.push('/login'));
    } catch (error) {
      console.log(error);
      // setIncorrecta('Correo no valido');
    }
  };
  return (
    <div className={styles.NewPassword}>
      <div className={styles.NewPassword__container}>
        <img src={logo.src} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Crear una nueva contraseña</h1>
        <p className={styles.subtitle}>Ingrese una nueva contraseña para su cuenta</p>
        {/* <label className={styles.incorrecta}>{Incorrecta}</label> */}
        <form className={styles.form} ref={form}>
          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <input type="password" id="password" placeholder="*********" className={`${styles.input} ${styles.input__password}`} />
          <label htmlFor="new-password" className={styles.label}>
            Contraseña
          </label>
          <input type="password" id="new-password" name="password" placeholder="*********" className={`${styles.input} ${styles.input__password}`} />
          <input type="submit" value="Confirmar" className={`${styles.primary__button} ${styles.login__button}`} onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
