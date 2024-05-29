import getApi from 'api/get';
import React, { useState } from 'react'
import styles from 'styles/forms.module.css'

const BookForm = ({ popupForm }) => {
  const {
    data: user,
    isLoading,
    isError,
  } = getApi({
    key: ["user"],
    path: "/users/" + localStorage.getItem("id"),
  });
  const [userData, setUserData] = useState(user);

  const changeUserData = e => setUserData(prev => ({...prev, [e.target.name]: e.target.value}))

  return (
    <div ref={popupForm} className={styles.popUpForm}>
        <button onClick={e => popupForm.current.style.display = 'none'} className={styles.close}></button>

        <form>
            <div>
                <h2>Данные клиента</h2>
                <label htmlFor="lastName">
                    Фамилия:
                    <input id='lastName' name='lastName' type="text" placeholder='Павлов' required value={userData.lastName || ''} onChange={changeUserData} />
                </label>
                <label htmlFor="name">
                    Имя:
                    <input id='name' name='name' type="text" placeholder='Вадим' required value={userData.name || ''} onChange={changeUserData} />
                </label>
                <label htmlFor="fatherName">
                    Отчество:
                    <input id='fatherName' name='fatherName' type="text" placeholder='Владимирович' required value={userData.fatherName || ''} onChange={changeUserData} />
                </label>
                <label htmlFor="number">
                    Номер:
                    <input id='number' name='number' type="tel" placeholder='+7 (900) 800-90-90' required value={userData.number || ''} onChange={changeUserData} />
                </label>
            </div>
            <div>
                <select name='typeRoom' id="typeRoom">
                    <option>Классика</option>
                    <option>Стандарт</option>
                    <option>Люкс</option>
                </select>
                <label htmlFor="countPeople">
                    Кол-во человек:
                    <input id='countPeople' name='countPeople' type="number" required />
                </label>
                <label htmlFor="countRooms">
                    Кол-во номеров:
                    <input id='countRooms' name='countRooms' type="number" required />
                </label>
                
                <label htmlFor="comeDate">
                    Дата приезда:
                    <input id='comeDate' name='comeData' type="date" required />
                </label>
                <label htmlFor="outDate">
                    Дата отъезда:
                    <input id='outDate' name='outDate' type="date" required />
                </label>
            </div>
            <div>
                <button>Забронировать</button>

                <span>1000 руб.</span>
            </div>
        </form>
    </div>
  )
}

export default BookForm