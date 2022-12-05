import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import { datashooterContext, dataContext } from '../../context/Store'
import HomeNav from '../NavFooter/HomeNav'

const Shooter = () => {
    const {datashooter} = useContext(dataContext)

// console.log("all", datashooter)

  return (
    <div >
        
    <HomeNav  />
    { datashooter.length > 0 ?

<div className='MainAllDiv container-fluid  col-12 text-left mx-auto'>
      {datashooter.map((datashooter,index, idt)=> {
      return (
        <>
              <Link to={`/Details/${datashooter.id}`}  datashooter={datashooter}  className='MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 '  key={index.id} style={{position:"relative"}}>
                  <div className='ImgMainDivForZoom col-xl-10  col-10' >
                  <img className='col-xl-12  col-12' src={datashooter.thumbnail} />
                </div>
                <div className='py-3 col-12 d-flex text-center justify-content-center align-items-center' >
                  <div className='col'>
              {datashooter.title}
              </div>
              <div className='col'>
                <span>FREE</span>
              </div>
              </div> 
              
{/* {              localStorage.setItem('datashooteras', datashooter.id)
} */}
              </Link>
            
              </>   )}
              )}
   
              </div>
              : <div className='Loader'><BounceLoader color="#36d7b7" /> </div>
            }
    </div>
  )
}

export default Shooter