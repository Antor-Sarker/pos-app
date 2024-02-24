import { EllipsisVerticalIcon, MagnifyingGlassIcon, QrCodeIcon } from "@heroicons/react/24/outline";

export default function Filter(){
    return(
        <>

        <div className="m-3 flex justify-between bg-[#f9fafb]">
            <div className="flex justify-between">
                <MagnifyingGlassIcon className="w-6 h-6"/>
                <input type="search" name="search" id="search" placeholder="Search Products..."/>
            </div>
            <QrCodeIcon className="w-6 h-6"/>
        </div>

        <div className="m-3 flex justify-between text-[#b9c0c6]">
            <div className="border-2 rounded border-[#b2bac1]">All Categories</div>
            <div className="border-2 rounded border-[#b2bac1]">Electronics</div>
            <div className="border-2 rounded border-[#b2bac1]">Home & Lifestyle</div>
            <div className="border-2 rounded border-[#b2bac1]">Man Fashion</div>
            <div className="border-2 rounded border-[#b2bac1]">Women Fashions</div>
            <EllipsisVerticalIcon className="w-6 h-6 text-[#5d6164]"/>
        </div>

        </>
    )
}