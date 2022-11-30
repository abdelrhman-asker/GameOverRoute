import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import HomeNav from "./NavFooter/HomeNav"
import { FaRobot } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { dataContext } from '../context/Store';
import { BrowserRouter, Route, Router, Routes, Link, NavLink,  } from 'react-router-dom'
import Details from './Details/Details';

const Home = ({data}) => {

console.log("in home",data)


  return (
    <div>
      <HomeNav />
      <div className='col-12 MainFirstHomeSecEver'>
<div className='MainFirstHomeSec col-12'>
    <div>
      <h3>
      Find & track the best <span> free-to-play </span> games!

      </h3>
    </div>
    <div>
      <h4>
      Track what you've played and search for what to play next! Plus get free premium loot!



      </h4>
    </div>
    <div>
<button>
  Browse Games
</button>

    </div>
    </div>

</div>


<div className='MainHomesecSection'>
<div className='PersonlRecMainDiv  '>

<h4 className='PersonlRecMainH  d-flex justify-content-start align-items-center gap-2'>

  <span  >
    <FaRobot size={42}/>
  </span>
Personalized Recommendations

</h4>



</div>

<div className='MainDivINtoMap container-fluid  col-12 text-left mx-auto'>
      {data.slice(0,3).map((data,index, idt)=> {
      return (
        <>
              <Link to={`/Details/${data.id}`}  data={data}  className='MainDivMapImgAndTitle col-xl-4 mx-auto col-12 '  key={index.id} style={{position:"relative"}}>
                  <div className='ImgMainDivForZoom' >
                  <img className='col-xl-12  col-12' src={data.thumbnail} />
                </div>
                <div className='py-3 col-10 d-flex justify-content-center align-items-center' >
                  <div className='col'>
              {data.title}
              </div>
              <div className='col'>
                <span>FREE</span>
               { console.log("my idt" ,idt)}
              </div>
              </div> 
              
   
              </Link>
              <Routes>
  <Route  path="/Details/:data.id" exact render={({match}) => (
    <Details  data={data.find((data) => String(data.id) === match.params.id) }   />)} />
  </Routes>
              </>   )}
              )}
   
              </div>
</div>


        
          
    </div>
  )
}

export default Home