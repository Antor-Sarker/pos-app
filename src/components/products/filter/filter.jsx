/* eslint-disable react/prop-types */
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Filter({ handelSearch, handelCategory }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  function handelSelectCategory(name) {
    handelCategory(name);
    setSelectedCategory(name);
  }
  return (
    <>
      <div className="h-10 m-3 flex w-full">
        <div className="flex justify-between">
          <MagnifyingGlassIcon className="w-6 h-6 mt-2 mx-2" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Products..."
            className="focus:pl-3 border-2 rounded placeholder:px-3"
            onChange={(e) => handelSearch(e.target.value)}
          />
        </div>
        <div className="absolute right-10">
          <QrCodeIcon className="w-6 h-6" />
        </div>
        <hr />
      </div>

      <div className="m-3 flex justify-between text-[#72777c]">
        <div
          className={`${
            selectedCategory === "all" && "border-blue-500 text-blue-500"
          } p-1 text-sm font-medium border rounded border-[#b2bac1] hover:border-blue-500 hover:text-blue-500`}
          onClick={() => handelSelectCategory("all")}
        >
          All Categories
        </div>
        <div
          className={`${
            selectedCategory === "electronics" &&
            "border-blue-500 text-blue-500"
          } p-1 text-sm font-medium border rounded border-[#b2bac1] hover:border-blue-500 hover:text-blue-500`}
          onClick={() => handelSelectCategory("electronics")}
        >
          Electronics
        </div>
        <div
          className={`${
            selectedCategory === "home&lifestyle" &&
            "border-blue-500 text-blue-500"
          } p-1 text-sm font-medium border rounded border-[#b2bac1] hover:border-blue-500 hover:text-blue-500`}
          onClick={() => handelSelectCategory("home&lifestyle")}
        >
          Home & Lifestyle
        </div>
        <div
          className={`${
            selectedCategory === "men fashion" &&
            "border-blue-500 text-blue-500"
          } p-1 text-sm font-medium border rounded border-[#b2bac1] hover:border-blue-500 hover:text-blue-500`}
          onClick={() => handelSelectCategory("men fashion")}
        >
          Man Fashion
        </div>
        <div
          className={`${
            selectedCategory === "women fashion" &&
            "border-blue-500 text-blue-500"
          } p-1 text-sm font-medium border rounded border-[#b2bac1] hover:border-blue-500 hover:text-blue-500`}
          onClick={() => handelSelectCategory("women fashion")}
        >
          Women Fashions
        </div>
        <EllipsisVerticalIcon className="w-6 h-6 text-[#5d6164]" />
      </div>
    </>
  );
}
