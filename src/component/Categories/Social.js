import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { datasocialContext, dataContext } from '../../context/Store'
import HomeNav from '../NavFooter/HomeNav'

const Social = () => {
    const {datasocial} = useContext(dataContext)

// console.log("all", datasocial)

  return (
    <div >
        
    <HomeNav  />
<div className='MainAllDiv container-fluid  col-12 text-left mx-auto'>
      {datasocial.map((datasocial,index, idt)=> {
      return (
        <>
              <Link to={`/Details/${datasocial.id}`}  datasocial={datasocial}  className='MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 '  key={index.id} style={{position:"relative"}}>
                  <div className='ImgMainDivForZoom col-xl-10  col-10' >
                  <img className='col-xl-12  col-12' src={datasocial.thumbnail} />
                </div>
                <div className='py-3 col-12 d-flex text-center justify-content-center align-items-center' >
                  <div className='col'>
              {datasocial.title}
              </div>
              <div className='col'>
                <span>FREE</span>
              </div>
              </div> 
              
{              localStorage.setItem('datasocialas', datasocial.id)
}
              </Link>
            
              </>   )}
              )}
   
              </div>
    </div>
  )
}

export default Social