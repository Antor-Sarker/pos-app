import { PencilSquareIcon } from "@heroicons/react/24/outline";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export default function Items() {
  return (
    <div className="w-full pt-1 flex text-[#778591] justify-center">
      <PencilSquareIcon className="h-6 w-6 mx-3 my-2" />

      <div className="w-10/12 flex justify-between border border-spacing-1 rounded border-[#e5e7ea]">
        <div className="mx-1 my-2">pure white</div>
        <div className="mx-1 my-2">$90.10</div>
        <div className="flex my-2">
          <MinusCircleIcon className="h-6 w-6 mx-2 text-[#84919c]" />
          1
          <PlusCircleIcon className="h-6 w-6 mx-2 text-[#84919c]" />
        </div>
        <div className="mx-1 my-2">$90.10</div>
      </div>

      <TrashIcon className="h-6 w-6 mx-3 my-2 text-[#e55c57]" />
    </div>
  );
}
