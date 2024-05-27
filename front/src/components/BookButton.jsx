import React from 'react'
import { bookBtn } from 'styles/bookBtn.module.css'

const BookButton = ({ price }) => {
  return (
    <div className={bookBtn}>
        <h3>{price} / сутки</h3>
        <button>Забронировать</button>
    </div>
  )
}

export default BookButton