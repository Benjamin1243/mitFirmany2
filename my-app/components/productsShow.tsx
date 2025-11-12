interface Products {
    title: string,
    img: string, 
    link: string,
}
interface Props  {
    products: Products[]

}
export default function ProductShow(  {products} :Props){
    console.log(products[0].title)
    return(
        <section>
            <h2 className=" font-sans text-4xl">Vores exemplare</h2>

        </section>
    )
}
