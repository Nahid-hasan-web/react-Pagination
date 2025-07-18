# 🔢 React Simple Pagination Component

A lightweight and easy-to-use pagination component for React with **Previous** and **Next** arrows using `react-icons`.

---

## ✅ How to use?

### **Step 1:**
Add this code inside your **All Products component** (you can change the API as needed).  
Your paginated items will be available in **`currentItems`**:

```jsx
const [products, setProducts] = useState([]);
const [page, setPage] = useState(1);
const itemsPerPage = 4;

useEffect(() => {
  axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

const start = (page - 1) * itemsPerPage;
const currentItems = products.slice(start, start + itemsPerPage);
const totalPages = Math.ceil(products.length / itemsPerPage);

### **Step 2:**

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
      {/* Previous Button */}
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

      {/* Page Numbers */}
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

      {/* Next Button */}
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

### **Step 3:**
<Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />

