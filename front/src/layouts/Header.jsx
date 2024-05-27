// import BurgerMenu from 'components/BurgerMenu';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from "styles/header.module.css";
import NavLinks from './NavLinks';

function Header() {
  const [open, setIsOpened] = useState(false);

  return (
    <header>
      {open && (
        <div className={styles.popup}>
          <button>Войти</button>

          <NavLinks />
        </div>
      )}
      <div className={styles.container}>
        <a to=''><img src="logo2.png" alt="..." /></a>

        <NavLinks />

        <button>Войти</button>
        
        <button onClick={e => open ? setIsOpened(false) : setIsOpened(true)} className={styles.burgerContainer}>
          <div className={styles.burgerMenu}></div>
        </button>
      </div>
    </header>
  )
}

export default Header