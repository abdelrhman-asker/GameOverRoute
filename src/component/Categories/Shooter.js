import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { dataContext } from "../../context/Store";
import HomeNav from "../NavFooter/HomeNav";

const Shooter = () => {
  document.title = window.location.hash.slice(2, window.location.hash.length);
  const { datashooter } = useContext(dataContext);

  // // console.log("all", datashooter)
  const itemsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = datashooter.slice(startIndex, endIndex);

  const totalPages = Math.ceil(datashooter.length / itemsPerPage);

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
      {datashooter.length > 0 ? (
        <div className="MainAllDiv container-fluid  col-12 text-left mx-auto">
          {currentData.map((datashooter, index, idt) => {
            return (
              <Link
                to={`/Details/${datashooter.id}`}
                datashooter={datashooter}
                className="MainDivMapImgAndTitle MainDivMapImgAndTitleAll mx-auto col-10 "
                key={index.id}
                style={{ position: "relative" }}
              >
                <div className="ImgMainDivForZoom col-xl-10  col-10">
                  <img
                    className="col-xl-12  col-12"
                    src={datashooter.thumbnail}
                  />
                </div>
                <div className="py-3 col-12 d-flex text-center justify-content-center align-items-center">
                  <div className="col">{datashooter.title}</div>
                  <div className="col">
                    <span>FREE</span>
                  </div>
                </div>

                {/* {              localStorage.setItem('datashooteras', datashooter.id)
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

export default Shooter;
