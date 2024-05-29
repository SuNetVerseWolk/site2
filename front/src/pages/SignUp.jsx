import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from 'styles/forms.module.css'

const SignUp = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: data => axios.post(`/api/users/signUp`, data),
    onSuccess: res => {
      localStorage.setItem('id', res.data.id);
      queryClient.invalidateQueries(['user']);
      navigate('..');
    }
  })

  const submit = e => {
    e.preventDefault();
    queryClient.invalidateQueries(['user'])
    mutate(Object.fromEntries(new FormData(e.target).entries()));
  }

  return (
    <div className={styles.containerForm}>
       <div id={styles.signUp}>
          <img id={styles.i1} src="apart9.jpg" alt="..." />
          <img id={styles.i2} src="apart13.jpg" alt="..." />

          <h2>Регистрация</h2>

          <form onSubmit={submit}>
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
                <label htmlFor="fatherName">
                  Отчество:
                  <input id='fatherName' name='fatherName' type="text" placeholder='Владимирович' required />
                </label>
              </div>
              <div>
                <label htmlFor="number">
                  Номер:
                  <input id='number' name='number' type="tel" placeholder='+7 (900) 800-90-90' required />
                </label>
                <label htmlFor="email">
                  Email:
                  <input id='email' name='email' type="text" required placeholder='pavlov@gmail.com' />
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