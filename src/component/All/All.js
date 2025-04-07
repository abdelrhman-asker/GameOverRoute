import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../../context/Store";
import HomeNav from "../NavFooter/HomeNav";
import { BarLoader } from "react-spinners";
import { TbListDetails } from "react-icons/tb";
import { GiCrossedAxes } from "react-icons/gi";
import { useQuery } from "@tanstack/react-query";
import { AllGames, GameSearch } from "./api";

const All = () => {
  document.title = window.location.hash.slice(2, window.location.hash.length);
  const { dataAll, loading, handleOnClick, moreDetails, setMoreDetails } =
    useContext(dataContext);
  // console.log("all", dataAll.length % 20);
  // console.log("dataAll", dataAll);
  const [ids, setIds] = useState();
  const itemsPerPage = 24;
  const totalPages = Math.ceil(dataAll.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  // start index to get the start of the slice
  const endIndex = startIndex + itemsPerPage;
  // end index to get the start of the slice
  const currentData = dataAll.slice(startIndex, endIndex);

  // console.log("currentPage", currentPage);
  // console.log("startIndex", startIndex);
  // console.log("total ", totalPages);
  const goToPage = (page) => {
    // this (page) means index+1 which i passed from the function call
    setCurrentPage(page);
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // console.log("currentData", currentData);
  // console.log("currentPage", currentPage);
  // console.log("totalPages", totalPages);
  // console.log("endIndex", endIndex);
  // console.log("prevPage", prevPage);
  // console.log("nextPage", nextPage);

  // const [moreDetails, setMoreDetails] = useState(false);
  // const handleOnClick = (index) => {
  //   setMoreDetails(index);
  // };
  // console.log("moreDetails", moreDetails, dataAll[moreDetails]);
  const [currentPagee, setCurrentPagee] = useState(1);
  const [GameId, setGameId] = useState();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", currentPagee, GameId],
    queryFn: () => AllGames(currentPagee, GameId),
    staleTime: 2000,
  });
  const [viewingData, setViewingData] = useState(data);
  const [searching, setSearching] = useState(
    localStorage.getItem("search") || ""
  );
  const [searchOn, setSearchOn] = useState(false);
  const filteredData =
    data &&
    data.filter((item) => item.title.toLowerCase() === searching.toLowerCase());

  useEffect(() => {
    if (searching.length > 0) {
      const filteredData =
        data &&
        data.filter((item) =>
          item.title.toLowerCase().includes(searching.toLowerCase())
        );
      setViewingData(filteredData);
      setSearchOn(true);
      localStorage.setItem("search", searching);
    } else {
      setSearchOn(false);
      setViewingData(data);
    }
  }, [data, searching]);

  // it views all the titles of the games
  console.log(viewingData && viewingData.map((item) => item.title));
  // console.log(viewingData);
  return (
    <div>
      <div
        style={{
          marginTop: "20vh",
          textAlign: "center",
          marginBottom: "-10vh",
        }}
      >
        <input
          className={searchOn ? "SearchInpuOn" : "SearchInpuOff"}
          value={searching}
          placeholder="Search..."
          onChange={(e) => setSearching(e.target.value)}
          style={{
            width: !searchOn ? "0px" : "30vw",
          }}
        />
        <span
          className="SearchSpan"
          onClick={() => (searchOn ? setSearchOn(false) : setSearchOn(true))}
        >
          🔎 {!searchOn && "Search.."}
        </span>
        {loading ? (
          <h2>Loading</h2>
        ) : searching.length > 0 && viewingData && viewingData.length ? (
          <>
            <h1 className="SearchResult d-flex flex-column text-start gap-4">
              <span>Short description:</span> {viewingData[0].short_description}
              <a
                target="_blank"
                rel="noreferrer"
                href={viewingData[0].game_url}
              >
                {viewingData[0].title}
              </a>
              <div
                onClick={() => {
                  setSearching("");
                  localStorage.setItem("search", "");
                }}
                className="Closing"
              >
                ✖️
              </div>
            </h1>
          </>
        ) : (
          ""
        )}
      </div>
      <HomeNav />
      {dataAll[moreDetails] && (
        <>
          <div className="MoreDetailsSection">
            <h2 onClick={() => setMoreDetails(false)}>
              <GiCrossedAxes />
            </h2>
            <h1>{dataAll[moreDetails].title}</h1>
            <img src={dataAll[moreDetails].thumbnail} alt="thumbnail" />
            <div className="DetailsData">
              <h4>
                <span> Categorie: </span> {dataAll[moreDetails].genre}
              </h4>
              <h4>
                <span>Developer: </span> {dataAll[moreDetails].developer}
              </h4>
              <h4>
                <span>Platform: </span> {dataAll[moreDetails].platform}
              </h4>
              <h4>
                <span>Publisher: </span> {dataAll[moreDetails].publisher}
              </h4>
            </div>
          </div>
          <div
            className="ClosingMoreDet"
            onClick={() => {
              setMoreDetails(false);
            }}
          ></div>
        </>
      )}
      {/* <Pagination className='text-center m-auto' count={20} color="secondary" /> */}
      <div className="MainAllDiv container-fluid  col-12 text-left mx-auto">
        {loading ? (
          <BarLoader
            className="Barloader BarLoader2"
            color="#36d7b7"
            height={10}
            loading
            width={200}
          />
        ) : (
          /*  */
          currentData.map((dataAll, index) => {
            return (
              <div key={index} className="MainMapDivEver">
                <Link
                  to={`/Details/${dataAll.id}`}
                  dataAll={dataAll}
                  className="MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10"
                  style={{ position: "relative" }}
                >
                  <div className="ImgMainDivForZoom col-xl-10  col-10">
                    <img
                      className="col-xl-12  col-12"
                      src={dataAll.thumbnail}
                      alt="Thumbnail"
                      loading="eager"
                    />
                  </div>

                  <div className="py-3  col-12 d-flex text-center justify-content-center align-items-center">
                    <div className="col">{dataAll.title}</div>
                    <div className="col">
                      <span>FREE</span>
                      {/* { console.log("my idt" ,idt)} */}
                    </div>
                  </div>
                </Link>
                <h5
                  className="ShowQ"
                  onClick={() => {
                    handleOnClick(index);
                    setSearching("");
                    localStorage.setItem("search", "");
                  }}
                >
                  <TbListDetails />
                </h5>
              </div>
            );
          })
        )}
        <br />

        {/* Pagination controls */}
        <div style={{ textAlign: "center", width: 90 + "%" }}>
          <button className="PrevBut" onClick={prevPage}>
            {"<"} Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) =>
            (index - currentPage < 2 && currentPage - index < 4) ||
            index === 0 ||
            index + 1 === totalPages ? (
              <button
                className={currentPage === index + 1 ? "active" : ""}
                key={index}
                onClick={() => goToPage(index + 1)}
                style={{ margin: "2px" }}
              >
                {index + 1}
              </button>
            ) : (
              index - currentPage < 4 && (
                <span className="dot" style={{ margin: "2px" }}>
                  .
                </span>
              )
            )
          )}
          <button className="NextBut" onClick={nextPage}>
            Next {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default All;
