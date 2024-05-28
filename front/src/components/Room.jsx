import React from 'react'
import { room } from 'styles/room.module.css'
import BookButton from './BookButton'

const Room = ({ src, name, price, description, value, amount, bookedAmount }) => {
  return (
    <div className={room}>
      <img src={src} alt="..." />
      <div>
        <h1>{name}</h1>
        <p>{value} <b><i>{amount - bookedAmount} номеров</i></b></p>
        
        <p>{description}</p>
        <div>
          <BookButton price={price} />
        </div>
      </div>
    </div>
  )
}

export default Room