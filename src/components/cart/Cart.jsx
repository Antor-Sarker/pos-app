/* eslint-disable react/prop-types */
import Calculate from "./calculate/Calculate";
import Items from "./items/Items";
import Navbar from "./navbar/Navbar";

export default function Cart({ cartData, setCartData, handelCartItem }) {
  return (
    <div className="">
      <Navbar />
      {cartData.length === 0 && (
        <div className="w-full text-2xl pt-10 text-center text-[#5f6dc5]">
          Please add an item
        </div>
      )}

      <Items cartData={cartData} handelCartItem={handelCartItem} />
      <Calculate cartData={cartData} setCartData={setCartData} />
    </div>
  );
}
