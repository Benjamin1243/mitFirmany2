"use client"
import { FaWordpress, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

import { useSearchParams } from 'next/navigation'
export default function ContactForm(){
    const searchParams = useSearchParams()
    const topic : string | null = searchParams.get("topic")
    console.log(topic)
    return(
        <form action="" className=" grid grid-cols-2 max-w-3/4 mx-auto justify-center gap-5 mb-20">
            <h2 className=" col-span-2 text-center font-sans text-3xl mb-10">Her kan du kontakte os</h2>
            
               
                <input className=" border-2 rounded-sm p-3 duration-300 font-sans focus:bg-foreground/90 focus:text-background outline-0" name="name" placeholder="Navn" type="text" />
                <input className=" border-2 rounded-sm p-3 font-sans duration-300  focus:bg-foreground/90 focus:text-background outline-0   " type="select" name="email" placeholder="E-mail" />
                
           
          <label htmlFor="topic" className=" font-sans"> Jeg vil gerne kontaktes omkring :<select className=" font-bold text-xl" name="topic" defaultValue={topic ? topic : ""} id="">
            <option  value="React_site">React site </option>
            <option value="NextJs_site">Nextjs site </option>
            <option value="Wordpress_site">Wordpress site</option>
            </select></label>

            <textarea className=" col-span-2 border-2 rounded-sm p-3 h-70" name="text" id="" placeholder="Din besked"></textarea>
            <button type="submit" className=" col-span-2 border-2 p-3 font-sans rounded-sm duration-500  text-xl hover:bg-foreground/90 hover:text-background">Kom igang med din Hjemmeside</button>
        </form>
    )
}