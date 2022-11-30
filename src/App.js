import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes, Link, NavLink } from 'react-router-dom'
import SignUp from './component/SignUpIn/SignUp'
import SignIn from './component/SignUpIn/SignIn'
import Home from "./component/Home"
import "./App.css"
import Details from './component/Details/Details';
import axios from 'axios';
import DataContextProvider, { dataContext } from './context/Store';
import { Offline, Online } from "react-detect-offline";

const App = () => {
  const {data} = useContext(dataContext)

  return (
    <div>
        <BrowserRouter>
        <Offline className="d-flex  ">
          <div style={{height:"100vh", fontSize:"56px"}} className="mx-auto my-auto size-5 d-flex justify-content-center align-items-center  text-center">
          
          You Lost Your Connection, Please Check your INTERNET
          </div></Offline>
        <Online>

        
          <Routes>

            <Route path='/' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Home' element={<Home data={data}  />} />
            <Route exact path='Details/:id' 
              element={<Details /> } />
          </Routes>
   </Online>
        </BrowserRouter>


    </div>
  )
}

export default App