import Image from "next/image"
export default function Category (){
    return(<div className="flex flex-col relative bottom-[1700px] relative left-[500px] w-[1308px] h-[493px] gap-[40px] ml-[135] mt-[666px] ">
        <div className="flex w-[1170px] h-[103px]">
            <div className="w-[20px] h-[40px] bg-red-500">
        
         <div>
                        <p className="flex text-red-500 style-semibold ml-[20px]">
                        Categories
                        </p>
                        <p className="w-[401px] h-[48px] flex flex-col style-bold text-[36px] mt-10 -mx-50    ">
                        Browse By Category
                        </p>
                    </div>
                    </div>
                    </div>
                    <div>
                        
                    </div>
                    <div className="w-[1308px] h-[350px] ">

                        <div className="flex flex-row gap-[20px]">
                            <div >
                                <Image src="/a.png" alt="image" height={270} width={250} />

                            </div>
                            <div >
                                <Image src="/b.png" alt="image" height={270} width={250} />

                            </div>
                            <div >
                                <Image src="/c.png" alt="image" height={270} width={250} />

                            </div>
                            <div >
                                <Image src="/d1.png" alt="image" height={270} width={250} />


                            </div>
                            <div >
                                <Image src="/e.png" alt="image" height={270} width={250} />


                            </div>
                            <div className="w-[270px] h-[350px]">
                            </div>





 






                            
                        </div>
                    </div>
                
                    </div>
        
    )
}
