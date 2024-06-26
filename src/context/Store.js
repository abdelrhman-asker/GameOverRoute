import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export const dataContext = createContext();

export default function DataContextProvider(props) {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/filter",
    params: { tag: "3d.mmorpg.fantasy.pvp", platform: "pc" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        // console.log("onstore", response)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [dataAll, setdataAll] = useState([]);
  const optionsAll = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionsAll)
      .then(function (response) {
        setdataAll(response.data);
        // console.log("onstore", response)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Platform
  //  ||
  //  \/

  // Pc platform
  const [datapc, setdataPc] = useState([]);
  const optionsPc = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { platform: "pc" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionsPc)
      .then(function (response) {
        setdataPc(response.data);
        // console.log("onstore", response)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Browser platform
  const [databrowser, setdataBrowser] = useState([]);
  const optionsBrowser = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { platform: "browser" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionsBrowser)
      .then(function (response) {
        setdataBrowser(response.data);
        // console.log("onstore", response)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Sorted
  //  ||
  //  \/

  // Sort by  Release-Date
  const [datarelease, setdatarelease] = useState([]);
  const optionsrelease = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { "sort-by": "release-date" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionsrelease)
      .then(function (response) {
        setdatarelease(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Sort by  Popularity
  const [datapop, setdatapop] = useState([]);
  const optionspop = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { "sort-by": "popularity" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionspop)
      .then(function (response) {
        setdatapop(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Sort by  alphabetical
  const [dataalpha, setdataalpha] = useState([]);
  const optionsalpha = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { "sort-by": "alphabetical" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionsalpha)
      .then(function (response) {
        setdataalpha(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Sort by  Relevance
  const [datarele, setdatarele] = useState([]);
  const optionsrelevance = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { "sort-by": "relevance" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionsrelevance)
      .then(function (response) {
        setdatarele(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Categories
  //  ||
  //  \/

  // OpenWorld
  const [dataopenworld, setdataopenworld] = useState([]);
  const optionsopenworld = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { category: "open-world" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionsopenworld)
      .then(function (response) {
        setdataopenworld(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Shooter
  const [datashooter, setdatashooter] = useState([]);
  const optionsshooter = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { category: "shooter" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionsshooter)
      .then(function (response) {
        setdatashooter(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Racing
  const [dataracing, setdataracing] = useState([]);
  const optionsracing = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { category: "racing" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionsracing)
      .then(function (response) {
        setdataracing(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // social
  const [datasocial, setdatasocial] = useState([]);
  const optionssocial = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { category: "social" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionssocial)
      .then(function (response) {
        setdatasocial(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // sports
  const [datasports, setdatasports] = useState([]);
  const optionssports = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { category: "social" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionssports)
      .then(function (response) {
        setdatasports(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // zombie
  const [datazombie, setdatazombie] = useState([]);
  const optionszobmie = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { category: "zombie" },
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(optionszobmie)
      .then(function (response) {
        setdatazombie(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [user, setUser] = useState(null);
  const LogOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  let [hash, setHash] = useState("GameOver");
  const newHash = () => {
    setHash(window.location.hash.slice(2, window.location.hash.length));
  };

  return (
    <div>
      <dataContext.Provider
        value={{
          data,
          dataAll,
          datapc,
          databrowser,
          datarelease,
          datapop,
          dataalpha,
          datarele,
          dataopenworld,
          datashooter,
          dataracing,
          datasocial,
          datasports,
          datazombie,
          LogOut,
          newHash,
        }}
      >
        {props.children}
      </dataContext.Provider>
    </div>
  );
}
