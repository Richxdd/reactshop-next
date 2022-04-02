import React, { useContext } from 'react';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MenuMobile from '@components/MenuMobile';
import Link from 'next/link';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, toggleOrder, toggleMenu, toggleMenuMobile } = useContext(AppContext);

  return (
    <nav className={styles.Nav}>
      <img src={menu.src} alt="menu" className={styles.menu} onClick={() => toggleMenuMobile()} />
      <div className={styles['navbar-left']}>
        <img src={logo.src} alt="logo" className={styles['nav-logo']} />

        <ul>
          <li>
            <Link href="/">Todos</Link>
          </li>
          <li>
            <Link href="/">Ropa</Link>
          </li>
          <li>
            <Link href="/">Electrónica</Link>
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
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={() => toggleMenu()}>
            platzi@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => toggleOrder()}>
            <img src={shoppingCart.src} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>

      {state.orderIsOpen && <MyOrder />}
      {state.menuIsOpen && <Menu />}
      {state.menumobileIsOpen && <MenuMobile />}
    </nav>
  );
};

export default Header;
