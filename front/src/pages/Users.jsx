import Header from 'layouts/Header'
import React, { useRef } from 'react'
import { roomLayout } from 'styles/roomLayout.module.css'
import main from 'styles/main.module.css'
import getApi from 'api/get'
import Alert from 'components/Alert'
import BookedRooms from 'layouts/BookedRooms'
import style from 'styles/main.module.css'
import Rooms from 'layouts/Rooms'
import BookForm from 'layouts/BookForm'

const Users = () => {
  const popupForm = useRef();
  const { data: users, isLoading } = getApi({
    key: ['users'],
    path: '/users'
  })

  console.log(users)
  return (
    <>
      <BookForm popupForm={popupForm} />
      <Header/>
      <main className={style.main}>
        <div id={main.rooms} className={roomLayout}>
          <h2>Варианты номеров</h2>
          <Rooms popupForm={popupForm} />

          {isLoading ? (
            <Alert children={'Загрузка...'} />
          ) : users.length > 0 ? (
            users.map(user => {
              const hasBooked = user.bookedRooms?.length > 0;

              return hasBooked && (<>
                <h2>{user.number}</h2>
                <BookedRooms bookedRooms={user.bookedRooms} userID={user.id} />
              </>)
            })
          ) : (
            <Alert children={'Пусто'} />
          )}
        </div>
      </main>
    </>
  )
}

export default Users