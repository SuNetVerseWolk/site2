import React, { useMemo, useRef } from 'react'
import Room from 'components/Room';
import style from 'styles/rooms.module.css'
import { useQueryClient } from '@tanstack/react-query';

const BookedRooms = ({ bookedRooms }) => {
	const rooms = useQueryClient().getQueryData(['rooms']);
	const getRoomByType = type => rooms.find(roomIn => roomIn.name === type);
  const roomContainer = useRef();

  return (
		<div className={style.rooms}>
			<button className={style.left} onClick={e => {
				const scrollEl = roomContainer.current;
				scrollEl.scrollTo({ behavior: 'smooth', left: scrollEl.scrollLeft - scrollEl.children[0].offsetWidth});
			}}>{'<'}</button>
			<div ref={roomContainer}>
				{bookedRooms?.map(roomType => roomType?.books?.map(room =>
					<Room
						key={room.id}
						name={roomType.typeRoom}
						price={room.price}
						description={(
							<>
								<p>Людей в номере: {room.countPeople}</p>
								<p>Дата приезда: {room.comeDate}</p>
								<p>Дата уезда: {room.outDate}</p>
							</>
						)}
						amount={room.countRooms}
						bookedAmount={0}
						src={getRoomByType(roomType.typeRoom).src}
						value={getRoomByType(roomType.typeRoom).value}
					/>
				))}
			</div>
			<button className={style.right} onClick={e => {
				const scrollEl = roomContainer.current;
				scrollEl.scrollTo({ behavior: 'smooth', left: scrollEl.scrollLeft + scrollEl.children[0].offsetWidth});
			}}>{'>'}</button>
		</div>
  )
}

export default BookedRooms