import Header from 'layouts/Header'
import React from 'react'
import { roomLayout } from 'styles/roomLayout.module.css'
import main from 'styles/main.module.css'
import getApi from 'api/get'
import Alert from 'components/Alert'
import BookedRooms from 'layouts/BookedRooms'
import style from 'styles/main.module.css'

const Users = () => {
  const { data: users, isLoading } = getApi({
    key: ['users'],
    path: '/users'
  })

  console.log(users)
  return (
    <>
      <Header/>
      <main className={style.main}>
        <div id={main.rooms} className={roomLayout}>
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