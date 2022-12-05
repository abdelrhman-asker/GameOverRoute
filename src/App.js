import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes, Link, NavLink } from 'react-router-dom'
import SignUp from './component/SignUpIn/SignUp'
import SignIn from './component/SignUpIn/SignIn'
import Home from "./component/Home"
import "./App.css"
import Details from './component/Details/Details';
import All from './component/All/All';

import axios from 'axios';
import DataContextProvider, { dataContext } from './context/Store';
import { Offline, Online } from "react-detect-offline";
import ScrollToTop from './Scrolltotop';
import Browserplatform from './component/Platform/Browserplatform';
import Pcplatform from './component/Platform/Pcplatform';
import Alphab from './component/Sortby/Alphab';
import Popu from './component/Sortby/Popu';
import Rele from './component/Sortby/Rele';
import Release from './component/Sortby/Release';
import Racing from './component/Categories/Racing';
import Sports from './component/Categories/Sports';
import Social from './component/Categories/Social';
import Shooter from './component/Categories/Shooter';
import Openworld from './component/Categories/Openworld';
import Zombie from './component/Categories/Zombie';

const App = () => {
  const {data} = useContext(dataContext)

  return (
    <div>
        <BrowserRouter>
        <ScrollToTop />
        {/* <Offline className="d-flex  ">
          <div style={{height:"5vh",paddingTop:"20vh", fontSize:"36px", color:"Red",  }} className="mx-auto my-auto size-5 d-flex justify-content-center align-items-center  text-center ">
          
          You Lost Your Connection, Please Check your INTERNET
          </div>
          <Routes>

            <Route path='/' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Home' element={<Home data={data}  />} />
          

            <Route exact path='Details/:id' 
              element={<Details /> } />
           

             




            <Route path='/All' element={<All    />} />

          </Routes>
          </Offline> */}
        <Online>

       
          <Routes>

            <Route path='/' element={<SignUp />} />
            <Route path='*' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Home' element={<Home data={data}  />} />
{/* Details Page */}
            <Route exact path='Details/:id' element={<Details /> } />
           
{/* All Games page */}
            <Route path='/All' element={<All    />} />
            {/* PlatForms */}
            <Route path='/Pcplatform' element={<Pcplatform    />} />
            <Route path='/Browserplatform' element={<Browserplatform    />} />
            {/* Sorted Games */}
            <Route path='/Alphabetical' element={<Alphab    />} />
            <Route path='/Popu' element={<Popu    />} />
            <Route path='/Relevance' element={<Rele    />} />
            <Route path='/Release' element={<Release    />} />
{/* Categories Games */}
<Route path='/Racing' element={<Racing    />} />
<Route path='/Sports' element={<Sports    />} />
<Route path='/Social' element={<Social    />} />
<Route path='/Shooter' element={<Shooter    />} />
<Route path='/Zombie' element={<Zombie    />} />
<Route path='/Openworld' element={<Openworld    />} />

          </Routes>
   </Online>
        </BrowserRouter>


    </div>
  )
}

export default App