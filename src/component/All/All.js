import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { dataAllContext, dataContext } from '../../context/Store'
import HomeNav from '../NavFooter/HomeNav'

const All = () => {
    const {dataAll} = useContext(dataContext)

console.log("all", dataAll)

  return (
    <div >
        
    <HomeNav  />
<div className='MainAllDiv container-fluid  col-12 text-left mx-auto'>
      {dataAll.map((dataAll,index, idt)=> {
      return (
        <>
              <Link to={`/Details/${dataAll.id}`}  dataAll={dataAll}  className='MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 '  key={index.id} style={{position:"relative"}}>
                  <div className='ImgMainDivForZoom col-xl-10  col-10' >
                  <img className='col-xl-12  col-12' src={dataAll.thumbnail} />
                </div>
                <div className='py-3 col-12 d-flex text-center justify-content-center align-items-center' >
                  <div className='col'>
              {dataAll.title}
              </div>
              <div className='col'>
                <span>FREE</span>
               { console.log("my idt" ,idt)}
              </div>
              </div> 
              
{              localStorage.setItem('dataAllas', dataAll.id)
}
              </Link>
            
              </>   )}
              )}
   
              </div>
    </div>
  )
}

export default All