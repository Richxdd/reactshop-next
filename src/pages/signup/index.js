import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/CreateAccount.module.scss';

const Signup = () => {
  let navigate = useRouter();

  const [incorrecta, setIncorrecta] = useState('');
  const form = useRef(null);

  const HandleCrear = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const datos = {
      email: formData.get('email'),
      password: formData.get('password'),
      role: 'customer',
    };
    console.log(datos);
    try {
      const API = 'https://tranquil-ravine-83407.herokuapp.com/api/v1/users';
      const respuesta = await fetch(API, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(respuesta);
      const resultado = await respuesta.json();
      console.log(resultado);
      if (respuesta.status === 201) {
        navigate.push('/login');
      } else {
        setIncorrecta('Ya hay un usuario Registrado con el mismo correo por favor intenta con otro correo');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.CreateAccount}>
      <div className={styles.CreateAccount__container}>
        <img src={logo.src} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Nueva Cuenta</h1>
        <label className={styles.incorrecta}>{incorrecta}</label>
        <form action="/login" className={styles.form} ref={form}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Nombre
            </label>
            <input type="text" id="name" name="name" placeholder="Teff" className={`${styles.input} ${styles.input__name}`} />
            <label htmlFor="email" className={styles.label}>
              Correo electrónico
            </label>
            <input type="text" id="email" name="email" placeholder="platzi@example.com" className={`${styles.input} ${styles.input__email}`} />
            <label htmlFor="password" className={styles.label}>
              Contraseña
            </label>
            <input type="password" id="password" name="password" placeholder="*********" className={`${styles.input} ${styles.input__password}`} />
          </div>

          <input type="submit" value="Crear Cuenta" className={`${styles.primary__button} ${styles.login__button}`} onClick={HandleCrear} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
