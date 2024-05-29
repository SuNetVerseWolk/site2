import { useQueryClient } from '@tanstack/react-query';
import getApi from 'api/get';
import React from 'react'
import styles from 'styles/forms.module.css'

const UserForm = ({ openUserForm, setIsOpenedUF }) => {
  const queryClient = useQueryClient();
  const { data: user } = getApi({
    key: ["user"],
    path: "/users/" + localStorage.getItem("id"),
  });

  return (
    <>
      {
        openUserForm && (
          <div className={styles.userPopupForm}>
            <button
              onClick={(e) => setIsOpenedUF(false)}
              className={styles.close}
            ></button>

            <form onSubmit={e => {
              e.preventDefault();
              queryClient.setQueryData(['user'], {});
              setIsOpenedUF(false);
            }}>
              <h2>Данные клиента</h2>

              <label htmlFor="lastName">
                Фамилия:
                <input id='lastName' name='lastName' type="text" defaultValue={user?.lastName} required />
              </label>
              <label htmlFor="name">
                Имя:
                <input id='name' name='name' type="text" defaultValue={user?.name} required />
              </label>
              <label htmlFor="fatherName">
                Отчество:
                <input id='fatherName' name='fatherName' defaultValue={user?.lastName} type="text" required />
              </label>
              <label htmlFor="email">
                Email:
                <input id='email' name='email' type="text" defaultValue={user?.email} required />
              </label>
              <label htmlFor="number">
                Номер:
                <input id='number' name='number' type="tel" defaultValue={user?.number}  required />
              </label>
              <label htmlFor="password">
                Пароль:
                <input id='password' name='password' defaultValue={user?.password}  required />
              </label>
      
              <button>Изменить</button>
              <button onClick={e => {
                localStorage.removeItem('id')
              }}>Выйти</button>
              <button>Удалить</button>
            </form>
          </div>
        )
      }
    </>
  )
}

export default UserForm