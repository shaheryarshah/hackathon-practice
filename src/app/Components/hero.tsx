import Image from "next/image"
import { Import } from "lucide-react"
import Link from "next/link"
import { fromJSON } from "postcss"
const Hero = () => {
    return (
        <div >
            <div className="bg-black relative left-[200px] flex w-[892px] mt-[182px] ml-[513px] h-[344px]">
                <ul className="h-[352px] w-[496px] relative left-[400px]">
                    <li className="flex flex-col "><Image src="/hero.png" alt="heroImage" height={352} width={496} /></li>
                    <li className=" relative right-[300px] relative bottom-[250px]"><Image src="/apple.png" alt="applelogo" height={49} width={40} /></li>
                </ul>
                <div >
                    <p className="flex h-[20px] w-[126px] text-white relative right-[330px] relative top-[100px] ">iPhone 14 Series</p>
                    <p className="flex h-[20px] w-[306px] text-white relative right-[390px] relative top-[110px] font-bold text-[48px]">Up to 10% </p>
                    <p className="flex h-[20px] w-[306px] text-white relative right-[390px] relative top-[150px] font-bold text-[48px]">off Voucher</p>
                    <p className="flex h-[20px] w-[126px] text-white relative right-[390px] relative top-[210px] underline">Shop Now</p>
                    <div className="flex relative right-[300px] relative top-[190px]">
                        <Image src="/arrow.png" alt="arrow" height={24} width={24} />
                    </div>

                </div>
            </div>
            <div className="flex w-[217px] h-[344px] relative left-[500px] relative bottom-[345px] gap-[16px] ">
                <ul className="flex flex-col gap-[15px] ">
                    <li className="text-black">
                        <Link href="">Woman’s Fashion</Link>
                    </li>
                    <li className="text-black">
                        <Link href="">Men’s Fashion</Link>
                    </li>
                    <li className="text-black">
                        <Link href="">Electronics</Link>
                    </li>
                    <li className="text-black">
                        <Link href="">Home & Lifestyle</Link>
                    </li>
                    <li className="text-black">
                        <Link href="">Medicine</Link>
                    </li>
                    <li className="text-black">
                        <Link href="">Baby’s & Toys</Link>
                    </li>
                    <li className="text-black">
                        <Link href="">Woman’s Fashion</Link>
                    </li>
                    <li className="text-black">
                        <Link href="">Groceries & Pets</Link>
                    </li>
                    <li className="text-black">
                        <Link href="">Health & Beauty</Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className="flex flex-col relative bottom-[950px] relative left-[500px] w-[1308px] h-[493px] gap-[40px] ml-[135] mt-[666px] ">
                    <div className="flex w-[1170px] h-[103px]">
                        <div className="w-[20px] h-[40px] bg-red-500">

                        </div>
                        <p className="flex text-red-500 style-semibold ml-[20px]">
                            Today’s
                        </p>
                        <p className="w-[401px] h-[48px] flex flex-col style-bold text-[36px] mt-10 -mx-20    ">
                            Flash Sales
                        </p>
                    </div>
                    <div className="w-[1308px] h-[350px] ">

                        <div className="flex flex-row gap-[20px]">
                            <div >
                                <Image src="/1.png" alt="image" height={270} width={250} />

                            </div>
                            <div >
                                <Image src="/2.png" alt="image" height={270} width={250} />

                            </div>
                            <div >
                                <Image src="/3.png" alt="image" height={270} width={250} />

                            </div>
                            <div >
                                <Image src="/4.png" alt="image" height={270} width={250} />


                            </div>
                            <div className="w-[270px] h-[350px]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative left-[500px] relative bottom-[1050px]">
                <p>
                    HAVIT HV-G92 Gamepad
                </p>
                <p>
                    $120
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
                        AK-900 Wired Keyboard
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
                            IPS LCD Gaming Monitor
                            </p>
                            <p>
                                $370
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
                                S-Series Comfort Chair 
                                </p>
                                <p>
                                    $375
                                </p>
                                <div className="flex flex-row">
                                    <Image src="/star.png" alt="image" height={20} width={20} />
                                    <Image src="/star.png" alt="image" height={20} width={20} />
                                    <Image src="/star.png" alt="image" height={20} width={20} />
                                    <Image src="/star.png" alt="image" height={20} width={20} />
                                    <Image src="/star.png" alt="image" height={20} width={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex relative bottom-[1100px] relative left-[900px] bg-[#DB4444] w-[234px] h-[56px] border">
                <button className="px-12 py-4 text-white style-semibold">View All Products</button>
            </div>
        </div>

    )
}
export default Hero