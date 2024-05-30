import React from 'react'
import Rooms from 'layouts/Rooms'
import { roomLayout } from 'styles/roomLayout.module.css'
import BookedRooms from './BookedRooms'
import getApi from 'api/get'

const Room = ({ popupForm }) => {
	const { data: user, isLoading } = getApi({
    key: ['user'],
    path: '/users/' + localStorage.getItem('id')
  })

  return (
    <div className={roomLayout}>
      {!isLoading && user?.bookedRooms?.length > 0 && (
				<>
					<h2>Забронированные номера</h2>
					<BookedRooms bookedRooms={user.bookedRooms} />
				</>
			)}

      <h2>Варианты номеров</h2>
      <Rooms popupForm={popupForm} />
    </div>
  )
}

export default Room