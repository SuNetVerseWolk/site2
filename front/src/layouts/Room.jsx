import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Rooms from 'layouts/Rooms'
import { roomLayout } from 'styles/roomLayout.module.css'

const Room = () => {
  const { booked } = useParams();

  return (
    <div className={roomLayout}>
      <h2 id='rooms'>Варианты номеров</h2>

      {booked ? <Outlet /> : <Rooms />}
    </div>
  )
}

export default Room