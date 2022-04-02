import React from 'react';
import styles from '@styles/MenuMobile.module.scss';
import Link from 'next/link';

const MenuMobile = () => {
  return (
    <div className={styles.android__menu}>
      <ul>
        <li>
          <Link href="/">CATEGORIAS</Link>
        </li>
        <li>
          <Link href="/">Todos</Link>
        </li>
        <li>
          <Link href="/">Electronica</Link>
        </li>
        <li>
          <Link href="/">Muebles</Link>
        </li>
        <li>
          <Link href="/">Juguetes</Link>
        </li>
        <li>
          <Link href="/">Otros</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/orders">Mis ordenes</Link>
        </li>
        <li>
          <Link href="/account">Mi cuenta</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/" className={styles.email}>
            platzi@example.com
          </Link>
        </li>
        <li>
          <Link href="/login" className={styles.sign__out}>
            Cerrar Sesion
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
