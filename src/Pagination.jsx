const Pagination = ({ totalPages, currentPage, setPage }) => {
  return (
    <div style={{ marginTop: 20, textAlign: "center" }}>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            background: currentPage === i + 1 ? "#FFA62F" : "#eee",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
