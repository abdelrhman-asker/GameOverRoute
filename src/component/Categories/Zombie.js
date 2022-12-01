import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { datazombieContext, dataContext } from '../../context/Store'
import HomeNav from '../NavFooter/HomeNav'

const Zombie = () => {
    const {datazombie} = useContext(dataContext)

// console.log("all", datazombie)

  return (
    <div >
        
    <HomeNav  />
<div className='MainAllDiv container-fluid  col-12 text-left mx-auto'>
      {datazombie.map((datazombie,index, idt)=> {
      return (
        <>
              <Link to={`/Details/${datazombie.id}`}  datazombie={datazombie}  className='MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 '  key={index.id} style={{position:"relative"}}>
                  <div className='ImgMainDivForZoom col-xl-10  col-10' >
                  <img className='col-xl-12  col-12' src={datazombie.thumbnail} />
                </div>
                <div className='py-3 col-12 d-flex text-center justify-content-center align-items-center' >
                  <div className='col'>
              {datazombie.title}
              </div>
              <div className='col'>
                <span>FREE</span>
              </div>
              </div> 
              
{              localStorage.setItem('datazombieas', datazombie.id)
}
              </Link>
            
              </>   )}
              )}
   
              </div>
    </div>
  )
}

export default Zombie