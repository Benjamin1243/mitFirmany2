export default function ImageVideo(){
    return(
        <section className="grid grid-cols-1  my-20 gap-10 md:grid-cols-2">
            <h2 className=" col-start-1 col-end-3 text-4xl text-center font-sans">Hvem er vi egenligt?</h2>
            <div className=" col-span-1">
                <span className=" overflow-hidden flex text-5xl content-center "> |<h3 className=" self-center  text-3xl font-bold font-roboto">     Vi er Webudviklere </h3></span>
                <p className=" my-5 text-lg">Vi bygger hjemmesider, der ikke bare ser godt ud, men som også virker for din virksomhed. Med moderne design, brugervenlige funktioner og specialtilpassede løsninger sikrer vi, at dine kunder nemt kan finde dig online, forstå dit brand og få lyst til at arbejde med dig.</p>
                <p className=" text-lg">Vores mål er at skabe hjemmesider, der hjælper din virksomhed med at vokse. Vi udvikler skræddersyede løsninger med unikke funktioner, professionelt design og optimering til både mobil og desktop, så du kan skille dig ud fra mængden og give dine kunder en oplevelse, de husker.</p>
            </div>
            <img    className=" rounded-sm " src="pc.jpg"></img>

        </section>
    )
}