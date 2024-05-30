import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { bookBtn } from 'styles/bookBtn.module.css'

const BookButton = ({ price, popupForm }) => {
	const { mutate } = useMutation({
		mutationFn: data => axios.delete(`/api/book/${id}?type=${name}&userID=${localStorage.getItem('id')}`)
	})

  return (
    <div className={bookBtn}>
        <h3>{price} / сутки</h3>

        <button onClick={e => {
          if (popupForm) popupForm.current.style.display = 'grid';
          else mutate();
        }}>{popupForm ? 'Забронировать' : 'Отменить'}</button>
    </div>
  )
}

export default BookButton