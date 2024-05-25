import React from 'react'
import Header from 'layouts/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <h2>Комнаты</h2>
        <Outlet />
      </div>
    </div>
  )
}

export default Home