import React from 'react'
import { bookBtn } from 'styles/bookBtn.module.css'

const BookButton = ({ price }) => {
  return (
    <div className={bookBtn}>
        <h3>{price} / сутки</h3>
        <button onClick={e => {

        }}>Забронировать</button>
    </div>
  )
}

export default BookButton