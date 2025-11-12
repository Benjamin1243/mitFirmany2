import Hero from "@/components/hero";
import ImageText from "@/components/imageText";
import ImageVideo from "@/components/imageVideo";
import ProductShow from "@/components/productsShow";
import ToturialSection from "@/components/toturialSection";
import Link from "next/link";


export default function Home() {
  interface Products {
    title: string,
    img: string, 
    link: string,
}
  const products : Products[] = [{title : "Burger", img: "erer", link: "erer"}]
  return (
    <>
   <Hero secondTitle="Det er Dit online visitkort" title="En Hjemmeside er ikke bare en Hjemmeside"></Hero>
    
 <ImageText></ImageText>
  <ToturialSection></ToturialSection>

  <Link className=" block max-w-90 mx-auto font-sans p-3.5  text-foreground text-shadow-xs text-center rounded-full text-4xl mb-10 " href="about-us">Vil du vide mere.....</Link>
  <nav>
    <ul className=" flex max-w-2xl justify-between mx-auto mb-20">
       <li><Link className=" text-1xl font-sans duration-300  border-b-stone-800 border-b-2 hover:pb-1" href={"offers"}>Tilbud</Link></li>
      <li><Link className=" text-1xl font-sans duration-300  border-b-stone-800 border-b-2 hover:pb-1" href={"about-us"}>Hvem er vi</Link></li>
       <li><Link className=" text-1xl font-sans duration-300  border-b-stone-800 border-b-2 hover:pb-1" href={"contact"}>Kontakt os</Link></li>
    </ul>
  </nav>

 

   </>

  
  
  );
}
