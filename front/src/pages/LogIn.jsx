import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from 'styles/forms.module.css'

const LogIn = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: data => axios.post(`/api/users/logIn`, data),
    onSuccess: res => {
      localStorage.setItem('id', res.data.id);
      navigate('..');
    }
  })

  const submit = e => {
    e.preventDefault();

    mutate(Object.fromEntries(new FormData(e.target).entries()));
  }

  return (
    <div className={styles.containerForm}>
       <div>
          <img id={styles.i1} src="apart8.jpg" alt="..." />
          <img id={styles.i2} src="apart10.jpg" alt="..." />

          <h2>Авторизация</h2>

          <form onSubmit={submit}>
            <label htmlFor="login">
              Логин:
              <input id='login' name='login' type="text" required />
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