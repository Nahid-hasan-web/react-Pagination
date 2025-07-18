import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Pagination from "./Pagination";

const App = () => {
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

  return (
    <>
      <div className="flex gap-3 flex-wrap justify-center">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="w-[250px] bg-black p-3 rounded-lg text-white"
          >
            <div className="w-full h-[300px] overflow-hidden mb-2">
              <img
                src={item.category.image}
                alt="product"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg font-normal text-gray-300">{item.title}</h2>
          </div>
        ))}
      </div>

      <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
    </>
  );
};

export default App;
