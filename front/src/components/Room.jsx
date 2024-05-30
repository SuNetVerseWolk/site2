import React from 'react'
import { room } from 'styles/room.module.css'
import BookButton from './BookButton'

const Room = ({ src, name, price, description, value, amount, bookedAmount, popupForm, black }) => {
  return (
    <div className={`${room} ${black}`}>
      <img src={src} alt="..." />
      <div>
        <h1>{name}</h1>
        <p>{value} <b><i> Номеров \ {amount - bookedAmount}</i></b></p>
        
        <p>{description}</p>
        <div>
          <BookButton popupForm={popupForm} price={price} />
        </div>
      </div>
    </div>
  )
}

export default Room