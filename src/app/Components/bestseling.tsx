import Image from "next/image"
export default function Bestselling() {
    return (

        <div>
            
            <div className="flex relative bottom-[1700px] relative left-[160px] ">
            <div className="flex relative bottom-[120px] relative left-[350px]">
            <div className="w-[20px] h-[40px] bg-red-500 ">
            </div>

                <p className="flex text-red-500 style-semibold  ">
                    This Month
                </p>
                <p className="w-[401px] h-[48px] flex flex-col style-bold text-[36px] mt-10 -mx-20    ">
                    Best Selling Products
                </p>
            </div>
            <div className="w-[1308px] h-[350px] ">

                <div className="flex flex-row gap-[20px]">
                    <div >
                        <Image src="/cart1.png" alt="image" height={270} width={250} />

                    </div>
                    <div >
                        <Image src="/cart2.png" alt="image" height={270} width={250} />

                    </div>
                    <div >
                        <Image src="/cart3.png" alt="image" height={270} width={250} />

                    </div>
                    <div >
                        <Image src="/cart4.png" alt="image" height={270} width={250} />


                    </div>
                    <div className="w-[270px] h-[350px]">
                    </div>
                </div>
                </div>

            </div>
            <div className="relative left-[525px] relative bottom-[1800px]">
                <p>
                    The North Coat
                </p>
                <p>
                    $260
                </p>
                <div className="flex flex-row">
                    <Image src="/star.png" alt="image" height={20} width={20} />
                    <Image src="/star.png" alt="image" height={20} width={20} />
                    <Image src="/star.png" alt="image" height={20} width={20} />
                    <Image src="/star.png" alt="image" height={20} width={20} />
                    <Image src="/star.png" alt="image" height={20} width={20} />
                </div>
                <div>
                    <div className="relative left-[265px] relative bottom-[65px]">
                        <p>
                            Gucci duffle bag
                        </p>
                        <p>
                            $960
                        </p>
                        <div className="flex flex-row">
                            <Image src="/star.png" alt="image" height={20} width={20} />
                            <Image src="/star.png" alt="image" height={20} width={20} />
                            <Image src="/star.png" alt="image" height={20} width={20} />
                            <Image src="/star.png" alt="image" height={20} width={20} />
                            <Image src="/star.png" alt="image" height={20} width={20} />
                        </div>
                        <div className="relative left-[265px] relative bottom-[65px]">
                            <p>
                                RGB liquid CPU Cooler
                            </p>
                            <p>
                                $160
                            </p>
                            <div className="flex flex-row">
                                <Image src="/star.png" alt="image" height={20} width={20} />
                                <Image src="/star.png" alt="image" height={20} width={20} />
                                <Image src="/star.png" alt="image" height={20} width={20} />
                                <Image src="/star.png" alt="image" height={20} width={20} />
                                <Image src="/star.png" alt="image" height={20} width={20} />
                            </div>
                            <div className="relative left-[265px] relative bottom-[65px]">
                                <p>
                                    Small BookSelf
                                </p>
                                <p>
                                    $360
                                </p>
                                <div className="flex flex-row">
                                    <Image src="/star.png" alt="image" height={20} width={20} />
                                    <Image src="/star.png" alt="image" height={20} width={20} />
                                    <Image src="/star.png" alt="image" height={20} width={20} />
                                    <Image src="/star.png" alt="image" height={20} width={20} />
                                    <Image src="/star.png" alt="image" height={20} width={20} />
                                </div>
                            </div>
                            
                       
                    </div></div></div></div>
                    
                    
                    <div className="relative left-[500px] relative bottom-[1900px]">
                        <Image src="/untitled.png" alt="picture" height={1170} width={1050}/>
                    </div>
                    
                    
                    
                    
                    </div>
                    )
}