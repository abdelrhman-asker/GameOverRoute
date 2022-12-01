import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { dataopenworldContext, dataContext } from '../../context/Store'
import HomeNav from '../NavFooter/HomeNav'

const Openworld = () => {
    const {dataopenworld} = useContext(dataContext)

// console.log("all", dataopenworld)

  return (
    <div >
        
    <HomeNav  />
<div className='MainAllDiv container-fluid  col-12 text-left mx-auto'>
      {dataopenworld.map((dataopenworld,index, idt)=> {
      return (
        <>
              <Link to={`/Details/${dataopenworld.id}`}  dataopenworld={dataopenworld}  className='MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 '  key={index.id} style={{position:"relative"}}>
                  <div className='ImgMainDivForZoom col-xl-10  col-10' >
                  <img className='col-xl-12  col-12' src={dataopenworld.thumbnail} />
                </div>
                <div className='py-3 col-12 d-flex text-center justify-content-center align-items-center' >
                  <div className='col'>
              {dataopenworld.title}
              </div>
              <div className='col'>
                <span>FREE</span>
              </div>
              </div> 
              
{              localStorage.setItem('dataopenworldas', dataopenworld.id)
}
              </Link>
            
              </>   )}
              )}
   
              </div>
    </div>
  )
}

export default Openworld