// import BurgerMenu from 'components/BurgerMenu';
import React, { useState } from 'react'
import styles from "styles/header.module.css";

function Header() {
  const [open, setIsOpened] = useState(false);

  return (
    <header>
      {open && (
        <div className={styles.popup}>
          <button>Войти</button>

          <ul>
            <li><a href="">Главная</a></li>
            <li><a href="">О нас</a></li>
            <li><a href="">Номера</a></li>
            <li><a href="">Услуги</a></li>
            <li><a href="">Контакты</a></li>
          </ul>
        </div>
      )}
      <div className={styles.container}>
        <a href=""><img src="logo2.png" alt="..." /></a>

        <ul>
          <li><a href="">Главная</a></li>
          <li><a href="">О нас</a></li>
          <li><a href="">Номера</a></li>
          <li><a href="">Услуги</a></li>
          <li><a href="">Контакты</a></li>
        </ul>

        <button>Войти</button>
        
        <button onClick={e => open ? setIsOpened(false) : setIsOpened(true)} className={styles.burgerContainer}>
          <div className={styles.burgerMenu}></div>
        </button>
      </div>
    </header>
  )
}

export default Header