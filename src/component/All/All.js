import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataAllContext, dataContext } from "../../context/Store";
import HomeNav from "../NavFooter/HomeNav";

const All = () => {
  const { dataAll } = useContext(dataContext);
  console.log("all", dataAll.length % 20);
  console.log("dataAll", dataAll);

  const itemsPerPage = 24;
  const totalPages = Math.ceil(dataAll.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  // start index to get the start of the slice
  const endIndex = startIndex + itemsPerPage;
  // end index to get the start of the slice
  const currentData = dataAll.slice(startIndex, endIndex);

  console.log("currentPage", currentPage);
  console.log("startIndex", startIndex);
  console.log("total ", totalPages);
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
  console.log("currentData", currentData);
  console.log("currentPage", currentPage);
  console.log("totalPages", totalPages);
  console.log("endIndex", endIndex);
  console.log("prevPage", prevPage);
  console.log("nextPage", nextPage);
  return (
    <div>
      <HomeNav />
      {/* <Pagination className='text-center m-auto' count={20} color="secondary" /> */}
      <div className="MainAllDiv container-fluid  col-12 text-left mx-auto">
        {currentData.map((dataAll, index, idt) => {
          return (
            <>
              <Link
                to={`/Details/${dataAll.id}`}
                dataAll={dataAll}
                className="MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 "
                key={index.id}
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

                {/* {              localStorage.setItem('dataAllas', dataAll.id)
} */}
              </Link>
            </>
          );
        })}
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
