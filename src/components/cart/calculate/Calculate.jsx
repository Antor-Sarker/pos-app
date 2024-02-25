/* eslint-disable react/prop-types */
import {
  GiftIcon,
  HandRaisedIcon,
  WalletIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import cartCalculate from "../../../utils/cartCalculate";

export default function Calculate({ cartData, setCartData }) {
  const [calculateCart, setCalculateCart] = useState(null);
  const [isDiscount, setIsDiscount]= useState(false)
  
  
  useEffect(()=>{
      const calculate = cartCalculate(cartData, isDiscount)  
      setCalculateCart(calculate)
    },[cartData,isDiscount])


    function handelCancel(){
      setCartData([])
      setIsDiscount(false)
    }


  return (
    <>
      <div className="relative mt-10">
        <div className="w-2/5 absolute right-3 flex flex-col">
          <div className="flex justify-between border-b-2 border-[#e6e9ec]">
            <div className="text-[#8996a0]">Sub Total</div>
            <div className="text-[#333333]">${calculateCart?.subTotal}</div>
          </div>
          <div className="flex justify-between border-b-2 border-[#e6e9ec]">
            <div className="text-[#8996a0]">TAX</div>{" "}
            <div className="text-[#333333]">${calculateCart?.tax}</div>
          </div>
          <div className="flex justify-between border-b-2 border-[#e6e9ec]">
            <div className="text-[#8996a0]">Shipping</div>{" "}
            <div className="text-[#333333]">${calculateCart?.shipping}</div>
          </div>
          <div className="flex justify-between border-b-2 border-[#e6e9ec]">
            <div className="text-[#3674d9]">Discount on Cart</div>{" "}
            <div className="text-[#333333]">${calculateCart?.discount}</div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 relative top-40 p-5 mx-2 text-[#3674d9] bg-[#e1eaf9] rounded">
        <div>Products Count ({calculateCart?.countProducts})</div>

        <div className="flex justify-around text-xl">
          <div>Total</div>
          <div>${calculateCart?.total}</div>
        </div>
      </div>

      <div className="w-full flex  justify-evenly relative top-40 p-5 mx-2 text-[#6370c7]">
        <div
          className="bg-[#fadedd] text-[#e66460] flex p-3 rounded"
          onClick={handelCancel}
        >
          {" "}
          <XCircleIcon className="w-6 h-6" /> Cancel
        </div>
        <div className="bg-[#dee1f3] p-3 rounded flex">
          <HandRaisedIcon className="w-6 h-6 mx-2" /> Hold
        </div>
        <div
          className="bg-[#dee1f3] p-3 rounded flex"
          
        >
          <button onClick={() => setIsDiscount(true)} disabled={isDiscount}>

          <GiftIcon className="w-6 h-6 mx-2" /> Discount
          </button>
        </div>
        <div className="bg-[#d7e3f7] p-3 rounded flex">
          <WalletIcon className="w-6 h-6 mx-2 flex" /> Pay Now
        </div>
      </div>
    </>
  );
}
