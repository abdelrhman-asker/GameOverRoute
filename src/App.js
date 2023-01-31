import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  Link,
  NavLink,
  Navigate,
  HashRouter,
} from "react-router-dom";
import SignUp from "./component/SignUpIn/SignUp";
import SignIn from "./component/SignUpIn/SignIn";
import Home from "./component/Home";
import "./App.css";
import Details from "./component/Details/Details";
import All from "./component/All/All";

import axios from "axios";
import DataContextProvider, { dataContext } from "./context/Store";
import { Offline, Online } from "react-detect-offline";
import ScrollToTop from "./Scrolltotop";
import Browserplatform from "./component/Platform/Browserplatform";
import Pcplatform from "./component/Platform/Pcplatform";
import Alphab from "./component/Sortby/Alphab";
import Popu from "./component/Sortby/Popu";
import Rele from "./component/Sortby/Rele";
import Release from "./component/Sortby/Release";
import Racing from "./component/Categories/Racing";
import Sports from "./component/Categories/Sports";
import Social from "./component/Categories/Social";
import Shooter from "./component/Categories/Shooter";
import Openworld from "./component/Categories/Openworld";
import Zombie from "./component/Categories/Zombie";
import jwtDecode from "jwt-decode";
import { BarLoader, BounceLoader } from "react-spinners";
const App = () => {
  const { data } = useContext(dataContext);
  const { LogOut } = useContext(dataContext);

  const [user, setUser] = useState(null);
  const usertoken = () => {
    const encoded = localStorage.getItem("token");
    const decoded = jwtDecode(encoded);
    console.log(decoded);
    setUser(decoded);
  };

  const Protect = (props) => {
    if (localStorage.getItem("token") === null) {
      return <Navigate to="/SignIn" />;
    } else {
      return props.children;
    }
  };

  // const [loading , setLoading] = useState(false);

  //     useEffect(() =>{
  //         setLoading(true)
  //         setTimeout(() =>{
  //             setLoading(false)

  //         } , 200000)

  //     },[])

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        {/* {loading === false ?<div style={{width:"100vw", height:"100vh", justifyContent:"center", alignItems:"center", display:"flex"}}> <BounceLoader color="#36d7b7" style={{width:"100vw", height:"100vh"}}/> </div>: null} */}

        <Online>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="*" element={<SignUp />} />
            <Route
              path="/SignIn"
              element={<SignIn currentUser={usertoken} />}
            />
            <Route
              path="/Home"
              element={
                <Protect>
                  <Home data={data} />
                </Protect>
              }
            />
            {/* Details Page */}
            <Route
              path="Details/:id"
              element={
                <Protect>
                  <Details />
                </Protect>
              }
            />

            {/* All Games page */}
            <Route
              path="/All"
              element={
                <Protect>
                  <All />
                </Protect>
              }
            />
            {/* PlatForms */}
            <Route
              path="/Pcplatform"
              element={
                <Protect>
                  <Pcplatform />
                </Protect>
              }
            />
            <Route
              path="/Browserplatform"
              element={
                <Protect>
                  <Browserplatform />
                </Protect>
              }
            />
            {/* Sorted Games */}
            <Route
              path="/Alphabetical"
              element={
                <Protect>
                  <Alphab />
                </Protect>
              }
            />
            <Route
              path="/Popu"
              element={
                <Protect>
                  <Popu />
                </Protect>
              }
            />
            <Route
              path="/Relevance"
              element={
                <Protect>
                  <Rele />
                </Protect>
              }
            />
            <Route
              path="/Release"
              element={
                <Protect>
                  <Release />
                </Protect>
              }
            />
            {/* Categories Games */}
            <Route
              path="/Racing"
              element={
                <Protect>
                  <Racing />
                </Protect>
              }
            />
            <Route
              path="/Sports"
              element={
                <Protect>
                  <Sports />
                </Protect>
              }
            />
            <Route
              path="/Social"
              element={
                <Protect>
                  <Social />
                </Protect>
              }
            />
            <Route
              path="/Shooter"
              element={
                <Protect>
                  <Shooter />
                </Protect>
              }
            />
            <Route
              path="/Zombie"
              element={
                <Protect>
                  <Zombie />
                </Protect>
              }
            />
            <Route
              path="/Openworld"
              element={
                <Protect>
                  <Openworld />
                </Protect>
              }
            />
          </Routes>
        </Online>
      </BrowserRouter>
    </div>
  );
};

export default App;
