import Image from "next/image"
export default function About (){
    return(
        <div>
        <div className="flex relative left-[800px] p-[150px] ">
           <Image src="/about.png" alt="pic" height={609} width={837}/>
        </div>
        <div className="">
            <p className="flex relative bottom-[800px] relative left-[400px] text-4xl font-bold ">Our Story</p>
            <p className="flex relative bottom-[750px] relative left-[400px] w-[525px] text-2xl h-[130px] ">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p className="flex relative bottom-[600px] relative left-[400px] w-[525px] h-[130px] text-2xl  ">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        </div>
    )
}