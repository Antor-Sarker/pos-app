/* eslint-disable react/prop-types */
import { EllipsisVerticalIcon, MagnifyingGlassIcon, QrCodeIcon } from "@heroicons/react/24/outline";

export default function Filter({handelSearch,handelCategory}){
    return(
        <>

        <div className="m-3 flex justify-between bg-[#f9fafb]">
            <div className="flex justify-between">
                <MagnifyingGlassIcon className="w-6 h-6"/>
                <input type="search" name="search" id="search" placeholder="Search Products..." onChange={(e)=>handelSearch(e.target.value)}/>
            </div>
            <QrCodeIcon className="w-6 h-6"/>
        </div>

        <div className="m-3 flex justify-between text-[#b9c0c6]">
            <div className="border-2 rounded border-[#b2bac1]" onClick={()=>handelCategory('all')}>All Categories</div>
            <div className="border-2 rounded border-[#b2bac1]" onClick={()=>handelCategory('electronics')}>Electronics</div>
            <div className="border-2 rounded border-[#b2bac1]" onClick={()=>handelCategory('home&lifestyle')}>Home & Lifestyle</div>
            <div className="border-2 rounded border-[#b2bac1]" onClick={()=>handelCategory('men fashion')}>Man Fashion</div>
            <div className="border-2 rounded border-[#b2bac1]" onClick={()=>handelCategory('women fashion')}>Women Fashions</div>
            <EllipsisVerticalIcon className="w-6 h-6 text-[#5d6164]"/>
        </div>

        </>
    )
}