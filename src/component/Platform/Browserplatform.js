import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import { databrowserContext, dataContext } from '../../context/Store'
import HomeNav from '../NavFooter/HomeNav'

const Browserplatform = () => {
    const {databrowser} = useContext(dataContext)

    console.log("browser", databrowser)
    
      return (
        <div >
            
        <HomeNav  />
        { databrowser.length > 0 ?

    <div className='MainAllDiv container-fluid  col-12 text-left mx-auto'>
          {databrowser.map((databrowser,index, idt)=> {
          return (
         
                  <Link to={`/Details/${databrowser.id}`}  databrowser={databrowser}  className='MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 '  key={index.id} style={{position:"relative"}}>
                      <div className='ImgMainDivForZoom col-xl-10  col-10' >
                      <img className='col-xl-12  col-12' src={databrowser.thumbnail} />
                    </div>
                    <div className='py-3 col-12 d-flex text-center justify-content-center align-items-center' >
                      <div className='col'>
                  {databrowser.title}
                  </div>
                  <div className='col'>
                    <span>FREE</span>
                   {/* { console.log("my idt" ,idt)} */}
                  </div>
                  </div> 
                  
    {              localStorage.setItem('databrowseras', databrowser.id)
    }
                  </Link>
                
                )}
                  )}
       
                  </div>
                  : <div className='Loader'><BounceLoader color="#36d7b7" /> </div>
                }
        </div>
      )
}

export default Browserplatform