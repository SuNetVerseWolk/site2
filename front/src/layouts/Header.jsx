// import BurgerMenu from 'components/BurgerMenu';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from "styles/header.module.css";
import NavLinks from './NavLinks';
import LogInBtn from 'components/LogInBtn';
import { useQuery } from '@tanstack/react-query';
import getApi from 'api/get';
import UserBtn from 'components/UserBtn';
import BurgerBtn from 'components/BurgerBtn';
import UserForm from './UserForm';

function Header() {
  const [open, setIsOpened] = useState(false);
  const [openUserForm, setIsOpenedUF] = useState(false);

  useEffect(e => {
    addEventListener('scroll', e => {
      const html = document.querySelector('html');

      if (html.scrollTop >= 200)
        document.querySelector('header').classList.add(styles.headerBlack)
      else
        document.querySelector('header').classList.remove(styles.headerBlack)
    })
  }, []);

  return (
    <>
      <UserForm openUserForm={openUserForm} setIsOpenedUF={setIsOpenedUF}/>
      <header>
        {open && (
          <div className={styles.popup}>
            <UserBtn setIsOpened={setIsOpened} setIsOpenedUF={setIsOpenedUF} />

            <NavLinks />
          </div>
        )}
        <div className={styles.container}>
          <a to=''><img src="logo2.png" alt="..." /></a>

          <NavLinks />
          <UserBtn setIsOpenedUF={setIsOpenedUF} />
          <BurgerBtn setIsOpened={setIsOpened} />
        </div>
      </header>
    </>
  )
}

export default Header