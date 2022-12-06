import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import { datapopContext, dataContext } from '../../context/Store'
import HomeNav from '../NavFooter/HomeNav'

const Popu = () => {
    const {datapop} = useContext(dataContext)

console.log("all", datapop)

  return (
    <div >
        
    <HomeNav  />
    { datapop.length > 0 ?

<div className='MainAllDiv container-fluid  col-12 text-left mx-auto'>
      {datapop.map((datapop,index, idt)=> {
      return (
    
              <Link to={`/Details/${datapop.id}`}  datapop={datapop}  className='MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 '  key={index.id} style={{position:"relative"}}>
                  <div className='ImgMainDivForZoom col-xl-10  col-10' >
                  <img className='col-xl-12  col-12' src={datapop.thumbnail} />
                </div>
                <div className='py-3 col-12 d-flex text-center justify-content-center align-items-center' >
                  <div className='col'>
              {datapop.title}
              </div>
              <div className='col'>
                <span>FREE</span>
              </div>
              </div> 
{/*               
{              localStorage.setItem('datapopas', datapop.id)
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

export default Popu