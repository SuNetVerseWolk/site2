import React from 'react'
import Header from 'layouts/Header';
import { Outlet, useParams } from 'react-router-dom';
import Rooms from 'layouts/Rooms';

const Home = () => {
  const { booked } = useParams();

  return (
    <div>
      <Header />
      <div>
        <h2>Комнаты</h2>
        {booked ? <Outlet /> : <Rooms />}
      </div>
    </div>
  )
}

export default Home