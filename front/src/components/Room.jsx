import React from 'react'
import { room } from 'styles/room.module.css'
import BookButton from './BookButton'

const Room = ({ src, name, price, description }) => {
  return (
    <div className={room}>
      <img src={src} alt="..." />
      <div>
        <h1>{name}</h1>
        
        <p>{description}</p>
        <div>
          <BookButton price={price} />
        </div>
      </div>
    </div>
  )
}

export default Room