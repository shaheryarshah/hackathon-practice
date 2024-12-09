import Image from "next/image"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
export default function Topheader() {
    return (
<div className="">
    <div className="relative left-[350px]  w-[1440px] h-[48px] bg-[#000000] flex">
    <div className="flex  md:w-[859px] h-[24px] text-[14px] mt-[12px] text-[#ffffff] relative left-[445px]">
            <div className="flex h-[24px] w-[550px] ">
            <p className="w-[474px] h-[18px] leading-[24px] ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <p className="text-[#ffffff] font-semibold">ShopNow</p>
            </div>
            <div className="flex relative left-[200px] text-white">
            <p>English</p>
            <Image src="/DropDown.png" alt="dropdown logo" height={24} width={24}/>
            </div>
            </div>
            </div>
            
</div>
        

    )
}