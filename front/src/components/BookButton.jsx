import React from 'react'
import { bookBtn } from 'styles/bookBtn.module.css'

const BookButton = ({ price }) => {
  return (
    <div className={bookBtn}>
        <h3>{price} за человека</h3>
        <button>Забронировать</button>
    </div>
  )
}

export default BookButton