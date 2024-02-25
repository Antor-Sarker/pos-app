/* eslint-disable react/prop-types */
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
  return (
    <div className="">
      <Filter />
      <div className="h-4/6 grid grid-cols-5 gap-4 bg-[#f4f6f8] mx-3 overflow-scroll">
        {productsData.map((data) => (
          <Product key={data.id} data={data} handelAddToCart={handelAddToCart}/>
        ))}
      </div>
    </div>
  );
}
