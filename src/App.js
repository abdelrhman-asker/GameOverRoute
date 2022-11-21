import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes, Link, NavLink } from 'react-router-dom'
import SignUp from './component/SignUpIn/SignUp'
import SignIn from './component/SignUpIn/SignIn'
import "./App.css"
const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
          </Routes>
        </BrowserRouter>


    </div>
  )
}

export default App