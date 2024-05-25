import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import LogIn from 'pages/LogIn'
import SignUp from 'pages/SignUp'
import Rooms from 'layouts/Rooms'

const App = () => {
  return (
    <Routes>
			<Route path='/' element={<Home />} >
        <Route path='/:booked' element={<Rooms />} />
      </Route>

			<Route
        path='/logIn'
        element={<LogIn />}
      />

			<Route
        path='/signUp'
        element={<SignUp />}
      />
    </Routes>
  )
}

export default App
