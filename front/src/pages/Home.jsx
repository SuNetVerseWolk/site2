import React, { useRef } from 'react'
import Header from 'layouts/Header';
import Main from 'layouts/Main';
import Room from 'layouts/Room';
import Footer from 'layouts/Footer';
import styles from 'styles/forms.module.css'

const Home = () => {
  const popupForm = useRef();

  return (
    <>
      <div ref={popupForm} className={styles.popUpForm}>
        <button onClick={e => popupForm.current.style.display = 'none'} className={styles.close}></button>

        <form>
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
            <label htmlFor="number">
              Номер:
              <input id='number' name='number' type="tel" placeholder='+7 (900) 800-90-90' required />
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

      <Header />
      <Main popupForm={popupForm} />
      <Footer />
    </>
  )
}

export default Home