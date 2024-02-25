/* eslint-disable react/prop-types */
import { useState } from "react";
import Filter from "./filter/filter";

function Product({ data,handelAddToCart }) {
  const { id, imageUrl, name, price } = data;
  return (
    <>
      <div className="border-2 rounded text-center text-sm text-[#7e8b97] font-medium" onClick={()=>handelAddToCart({id,name,price})}>
        <img src={imageUrl} alt="cover photo" className="max-w-full p-2" />
        <p>${price}</p>
        <hr />
        <p className="pb-1">{name}</p>
      </div>
    </>
  );
}

export default function Products({ productsData, handelAddToCart }) {
  const [isFilter, setIsFilter] = useState(false)
  const [filterData, setFilterData] = useState([])

  const data = isFilter? filterData : productsData

  console.log(data)

  function handelSearch(key){
    setIsFilter(true)
    const foundData = productsData.filter(item=> item.name.toLocaleLowerCase().includes(key.toLocaleLowerCase()))
    setFilterData(foundData)
  }

  function handelCategory(category){
  if(category==='all'){
    setIsFilter(false)
    return
  }
    setIsFilter(true)
    const foundData = productsData.filter(item=> item.category===category)
    setFilterData(foundData)
  }

  
  return (
    <div className="">
      <Filter setIsFilter={setIsFilter} handelSearch={handelSearch} handelCategory={handelCategory}/>
      <div className="h-4/6 grid grid-cols-5 gap-4 bg-[#f4f6f8] mx-3 overflow-scroll">
        {data.map((data) => (
          <Product key={data.id} data={data} handelAddToCart={handelAddToCart}/>
        ))}
      </div>
    </div>
  );
}
