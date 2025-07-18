import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ totalPages, currentPage, setPage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setPage(currentPage + 1);
  };

  return (
    <div style={{ marginTop: 20, textAlign: "center" }}>
      {/* Prev */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        style={{
          margin: "0 5px",
          padding: "6px 10px",
          border: "1px solid #ccc",
          background: "#eee",
          cursor: "pointer",
          opacity: currentPage === 1 ? 0.5 : 1,
        }}
      >
        <FaArrowLeft />
      </button>

      {/* Page numbers */}
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          style={{
            margin: "0 3px",
            padding: "6px 12px",
            background: currentPage === num ? "#FFA62F" : "#fff",
            color: currentPage === num ? "#fff" : "#000",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          {num}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        style={{
          margin: "0 5px",
          padding: "6px 10px",
          border: "1px solid #ccc",
          background: "#eee",
          cursor: "pointer",
          opacity: currentPage === totalPages ? 0.5 : 1,
        }}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
