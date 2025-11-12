import { FaMobileAlt } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";


export default function ImageText(){
return(
    <article className="px-3.5 flex flex-col gap-3.5 justify-center justify-items-center items-center max-w-[90%] mx-auto ">
        <div className=" pt-2.5 justify-self-end mb-3.5">
            <h2 className=" font-sans text-4xl text-center">Vi hjælper dig med at blive <span className=" font-bold uppercase">synlig</span> på nettet</h2>
            <p className=" mt-1 font-roboto text-lg text-center">Ved at få os til at lave din hjemmeside, sørger du for at være : </p>
        </div>

        <section className=" flex flex-col gap-2.5 md:flex-row">
            <article className=" duration-300 w-full  flex flex-col text-center justify-center gap-2.5 border-2 border-gray-500 rounded-sm py-5  shadow-2xl hover:shadow-none md:w-1/3">
                <FaMobileAlt className=" self-center text-amber-50 p-3 overflow-visible bg-black text-5xl rounded-full" />
<div>
                <h3 className=" text-2xl font-bold font-sans">Tilgægelig på alle devices</h3>
                <p>Dine kunder nemt kan finde dig online, uanset om de søger på mobil eller computer.</p>
                </div>
            </article>
            <article className=" duration-300 wfull flex flex-col text-center gap-2.5 border-2 border-gray-500 rounded-sm  py-5  shadow-2xl hover:shadow-none md:w-1/3">
                <FaSearchDollar className=" self-center text-amber-50 p-3 overflow-visible bg-black text-5xl rounded-full" />
<div>
                <h3 className=" text-2xl font-bold font-sans">Optimeret til søgemaskiner</h3>
                <p>Din hjemmeside er optimeret til søgemaskiner, så flere potentielle kunder ser dig.</p>
                </div>
            </article>
            <article className=" duration-300 w-full flex flex-col text-center gap-2.5 border-2 border-gray-500 rounded-sm  py-5  shadow-2xl hover:shadow-none md:w-1/3">
                <GiFallingStar className=" self-center text-amber-50 p-3 overflow-visible bg-black text-5xl rounded-full" />
<div>
                <h3 className=" text-2xl font-bold font-sans">Skil dig ud fra mængden</h3>
                <p>Skil dig ud fra mængden med en hjemmeside, der virker for dig, og det behov du har brug for.</p>
                </div>
            </article>
        </section>

    </article>
)
}
