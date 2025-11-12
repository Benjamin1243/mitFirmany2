import OffersList from "@/components/offersList";
import Link from "next/link";

export default function Offers(){
    return(
        <>
        <article className="grid  h-[70vh] overflow-hidden ">
            <div className="col-start-1 row-start-1 z-10 justify-center mt-44 center p-1   ">
                <h1 className="text-6xl de font-sans duration-150 text-center grid max-w-3/4 justify-self-center h-60 ">
              Vi tilbyder
                </h1>
              
            </div>
           

        </article>
        <OffersList></OffersList>
        <article>
  <h2 className=" block max-w-90 mx-auto font-sans p-3.5  text-foreground text-shadow-xs text-center rounded-full text-4xl mb-10 " >Vil du vide mere.....</h2>
  <nav>
    <ul className=" flex max-w-2xl justify-between mx-auto mb-20">
       <li><Link className=" text-1xl font-sans duration-300  border-b-stone-800 border-b-2 hover:pb-1" href={"/"}>Venlig Web</Link></li>
      <li><Link className=" text-1xl font-sans duration-300  border-b-stone-800 border-b-2 hover:pb-1" href={"about-us"}>Hvem er vi</Link></li>
       <li><Link className=" text-1xl font-sans duration-300  border-b-stone-800 border-b-2 hover:pb-1" href={"contact"}>Kontakt os</Link></li>
    </ul>
  </nav>
  </article>
        
        
        </>
    )
}