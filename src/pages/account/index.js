import React from 'react';
import styles from '@styles/MyAccount.module.scss';
import { getSession, useSession } from 'next-auth/react';

const MyAccount = () => {
  const { data: session } = useSession();
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
            <p className={styles.value}>{session.user.user.email}</p>
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
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  return {
    props: {
      session: session,
    },
  };
};

export default MyAccount;
