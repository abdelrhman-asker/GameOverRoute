import axios from 'axios'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import HomeNav from "../NavFooter/HomeNav"
import { FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { dataContext } from '../../context/Store';
import MainNav from '../NavFooter/HomeNav';
import { FiLogIn } from 'react-icons/fi';

const Details = () => {
  const [titledata, setTitleData] = useState([])

  const {data} = useContext(dataContext)
 const {id} = useParams();
const dataas = data.find((dataas) => dataas.id ==
id);


console.log("dataas" ,dataas)
console.log("dataasid" ,dataas.id)
  


// titles

const optionss = {
  method: 'GET',
   url : `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${dataas.id}}`,
  headers: {
    'X-RapidAPI-Key': 'fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};



useEffect(() => {

  axios.request(optionss).then(function (response) {
    setTitleData(response.data)

  }).catch(function (error) {
    console.error(error);
  });
}, [])


console.log("titled data",titledata)
console.log("titled data",titledata.minimum_system_requirements)
    return (
      <div className='MainDetailsSecEver1'>
                <MainNav />
                <div className='MainDetailsSecEver'>



        <div  >
{/* <h1 className='alert alert-danger'>
  {id}
</h1>


<h1 className='alert alert-danger'>
  {dataas.title}
</h1> */}
    
{/* <Link to="/Home" >Back to Home</Link> */}
               
               <div className='col-12 d-md-flex flex-md-row flex-coloumn    container-fluid   MainDetailsSecEverOnMap' > 
                
              <div className='DetailsLeeft col-10 col-md-4 mx-auto ms-md-0'>
                <div className='DetailsLeftTop col-12'>
                  <img className='col-12' src={dataas.thumbnail} />
                </div>
                <div className='DetailsLeftBut col-12'>
                  <div className='DetailsLeftButLefet '>
                
                <span>FREE</span>
              
                  </div>
                  <a target="_blank" href={dataas.freetogame_profile_url} className='DetailsLeftButRight '>
                  <h4> Play Now </h4><FiLogIn />
                  </a>
                </div>

              </div>







                <div className='DetailssRight mt-5 my-md-0  col-md-8 col-10 mx-auto ms-md-4'>
                  <div className='text-left'>
                    <h3 >
                    {dataas.title}
                    </h3>
                  </div>
                  <div className='text-left'>
                    <h4 >
                    About {dataas.title}
                    </h4>
                  </div>
<div>
<h5>
                    {titledata.description}
                    </h5>
<h3>
                    {titledata.title}
                    </h3>
</div>
                  <div className='text-left'>
                    <h3 >
                    Min. System Requirements
                    </h3>
                  </div>
                  {titledata.minimum_system_requirements ? 
 <div className='text-left' key={titledata.id}>
                    <h4 >
                    Graphics : {titledata.minimum_system_requirements.graphics}
                    </h4>
                    <h4 >
                    Memory : {titledata.minimum_system_requirements.memory}
                    </h4>
                    <h4 >
                    Os : {titledata.minimum_system_requirements.os}
                    </h4>
                    <h4 >
                    Processor : {titledata.minimum_system_requirements.processor}
                    </h4>
                    <h4 >
                    Storage : {titledata.minimum_system_requirements.storage}
                    </h4>
                  </div> 
              : "" }
                  

                </div>
                



                  </div>
               
               
               
               
                        
{/* {  console.log("my data" ,data.id)
} */}
              </div>
      
 
                    </div>

      </div>



    )
  }
  

export default Details