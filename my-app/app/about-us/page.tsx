import ContactInfo from "@/components/contactInfo";
import Hero from "@/components/hero";
import ImageVideo from "@/components/imageVideo";
import MiddleSection from "@/components/middleSection";

export default function AboutUsPage(){
    return (<>
        <article className="grid  h-[70vh] overflow-hidden ">
            <div className="col-start-1 row-start-1 z-10 justify-center mt-44 center p-1   ">
                <h1 className="text-6xl mx-auto de font-sans duration-150 text-center grid max-w-3/4 justify-self-center h-60 ">
              Vi er VenligWeb
                </h1>
              
            </div>
           

        </article>


<MiddleSection></MiddleSection>

<ContactInfo></ContactInfo>

</>
    )
}