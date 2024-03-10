import axios from "axios";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { FaRobot } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { dataContext } from "../../context/Store";
import HomeNav from "../NavFooter/HomeNav";
import { FiLogIn } from "react-icons/fi";
import { BarLoader, BounceLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";
import ReadMoreReact from "read-more-react";
import Typewriter from "typewriter-effect";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "./Swiper.css";
const Details = () => {
  const [titledataAll, setTitledataAll] = useState([]);

  const { id } = useParams();

  const optionss = {
    method: "GET",
    url: `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}}`,
    headers: {
      "X-RapidAPI-Key": "fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  const loader = setTimeout(() => {
    setLoading(false);
  }, 2000);

  // console.log("titled dataAll133", titledataAll)
  // console.log("titled dataAll1", titledataAll)
  // console.log("titled dataAll2",  dataAll.id)
  const rend = [titledataAll];
  const check = Array.from(rend).map((element) => element.screenshots);
  console.log("check", check);

  useEffect(() => {
    axios
      .request(optionss)
      .then(function (response) {
        setTitledataAll(response.data);
        console.log("ttdata", titledataAll);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  // console.log("titled dataAll",titledataAll.minimum_system_requirements)
  return (
    <div className="MainDetailsSecEver1">
      <HomeNav />
      <div className="MainDetailsSecEver">
        <div>
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
          {titledataAll.id && loading === false ? (
            <div className="col-12 d-md-flex flex-md-row flex-coloumn    container-fluid   MainDetailsSecEverOnMap">
              <div className="DetailsLeeft col-10 col-md-4 mx-auto ms-md-0">
                <div className="DetailsLeftTop col-12">
                  <img
                    className="col-12"
                    alt="thumbnail"
                    src={titledataAll["thumbnail"]}
                    loading="eager"
                    onLoad={loader}
                  />
                </div>
                <div className="DetailsLeftBut col-12">
                  <div className="DetailsLeftButLefet ">
                    <span className="FreeText">FREE</span>
                  </div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={titledataAll["game_url"]}
                    className="DetailsLeftButRight "
                  >
                    <h4> Play Now </h4>
                    <FiLogIn />
                  </a>
                </div>
              </div>

              <div className="DetailssRight mt-5 my-md-0  col-md-8 col-10 mx-auto ms-md-4">
                <div className="text-left">
                  <h3>
                    <Typewriter
                      options={{
                        strings: titledataAll["title"],
                        delay: 200,
                        autoStart: true,

                        loop: false,
                      }}
                    />
                  </h3>
                </div>
                <div className="text-left col-12">
                  <h4>About {titledataAll["title"]}</h4>
                </div>
                <div>
                  <h5>
                    <ReadMoreReact
                      text={titledataAll.description}
                      min={250}
                      ideal={450}
                      max={5000}
                      readMoreText="Read More"
                    />
                    {/* <img src={titledataAll.screenshots["0"].image} />   */}
                  </h5>
                </div>
                {/* <div className='col-11'>
<Swiper  slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        
       
        modules={[Navigation, Pagination, Scrollbar, A11y]} 
        navigation={true}
        scrollbar={{ draggable: true }}
        className="mySwiper wow fadeInUp col-12" data-wow-duration="2s" data-wow-delay="0.5s"
      >    
                    {rend.map(({screenshots}) => {
                     return( <SwiperSlide>
                     <img src={screenshots[0].image}/>
  </SwiperSlide>) 

}
)} </Swiper>
</div> */}

                {titledataAll.screenshots.length > 0 ? (
                  <div className="col-12">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      freeMode={true}
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      navigation={true}
                      scrollbar={{ draggable: true }}
                      className="mySwiper wow fadeInUp col-12"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      <SwiperSlide>
                        <div className="MainSwipesDiv animate__animated animate__backInLeft">
                          {loading ? (
                            <BarLoader
                              className="Barloader"
                              color="#36d7b7"
                              height={10}
                              loading
                              width={500}
                            />
                          ) : null}

                          <img
                            src={titledataAll.screenshots["0"].image}
                            alt="Not_Found"
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="MainSwipesDiv animate__animated animate__backInLeft">
                          {loading ? (
                            <BarLoader
                              className="Barloader"
                              color="#36d7b7"
                              height={10}
                              loading
                              width={500}
                            />
                          ) : null}
                          <img
                            src={titledataAll.screenshots["1"].image}
                            alt="Not_Found"
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="MainSwipesDiv animate__animated animate__backInLeft">
                          {loading ? (
                            <BarLoader
                              className="Barloader"
                              color="#36d7b7"
                              height={10}
                              loading
                              width={500}
                            />
                          ) : null}
                          <img
                            src={titledataAll.screenshots["2"].image}
                            alt="Not_Found"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                ) : (
                  <div className="Loader">
                    <BarLoader
                      color="#36d7b7"
                      height={10}
                      loading
                      width={500}
                    />
                  </div>
                )}

                <div className="text-left">
                  <h3>Min. System Requirements</h3>
                </div>
                {titledataAll.minimum_system_requirements ? (
                  <div className="text-left" key={titledataAll.id}>
                    <h4>
                      <span style={{ fontSize: "larger" }}> Graphics : </span>
                      {titledataAll.minimum_system_requirements.graphics}
                    </h4>
                    <h4>
                      <span style={{ fontSize: "larger" }}> Memory : </span>
                      {titledataAll.minimum_system_requirements.memory}
                    </h4>
                    <h4>
                      <span style={{ fontSize: "larger" }}> Os : </span>
                      {titledataAll.minimum_system_requirements.os}
                    </h4>
                    <h4>
                      <span style={{ fontSize: "larger" }}> Processor : </span>
                      {titledataAll.minimum_system_requirements.processor}
                    </h4>
                    <h4>
                      <span style={{ fontSize: "larger" }}> Storage : </span>
                      {titledataAll.minimum_system_requirements.storage}
                    </h4>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            <div className="Loader">
              <BounceLoader color="#36d7b7" />{" "}
            </div>
          )}

          {/* {  console.log("my dataAll" ,dataAll.id)
} */}
        </div>
      </div>
    </div>
  );
};

export default Details;
