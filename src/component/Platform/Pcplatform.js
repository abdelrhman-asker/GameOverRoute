import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { datapcContext, dataContext } from '../../context/Store'
import HomeNav from '../NavFooter/HomeNav'

const Pcplatform = () => {
    const {datapc} = useContext(dataContext)

    console.log("Pc", datapc)
    
      return (
        <div >
            
        <HomeNav  />
    <div className='MainAllDiv container-fluid  col-12 text-left mx-auto'>
          {datapc.map((datapc,index, idt)=> {
          return (
            <>
                  <Link to={`/Details/${datapc.id}`}  datapc={datapc}  className='MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 '  key={index.id} style={{position:"relative"}}>
                      <div className='ImgMainDivForZoom col-xl-10  col-10' >
                      <img className='col-xl-12  col-12' src={datapc.thumbnail} />
                    </div>
                    <div className='py-3 col-12 d-flex text-center justify-content-center align-items-center' >
                      <div className='col'>
                  {datapc.title}
                  </div>
                  <div className='col'>
                    <span>FREE</span>
                   {/* { console.log("my idt" ,idt)} */}
                  </div>
                  </div> 
                  
    {              localStorage.setItem('datapcas', datapc.id)
    }
                  </Link>
                
                  </>   )}
                  )}
       
                  </div>
        </div>
      )
}

export default Pcplatform