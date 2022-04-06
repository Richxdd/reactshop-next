import React from 'react';
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
const Menu = () => {
  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/login' });
  };

  return (
    <div className={styles.Menu}>
      <ul className="">
        <li>
          <Link href="/orders" className="title">
            Mis ordenes
          </Link>
        </li>
        <li>
          <Link href="/account">Mi Cuenta</Link>
        </li>
        <li>
          <a onClick={handleSignOut}>Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
