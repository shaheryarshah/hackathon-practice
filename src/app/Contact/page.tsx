import Link from "next/link"
export default function About (){
    return(
        <div>
            <div className="mt-[80px] relative left-[400px]">
           <Link href="http://localhost:3000/">Home</Link> / <Link href="">Contact</Link>
           </div>
           <div  className="flex flex-col relative left-[400px] relative gap-10 top-[300px]">
           <div >
            <p className="text-2xl font-bold">Call to Us</p>
            <p >We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
            </div>
           <div>
           <p className="text-2xl font-bold">Write to Us</p>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
           </div>
           </div>
           <div className="flex gap-5 relative left-[1000px] mt-[50px] mb-[50px]">
            <input className=" border w-[235px] h-[50px]" type="text" placeholder="your name" />
            <input className=" border w-[235px] h-[50px]" type="text" placeholder="your email" />
            <input className=" border w-[235px] h-[50px]" type="text" placeholder="your phone number"/>
           </div>
           
           <div className="flex relative left-[1000px] mt-[50px] mb-[50px]">
<textarea className="flex border w-[737px] h-[207px]" placeholder="your messege" name="" id=""></textarea>
           </div>
        </div>
    )
}