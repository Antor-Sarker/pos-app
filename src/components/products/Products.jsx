/* eslint-disable react/prop-types */
import { useState } from "react";
import Filter from "./filter/filter";

//Display Product
function Product({ data, handelAddToCart }) {
  const { id, imageUrl, name, price } = data;
  return (
    <>
      <div
        className="border-2 rounded text-center text-sm text-[#7e8b97] font-medium"
        onClick={() => handelAddToCart({ id, name, price })}
      >
        <div className="">
          <img
            src={imageUrl}
            alt="cover photo"
            className="max-w-full rounded"
          />
        </div>

        <div className="text-center pt-3">
          <p>${price}</p>
          <hr />
          <p className="">{name}</p>
        </div>
      </div>
    </>
  );
}

//Products List
export default function Products({ productsData, handelAddToCart }) {
  const [isFilter, setIsFilter] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const data = isFilter ? filterData : productsData;

  //Search Filter
  function handelSearch(key) {
    setIsFilter(true);
    const foundData = productsData.filter((item) =>
      item.name.toLocaleLowerCase().includes(key.toLocaleLowerCase())
    );
    setFilterData(foundData);
  }

  // Category Filter
  function handelCategory(category) {
    if (category === "all") {
      setIsFilter(false);
      return;
    }
    setIsFilter(true);
    const foundData = productsData.filter((item) => item.category === category);
    setFilterData(foundData);
  }

  return (
    <div className="mt-40 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-1">
      <Filter
        setIsFilter={setIsFilter}
        handelSearch={handelSearch}
        handelCategory={handelCategory}
      />

      <div className="w-full grid grid-cols-1 gap-3 grid-flow-row sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lx:grid-cols-5 2xl:grid-cols-5 bg-[#f4f6f8] h-4/6 overflow-scroll scroll-smooth">
        {data.map((data) => (
          <Product
            key={data.id}
            data={data}
            handelAddToCart={handelAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
