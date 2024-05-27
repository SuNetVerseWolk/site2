import React, { useMemo, useRef } from 'react'
import { useParams } from 'react-router-dom';
import Alert from 'components/Alert';
import getApi from 'api/get';
import Room from 'components/Room';
import style from 'styles/rooms.module.css'

const Rooms = () => {
  const { booked } = useParams();
  const booksKinds = JSON.parse(import.meta.env.VITE_BOOKSKINDS);
  const booksKind = useMemo(e => booked === booksKinds.booked ? booksKinds.booked : booksKinds.rooms, [booked, booksKinds]);
  const isBooked = useMemo(e => booksKind === booksKinds.booked, [booksKind, booksKinds]);
  const roomContainer = useRef();

  const { data: rooms, isLoading, isError} = getApi({
    key: [booksKind],
    path: isBooked ? `${booksKind}?userId=${localStorage.getItem('userID')}` : booksKind
  })

  return (
    <div className={style.rooms}>
      {isLoading ? (
        <Alert>Загрузка...</Alert>
      ) : isError ? (
        <Alert>Что-то пошло не так, или комнат нет</Alert>
      ) : rooms?.length <= 0 ? (
        <Alert>Свободных комнат нет!!!</Alert>
      ) : (
        <>
          <button className={style.left} onClick={e => {
            const scrollEl = roomContainer.current;
            scrollEl.scrollTo({ behavior: 'smooth', left: scrollEl.scrollLeft - scrollEl.children[0].offsetWidth});
          }}>{'<'}</button>
          <div ref={roomContainer}>
            {rooms?.map(room => <Room key={room.id} {...room} />)}
          </div>
          <button className={style.right} onClick={e => {
            const scrollEl = roomContainer.current;
            scrollEl.scrollTo({ behavior: 'smooth', left: scrollEl.scrollLeft + scrollEl.children[0].offsetWidth});
          }}>{'>'}</button>
        </>
      )}
    </div>
  )
}

export default Rooms