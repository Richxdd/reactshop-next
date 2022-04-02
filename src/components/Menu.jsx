import React from 'react';
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';

const Menu = () => {
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
          <Link href="/login">Cerrar Sesión</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
