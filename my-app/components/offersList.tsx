import OfferComponent from "./offerComponent"

interface Offers {
    offers: Offer[]

}
interface Offer {
    title: string
    img: string,
    list: string[],
    details: string, 
    price: number,
    newPrice : number,
    link: string,

}
export default function OffersList() {

    const offers: Offer[] = [{ title: "Worpdress site", details: "Et site i wordpress som du nem kan customize gennem dit admin panel", img : "wordpress", list: ["Nemt at ændre selv", "Lavet i wordpress", " Hurtigt oprettet", "Mulighed for wordpress features"], price: 12000, newPrice: 5000, link: "contact?topic=Wordpress_site" }
,{title: "Next js Site", details : "En side vi laver i react eller next som hostes på en server med nodeJs", img: "nextjs", list : [ "Hurtigt lavet", "Billigere", "Flere custom features", "Mulighed for at have server funktioner"], price: 10000, newPrice: 4000, link: "contact?topic=NextJs_site"},
{title: "React Site", details : "En side vi laver i react eller next som hostes på en server med nodeJs", img: "react", list : [ "Hurtigt lavet", "Billigere", "Flere custom features", "Klient basseret "], price: 8000, newPrice: 3000, link: "contact?topic=React_site"}
]

    return (
        <article className=" flex gap-7 max-w-[95   %] sm:max-w-7xl mx-auto mb-30 flex-col lg:flex-row">
            {offers.map((offer, index)=>{
                return (
                    <OfferComponent key={offer.title + index} offer={offer}></OfferComponent>
                )
            })}

        </article>
    )
}