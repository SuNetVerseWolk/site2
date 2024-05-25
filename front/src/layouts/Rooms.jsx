import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom';
import Alert from 'components/Alert';
import getApi from 'api/get';

const Rooms = () => {
  const { booked } = useParams();
  const booksKinds = JSON.parse(import.meta.env.VITE_BOOKSKINDS);
  const booksKind = useMemo(e => booked === booksKinds.booked ? booksKinds.booked : booksKinds.books, [booked, booksKinds]);
  const isBooked = useMemo(e => booksKind === booksKinds.booked, [booksKind, booksKinds]);

  const {data: rooms, isLoading, isError} = getApi({
    key: [booksKind],
    path: isBooked ? `${booksKind}?userId=${localStorage.getItem('userID')}` : booksKind
  })

  console.log(rooms)
  return (
    <div>
      {isLoading ? (
        <Alert>Загрузка...</Alert>
      ) : isError ? (
        <Alert>Что-то пошло не так, или комнат нет</Alert>
      ) : (
        rooms.map(room => (
          <div>
            <h1>{room.name}</h1>
          </div>
        ))
      )}
    </div>
  )
}

export default Rooms