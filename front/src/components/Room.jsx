import React from 'react'
import { room } from 'styles/room.module.css'
import BookButton from './BookButton'

const Room = ({ src, id, name, price, description, value, amount, bookedAmount, popupForm, black, userID }) => {
  return (
    <div className={`${room} ${black}`}>
      <img src={src} alt="..." />
      <div>
        <h1>{name}</h1>
        <p>{value} <b><i> Номеров \ {amount - bookedAmount}</i></b></p>
        
        <p>{description}</p>
        <div>
          <BookButton id={id} type={name} popupForm={popupForm} price={price} userID={userID} />
        </div>
      </div>
    </div>
  )
}

export default Room