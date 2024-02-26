import {
  Bars3Icon,
  InboxStackIcon,
  PencilSquareIcon,
  PlusCircleIcon as PlusIconOutline,
  TruckIcon,
} from "@heroicons/react/24/outline";

import { PlusCircleIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <>
      <div className="flex pt-2">
        <div className="">
          <Bars3Icon className="mt-2 ml-3 sm:ml-1 md:ml-1 lg:ml-3 h-8 w-8 text-[#696969]" />
        </div>
        <div className="w-full ml-5 sm:ml-1 md:ml-2 flex md:justify-around lg:justify-around xl:justify-around pt-2 text-sm sm:sm md:base lg:xl">
          <div className="flex justify-evenly text-[#5f6dc5] bg-[#e7e9f6] rounded px-2">
            <PencilSquareIcon className="h-6 w-6 text-[#5f6dc5] my-1" />
            <p className="my-2">Note</p>
          </div>

          <div className="flex text-[#5f6dc5] bg-[#e7e9f6] rounded px-2">
            <TruckIcon className="h-6 w-6 text-[#5f6dc5] my-1" />
            <p className="my-2"> Shipping</p>
          </div>

          <div className="flex text-[#5f6dc5] bg-[#e7e9f6] rounded px-2">
            <InboxStackIcon className="h-6 w-6 my-1 text-[#5f6dc5]" />
            <p className="my-2">Hold Orders</p>
          </div>
          <div className="flex text-[#5f6dc5] bg-[#e7e9f6] rounded px-2">
            <PlusCircleIcon className="h-6 w-6 my-1 text-[#5f6dc5]" />
            <p className="my-2">New Ite</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between bg-[#e7e9f6] m-2 rounded px-3">
        <div className="flex text-[#5f6dc5] p-2 rounded">
          <UserCircleIcon className="h-6 w-6 text-[#5f6dc5]" />
          Steve Jobs
        </div>
        <div className="flex text-[#5f6dc5] bg-[#e7e9f6] p-2 rounded">
          <PlusIconOutline className="h-6 w-6 text-[#5f6dc5]" />
        </div>
      </div>
    </>
  );
}
