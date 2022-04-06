import React, { useRef, useState, useEffect } from 'react';
import styles from '@styles/Login.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';

const Login = () => {
  const navigate = useRouter();
  const { data: session, status } = useSession();
  const [Incorrecta, setIncorrecta] = useState('');
  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const datos = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    await signIn('credentials', {
      redirect: false,
      email: datos.email,
      password: datos.password,
    }).then((res) => (res.ok ? navigate.push('/') : setIncorrecta('Contraseña Incorrecta')));
  };

  useEffect(() => {
    if (status !== 'loading' && status === 'authenticated') {
      console.log(status);
      navigate.push('/');
    }
  }, [status]);

  return (
    <div className={styles.Login}>
      <div className={styles.Login__container}>
        <h1 className={styles.title}>Incio de Sesión</h1>
        <img src={logo.src} alt="logo" className={styles.logo} />
        <form className={styles.form} ref={form}>
          <label className={styles.incorrecta}>{Incorrecta}</label>
          <label htmlFor="email" className={styles.label}>
            Dirección de correo electrónico
          </label>
          <input type="text" name="email" placeholder="platzi@example.cm" className={`${styles.input} ${styles.input__email}`} />
          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <input type="password" name="password" placeholder="*********" className={`${styles.input} ${styles.input__password}`} />
          <Link href="/">
            <button onClick={handleSubmit} className={`${styles.primary__button} ${styles.login__button}`}>
              Iniciar sesión
            </button>
          </Link>
          <Link href="/password-recovery">Olvidé mi contraseña</Link>
        </form>
        <Link href="/signup">
          <button className={`${styles.secondary__button} ${styles.signup__button}`}>Registrarse</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
