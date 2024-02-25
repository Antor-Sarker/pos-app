/* eslint-disable react/prop-types */
import Calculate from "./calculate/Calculate";
import Items from "./items/Items";
import Navbar from "./navbar/Navbar";

export default function Cart({cartData,handelCartItem}) {
  return (
    <div className="">
      <Navbar />
      <Items cartData={cartData} handelCartItem={handelCartItem}/>
       
      <Calculate />
    </div>
  );
}
