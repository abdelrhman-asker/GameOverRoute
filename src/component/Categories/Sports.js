import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { datasportsContext, dataContext } from "../../context/Store";
import HomeNav from "../NavFooter/HomeNav";

const Sports = () => {
  const { datasports } = useContext(dataContext);

  // console.log("all", datasports)
  const itemsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = datasports.slice(startIndex, endIndex);

  const totalPages = Math.ceil(datasports.length / itemsPerPage);

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
  return (
    <div>
      <HomeNav />
      {datasports.length > 0 ? (
        <div className="MainAllDiv container-fluid  col-12 text-left mx-auto">
          {currentData.map((datasports, index, idt) => {
            return (
              <Link
                to={`/Details/${datasports.id}`}
                datasports={datasports}
                className="MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 "
                key={index.id}
                style={{ position: "relative" }}
              >
                <div className="ImgMainDivForZoom col-xl-10  col-10">
                  <img
                    className="col-xl-12  col-12"
                    src={datasports.thumbnail}
                  />
                </div>
                <div className="py-3 col-12 d-flex text-center justify-content-center align-items-center">
                  <div className="col">{datasports.title}</div>
                  <div className="col">
                    <span>FREE</span>
                  </div>
                </div>

                {/* {              localStorage.setItem('datasportsas', datasports.id)
} */}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="Loader">
          <BounceLoader color="#36d7b7" />{" "}
        </div>
      )}
      <div style={{ textAlign: "center" }}>
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
  );
};

export default Sports;
