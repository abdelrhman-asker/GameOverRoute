import axios from 'axios'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import HomeNav from "../NavFooter/HomeNav"
import { FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { dataContext } from '../../context/Store';
import MainNav from '../NavFooter/HomeNav';
import { FiLogIn } from 'react-icons/fi';
import { BounceLoader } from 'react-spinners';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import "./Swiper.css";
const Details = () => {
  const [titledataAll, setTitledataAll] = useState([])
  
  const {dataAll} = useContext(dataContext)
 const {id} = useParams();
const dataAllas = dataAll.find((dataAllas) => dataAllas.id ==
id);


console.log("dataAllas" ,dataAllas)
console.log("dataAllasid" ,dataAllas.id)
  



// titles

const optionss = {
  method: 'GET',
   url : `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${dataAllas.id}}`,
  headers: {
    'X-RapidAPI-Key': 'fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};



useEffect(() => {

  axios.request(optionss).then(function (response) {
    setTitledataAll(response.data)
  
  }).catch(function (error) {
    console.error(error);
  });
}, [])

console.log("titled dataAll133", titledataAll)
console.log("titled dataAll1", titledataAll)
console.log("titled dataAll2",  dataAll.id)

// console.log("titled dataAll",titledataAll.minimum_system_requirements)
    return (
      <div className='MainDetailsSecEver1'>
                <MainNav />
                <div className='MainDetailsSecEver'>



        <div  >
{/* <h1 className='alert alert-danger'>
  {id}
</h1>
    { dataalpha.length > 0 ?
: <div className='Loader'><BounceLoader color="#36d7b7" /> </div>
            }

<h1 className='alert alert-danger'>
  {dataAllas.title}
</h1> */}
    
{/* <Link to="/Home" >Back to Home</Link> */}
{ dataAllas.id === titledataAll.id ?     
               
               <div className='col-12 d-md-flex flex-md-row flex-coloumn    container-fluid   MainDetailsSecEverOnMap' > 
                
              <div className='DetailsLeeft col-10 col-md-4 mx-auto ms-md-0'>
                <div className='DetailsLeftTop col-12'>
                  <img className='col-12' src={dataAllas.thumbnail} />
                </div>
                <div className='DetailsLeftBut col-12'>
                  <div className='DetailsLeftButLefet '>
                
                <span className='FreeText'>FREE</span>
              
                  </div>
                  <a target="_blank" href={dataAllas.freetogame_profile_url} className='DetailsLeftButRight '>
                  <h4> Play Now </h4><FiLogIn />
                  </a>
                </div>

              </div>







                <div className='DetailssRight mt-5 my-md-0  col-md-8 col-10 mx-auto ms-md-4'>
                  <div className='text-left'>
                    <h3 >
                    {dataAllas.title}
                    </h3>
                  </div>
                  <div className='text-left'>
                    <h4 >
                    About {dataAllas.title}
                    </h4>
                  </div>
<div>
<h5>
                    {titledataAll.description}
                  {/* <img src={titledataAll.screenshots["0"].image} />   */}
                    
                    </h5>
</div>


{titledataAll.screenshots  ?
<div className='col-9'>
<Swiper  slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        
       
        modules={[Navigation, Pagination, Scrollbar, A11y]} 
        navigation={true}
        scrollbar={{ draggable: true }}
        className="mySwiper wow fadeInUp col-7" data-wow-duration="2s" data-wow-delay="0.5s"
      >    
      {console.log(titledataAll.screenshots["0"].image)}
      <SwiperSlide>
           <div  className="MainSwipesDiv animate__animated animate__backInLeft" >
              <img  src={titledataAll.screenshots["0"].image} alt="Not_Found" />
            </div>
        </SwiperSlide>
       <SwiperSlide>
           <div  className="MainSwipesDiv animate__animated animate__backInLeft" >
              <img  src={titledataAll.screenshots["1"].image} alt="Not_Found" />
            </div>
        </SwiperSlide>
       <SwiperSlide>
           <div  className="MainSwipesDiv animate__animated animate__backInLeft" >
              <img  src={titledataAll.screenshots["2"].image} alt="Not_Found" />
            </div>
        </SwiperSlide>
       
        </Swiper></div> : null }
     

   
                  <div className='text-left'>
                    <h3 >
                    Min. System Requirements
                    </h3>
                  </div>
                  {titledataAll.minimum_system_requirements ? 
 <div className='text-left' key={titledataAll.id}>
                    <h4 >
                   <span style={{fontSize:"larger"}}> Graphics : </span>{titledataAll.minimum_system_requirements.graphics}
                    </h4>
                    <h4 >
                    <span style={{fontSize:"larger"}}>   Memory : </span>{titledataAll.minimum_system_requirements.memory}
                    </h4>
                    <h4 >
                    <span style={{fontSize:"larger"}}>  Os : </span>{titledataAll.minimum_system_requirements.os}
                    </h4>
                    <h4 >
                    <span style={{fontSize:"larger"}}> Processor : </span>{titledataAll.minimum_system_requirements.processor}
                    </h4>
                    <h4 >
                    <span style={{fontSize:"larger"}}>  Storage : </span>{titledataAll.minimum_system_requirements.storage}
                    </h4>
                  </div> 
              : "" }
                  

                </div>
                



                  </div>
               
               
              : <div className='Loader'><BounceLoader color="#36d7b7" /> </div>}
               
                        
{/* {  console.log("my dataAll" ,dataAll.id)
} */}
              </div>
      
 
                    </div>

      </div>



    )
  }
  

export default Details