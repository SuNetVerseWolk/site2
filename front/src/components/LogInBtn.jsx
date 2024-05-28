import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogInBtn = () => {
  const navigate = useNavigate();

  return (
    <button onClick={e => navigate('/logIn')}>Войти</button>
  )
}

export default LogInBtn