"use client"
import ContactForm from "@/components/contactForm";
import ContactInfo from "@/components/contactInfo";

import { Suspense } from "react";

export default function contact(){
     
    return(
        <>
         <article className="grid  h-[70vh] overflow-hidden ">
            <div className="col-start-1 row-start-1 z-10 justify-center mt-44 center p-1   ">
                <h1 className="text-6xl de font-sans duration-150 text-center grid max-w-3/4 justify-self-center h-60 ">
             Kontakt os
                </h1>
              
            </div>
           

        </article>
        <Suspense fallback="venter">
        <ContactForm ></ContactForm>
        </Suspense>
        <ContactInfo></ContactInfo>
        </>
    )
}