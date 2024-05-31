import Header from 'layouts/Header'
import React from 'react'

const Users = () => {

  console.log(localStorage.getItem('id'));
  return (
    <Header/>
  )
}

export default Users