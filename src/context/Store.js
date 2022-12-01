import axios from "axios";
import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../component/Details/Details";



export const dataContext = createContext()


export default function DataContextProvider (props)  {
    const [data, setData] = useState([])
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
      params: {tag: '3d.mmorpg.fantasy.pvp', platform: 'pc'},
      headers: {
        'X-RapidAPI-Key': 'fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      },
      
      
    };
    useEffect(() => {
  
    axios.request(options).then(function (response) {
      setData(response.data)
      console.log("onstore", response)

    }).catch(function (error) {
      console.error(error);
    });
  }, [])



  const [dataAll, setdataAll] = useState([])
    const optionsAll = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': 'fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
},
      
      
    };
    useEffect(() => {
  
    axios.request(optionsAll).then(function (response) {
        setdataAll(response.data)
      console.log("onstore", response)
  
    }).catch(function (error) {
      console.error(error);
    });
  }, [])
  return (
    <div>
  
  <dataContext.Provider value={{data, dataAll }} >
{props.children}
  </dataContext.Provider>
  </div>
)
}

