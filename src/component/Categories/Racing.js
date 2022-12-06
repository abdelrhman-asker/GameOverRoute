import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import { dataracingContext, dataContext } from '../../context/Store'
import HomeNav from '../NavFooter/HomeNav'

const Racing = () => {
    const {dataracing} = useContext(dataContext)

// console.log("all", dataracing)

  return (
    <div >
        
    <HomeNav  />
    { dataracing.length > 0 ?

<div className='MainAllDiv container-fluid  col-12 text-left mx-auto'>
      {dataracing.map((dataracing,index, idt)=> {
      return (
        
              <Link to={`/Details/${dataracing.id}`}  dataracing={dataracing}  className='MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 '  key={index.id} style={{position:"relative"}}>
                  <div className='ImgMainDivForZoom col-xl-10  col-10' >
                  <img className='col-xl-12  col-12' src={dataracing.thumbnail} />
                </div>
                <div className='py-3 col-12 d-flex text-center justify-content-center align-items-center' >
                  <div className='col'>
              {dataracing.title}
              </div>
              <div className='col'>
                <span>FREE</span>
              </div>
              </div> 
              
{/* {              localStorage.setItem('dataracingas', dataracing.id)
} */}
              </Link>
            
        )}
              )}
   
              </div>
              : <div className='Loader'><BounceLoader color="#36d7b7" /> </div>
            }
    </div>
  )
}

export default Racing