import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { datapcContext, dataContext } from "../../context/Store";
import HomeNav from "../NavFooter/HomeNav";

const Pcplatform = () => {
  const { datapc } = useContext(dataContext);

  console.log("Pc", datapc);
  const itemsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = datapc.slice(startIndex, endIndex);

  const totalPages = Math.ceil(datapc.length / itemsPerPage);

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
      {datapc.length > 0 ? (
        <div className="MainAllDiv container-fluid  col-12 text-left mx-auto">
          {currentData.map((datapc, index, idt) => {
            return (
              <Link
                to={`/Details/${datapc.id}`}
                datapc={datapc}
                className="MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 "
                key={datapc.id}
                style={{ position: "relative" }}
              >
                <div className="ImgMainDivForZoom col-xl-10  col-10">
                  <img className="col-xl-12  col-12" src={datapc.thumbnail} />
                </div>
                <div className="py-3 col-12 d-flex text-center justify-content-center align-items-center">
                  <div className="col">{datapc.title}</div>
                  <div className="col">
                    <span>FREE</span>
                    {/* { console.log("my idt" ,idt)} */}
                  </div>
                </div>

                {localStorage.setItem("datapcas", datapc.id)}
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
  );
};

export default Pcplatform;
