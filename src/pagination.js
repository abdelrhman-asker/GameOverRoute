import React, { useContext, useState } from "react";
import { dataContext } from "./context/Store";
import { Pagination } from "react-bootstrap";

function PaginatedList({ itemsPerPage }) {
  const { dataAll } = useContext(dataContext);
  const { currentPage } = useContext(dataContext);
  const { currentData } = useContext(dataContext);
  const { setCurrentPage } = useContext(dataContext);
  const { totalPages } = useContext(dataContext);

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
      {/* Display currentData here */}
      <ul>
        {currentData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div>
        <button onClick={prevPage}>Previous</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default PaginatedList;
