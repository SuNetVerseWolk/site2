import React from 'react'
import { Link } from 'react-router-dom'
import styles from 'styles/forms.module.css'

const LogIn = () => {
  return (
    <div className={styles.containerForm}>
       <div>
          <img id={styles.i1} src="apart8.jpg" alt="..." />
          <img id={styles.i2} src="apart10.jpg" alt="..." />

          <h2>Авторизация</h2>

          <form>
            <label htmlFor="name">
              Логин:
              <input id='name' name='name' type="text" required />
            </label>
            <label htmlFor="password">
              Пароль:
              <input id='password' name='password' type="password" required />
            </label>

            <Link to='/signUp'>Зарегистрироваться</Link>

            <button>Войти</button>
          </form>
       </div>
    </div>
  )
}

export default LogIn