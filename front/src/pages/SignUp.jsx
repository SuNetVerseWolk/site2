import React from 'react'
import { Link } from 'react-router-dom'
import styles from 'styles/forms.module.css'

const SignUp = () => {
  return (
    <div className={styles.containerForm}>
       <div id={styles.signUp}>
          <img id={styles.i1} src="apart9.jpg" alt="..." />
          <img id={styles.i2} src="apart13.jpg" alt="..." />

          <h2>Регистрация</h2>

          <form>
            <div>
              <div>
                <label htmlFor="lastName">
                  Фамилия:
                  <input id='lastName' name='lastName' type="text" placeholder='Павлов' required />
                </label>
                <label htmlFor="name">
                  Имя:
                  <input id='name' name='name' type="text" placeholder='Вадим' required />
                </label>
                <label htmlFor="login">
                  Логин:
                  <input id='login' name='login' type="text" required />
                </label>
              </div>
              <div>
                <label htmlFor="number">
                  Номер:
                  <input id='number' name='number' type="tel" placeholder='+7 (900) 800-90-90' required />
                </label>
                <label htmlFor="fatherName">
                  Отчество:
                  <input id='fatherName' name='fatherName' type="text" placeholder='Владимирович' required />
                </label>
                <label htmlFor="password">
                  Пароль:
                  <input id='password' name='password' type="password" required />
                </label>
              </div>
            </div>
            <button>Зарегистрироваться</button>
          </form>
       </div>
    </div>
  )
}

export default SignUp