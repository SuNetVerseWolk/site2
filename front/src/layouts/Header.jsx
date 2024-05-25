import React from 'react'
import styles from "styles/header.module.css";

function Header() {
  return (
    <div className={styles.container}>
        <div>
          <img src="logo.png" alt="..." />

          <ul>
            <li>Главная</li>
            <li>Номера</li>
            <li></li>
            <li></li>
            <li>Контакты</li>
          </ul>
        </div>
    </div>
  )
}

export default Header