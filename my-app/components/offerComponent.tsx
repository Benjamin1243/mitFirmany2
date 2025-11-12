import { FaWordpress } from "react-icons/fa";
import DynamicIcon from "./dynamicIcon";
import Link from "next/link";

interface Props{
    offer: Offer
}
interface Offer {
    title: string
    img: string,
    list: string[],
    details: string,
    price: number,
    newPrice: number,
    link: string
}
export default function OfferComponent({offer}: Props){
    return(
    <article className="  duration-200 max-w-lg mx-auto lg:w-1/3 rounded-lg text-center p-5 border-2  hover:scale-102 hover:shadow-2xl">
        <div className="grid mb-2.5 pb-2">
       
        <div className=" rounded-lg col-start-1  row-start-1 bg-amber-100/10  z-5 "></div>
        <img className=" h-full object-fit col-start-1 row-start-1" src={offer.img} alt="" />
        <DynamicIcon  icon={offer.img}></DynamicIcon>

       
        </div>
        <h2 className="  text-2xl font-sans mb-1.5">{offer.title}</h2>
        <p  className=" my-2  text-lg border-b-2 pb-2.5">{offer.details}</p>
        <ul className=" my-2.5">
            {offer.list.map((text)=>{
                return(
                <li className=" text-m  text-left font-sans my-1.5 flex content-center items-center" key={text}> <span className=" top-1.5 relative text-2xl align-middle mr-2 self-center ">*</span> <span>{text}</span></li>)
            })}
        </ul>

        <Link className=" mt-5 block font-sans text-2xl border-2 border-foreground px-5 py-1 duration-300 rounded-3xl w-1/2 mx-auto hover:bg-black/80 hover:text-background " href={offer.link}>Kom igang</Link>
        <p className=" font-bold mt-2 font-sans">Fra:  <span className=" line-through font-light">{offer.price}</span> / { offer.newPrice} kr.</p>
    </article> 
    )
}