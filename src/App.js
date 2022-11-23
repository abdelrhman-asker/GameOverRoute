import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes, Link, NavLink } from 'react-router-dom'
import SignUp from './component/SignUpIn/SignUp'
import SignIn from './component/SignUpIn/SignIn'
import Home from "./component/Home"
import "./App.css"
const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Home' element={<Home />} />
          </Routes>
        </BrowserRouter>


    </div>
  )
}

export default App