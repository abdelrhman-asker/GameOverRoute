import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataAllContext, dataContext } from "../../context/Store";
import HomeNav from "../NavFooter/HomeNav";
import { Pagination } from "react-bootstrap";

const All = () => {
  const { dataAll } = useContext(dataContext);

  console.log("all", dataAll.length % 20);
  console.log("dataAll", dataAll);

  const itemsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = dataAll.slice(startIndex, endIndex);

  const totalPages = Math.ceil(dataAll.length / itemsPerPage);

  const goToPage = (page) => {
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
  console.log("totalPages", totalPages);
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
                  />
                </div>
                <div className="py-3 col-12 d-flex text-center justify-content-center align-items-center">
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

        {/* Pagination controls */}
        <div style={{ textAlign: "center" }}>
          <button className="PrevBut" onClick={prevPage}>
            {"<"} Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              className={currentPage === index + 1 ? "active" : ""}
              key={index}
              onClick={() => goToPage(index + 1)}
              style={{ margin: "2px" }}
            >
              {index + 1}
            </button>
          ))}
          <button className="NextBut" onClick={nextPage}>
            Next {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default All;
