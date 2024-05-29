import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Rooms from 'layouts/Rooms'
import { roomLayout } from 'styles/roomLayout.module.css'

const Room = ({ popupForm }) => {
  const { booked } = useParams();

  return (
    <div className={roomLayout}>
      <h2>Варианты номеров</h2>

      {booked ? <Outlet /> : <Rooms popupForm={popupForm} />}
    </div>
  )
}

export default Room