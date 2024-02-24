import {
  Bars3Icon,
  InboxStackIcon,
  PencilSquareIcon,
  TruckIcon,
  
   PlusCircleIcon as PlusIconOutline,
} from "@heroicons/react/24/outline";

import { PlusCircleIcon,UserCircleIcon, } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <>
      <div className="flex pt-3 justify-around">
        <Bars3Icon className="h-8 w-8 text-[#696969]" />
        <div className="flex text-[#5f6dc5] bg-[#e7e9f6] p-2 rounded">
          <PencilSquareIcon className="h-6 w-6 text-[#5f6dc5]" />
          Note
        </div>

        <div className="flex text-[#5f6dc5] bg-[#e7e9f6] p-2 rounded">
          <TruckIcon className="h-6 w-6 text-[#5f6dc5]" />
          Shipping
        </div>

        <div className="flex text-[#5f6dc5] bg-[#e7e9f6] p-2 rounded">
          <InboxStackIcon className="h-6 w-6 text-[#5f6dc5]" />
          Hold Orders
        </div>
        <div className="flex text-[#5f6dc5] bg-[#e7e9f6] p-2 rounded">
          <PlusCircleIcon className="h-6 w-6 text-[#5f6dc5]" />
          New Item
        </div>
      </div>

      <div className="flex justify-between bg-[#e7e9f6] m-2 rounded">
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
