import React from 'react'
import { bookBtn } from 'styles/bookBtn.module.css'

const BookButton = ({ price, popupForm }) => {
  return (
    <div className={bookBtn}>
        <h3>{price} / сутки</h3>

        <button onClick={e => {
          if (popupForm)
						popupForm.current.style.display = 'grid';
        }}>{popupForm ? 'Забронировать' : 'Отменить'}</button>
    </div>
  )
}

export default BookButton