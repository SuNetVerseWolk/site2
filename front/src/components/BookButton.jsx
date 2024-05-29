import React from 'react'
import { bookBtn } from 'styles/bookBtn.module.css'

const BookButton = ({ price, popupForm }) => {
  return (
    <div className={bookBtn}>
        <h3>{price} / сутки</h3>

        <button onClick={e => {
          popupForm.current.style.display = 'grid';
        }}>Забронировать</button>
    </div>
  )
}

export default BookButton