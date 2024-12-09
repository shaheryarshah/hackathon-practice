import Image from "next/image"
import Link from "next/link"
export default function About() {
    return (
        <div className="w-[1305px] h-[781px] gap-[129px] flex">
            <div className="w-[805px]">
                <div className="w-[919px] h-[706px] relative left-[-8px]">
                    <Image src="/signup.png" alt="signup image" height={781} width={805} />

                    <div>
                        <div className=" flex flex-row relative left-[900px] w-[371px] h-[530px] flex gap-[48px]">
                            <div className="relative bottom-[600px] w-[339px] h-[78px] gap-[24px] text-bold">
                                <p className="text-[36px]">Login to Exclusive</p>
                                <div className=" w-[191px] h-[24px]">
                                    <p className="">Enter your details below</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative top-[300px] relative right-[50px]  flex mr-[0px] flex-col w-[370px] h-[176px] gap-[40px] ">
                <input type="text" placeholder="email or phone number" />
                <input type="text" placeholder="password" />
            </div>
            <div className="relative top-[500px] relative right-[400px] flex-col w-[370px] h-[176px] gap-[40px] ">
                <button className="w-[371px] h-[56px] gap-[10px] bg-red-400">Login</button>

            </div>
            <div className="w-[371px] h-[116px]">
            <div className="w-[371px] h-[56px]">
                <div className="w-[199px] h-[24px]">
                    <div className="  relative top-[600px] relative right-[900px] w-[370px] h-[48px] gap-[10px] px-[86px] py-[16px] border-[1px] rounded-[4px]">
                        <p className="flex w-[400px] text-[16px] ">Login</p>
                        <div>
                            <p className="text-red-500">
                                Forgot Password
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}