import Image from "next/image"
export default function Footer() {
    return (
        <div className="flex relative left-[350px] w-[1440px] h-[440px] text-white bg-black p-[100px] ">
            <div className="flex gap-[100px] ">
            <div >
                <p className="m-4">Exclusive</p>
                <p className="m-4">Subscribe</p>
                <p className="m-4 text-[12px]">Get 10% off your first order</p>
                <input className="m-4 border bg-black" type="text" placeholder="enter your email" />

            </div>
            <div>
                <p className="m-4">Support</p>
                <p className="m-4 text-[12px]">111  Bijoy sarani, Dhaka, </p>
                <p className="m-4 text-[12px]">DH 1515, Bangladesh.</p>
                <p className="m-4 text-[12px]">exclusive@gmail.com</p>
                <p className="m-4 text-[12px]">+88015-88888-9999</p>
            </div>
            <div>
                <p className="m-4">Account</p>
                <p className="m-4 text-[12px]">My Account</p>
                <p className="m-4 text-[12px]">Login/Registration</p>
                <p className="m-4 text-[12px]">Cart</p>
                <p className="m-4 text-[12px]">Wishlist</p>
                <p className="m-4 text-[12px]">Shop</p>
            </div>
            <div>
                <p className="m-4">Quick Link</p>
                <p className="m-4 text-[12px]">Privacy Policy</p>
                <p className="m-4 text-[12px]">Terms Of Use</p>
                <p className="m-4 text-[12px]">FAQ</p>
                <p className="m-4 text-[12px]">Contact</p>
            </div>
            <div>
                <p className="m-4">Download App</p>
                <p className="m-4 text-[8px]">Save $3 with App New User Only</p>
                <Image className="m-4"src="/qr.png" alt="pictures" height={50} width={50} />
                <Image className="flex relative left-[70px] relative bottom-[70px]"src="/gp.png" alt="pictures" height={20} width={80} />
                <Image className="flex relative left-[70px] relative bottom-[70px]"src="/d.png" alt="pictures" height={20} width={80} />

            </div>
            </div>
        </div>
    )
}

