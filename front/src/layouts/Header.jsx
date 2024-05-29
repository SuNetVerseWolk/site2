// import BurgerMenu from 'components/BurgerMenu';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from "styles/header.module.css";
import NavLinks from './NavLinks';
import LogInBtn from 'components/LogInBtn';
import { useQuery } from '@tanstack/react-query';
import getApi from 'api/get';
import UserBtn from 'components/UserBtn';

function Header() {
  const [open, setIsOpened] = useState(false);

  return (
    <header>
      {open && (
        <div className={styles.popup}>
          <UserBtn />

          <NavLinks />
        </div>
      )}
      <div className={styles.container}>
        <a to=''><img src="logo2.png" alt="..." /></a>

        <NavLinks />
        <UserBtn />
        
        <button onClick={e => open ? setIsOpened(false) : setIsOpened(true)} className={styles.burgerContainer}>
          <div className={styles.burgerMenu}></div>
        </button>
      </div>
    </header>
  )
}

export default Header