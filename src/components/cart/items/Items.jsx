/* eslint-disable react/prop-types */
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

function Item({ data, handelCartItem }) {
  const { id, name, price, count } = data;
  return (
    <div className="flex">
      <PencilSquareIcon className="h-6 w-6 mx-3 my-2" />
      <div className="w-10/12 flex justify-between border border-spacing-1 rounded border-[#e5e7ea]">
        <div className="mx-1 my-2">{name}</div>
        <div className="mx-1 my-2">${price}</div>
        <div className="flex my-2">
          <button
            onClick={() => handelCartItem({ type: "minus", id })}
            disabled={count === 1 ? true : false}
          >
            <MinusCircleIcon className="h-6 w-6 mx-2 text-[#84919c]" />
          </button>
          {count}
          <button onClick={() => handelCartItem({ type: "plus", id })}>
            <PlusCircleIcon className="h-6 w-6 mx-2 text-[#84919c]" />
          </button>
        </div>
        <div className="mx-1 my-2">${price * count}</div>
      </div>
      <button onClick={() => handelCartItem({ type: "delete", id })}>
        <TrashIcon className="h-6 w-6 mx-3 my-2 text-[#e55c57]" />
      </button>
    </div>
  );
}

export default function Items({ cartData, handelCartItem }) {
  return (
    <div className="w-full pt-1 flex text-[#778591] justify-center">
      <div>
        {cartData.map((itemInfo) => (
          <Item
            key={itemInfo.id}
            data={itemInfo}
            handelCartItem={handelCartItem}
          />
        ))}
      </div>
    </div>
  );
}
