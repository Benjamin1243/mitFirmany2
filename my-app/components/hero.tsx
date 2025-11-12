"use client"
import { useEffect, useState } from "react";

interface Props {
    title: string;
    secondTitle: string
}

export default function Hero( {title, secondTitle} : Props){

useEffect(()=>{

    function callback(this: Window, ev:Event){
        console.log(this.scrollY)
        if(this.scrollY > 10){
            setScroll(true)
        }else{
            setScroll(false)
        }

        

    }
   window.addEventListener("scroll",callback)
    

}, []
)
const [scroll, setScroll] = useState(false)

    return(
        
        <article className="grid  h-screen overflow-hidden ">
            <div className="col-start-1 row-start-1 z-10 justify-center mt-44 center p-1   ">
                <h1 className="text-6xl de font-sans duration-150 text-center grid max-w-3/4 justify-self-center h-60 ">
                <span className={`col-start-1  duration-500 row-start-1 ease-in-out transition-opacity ${scroll ? "opacity-0": "opacity-100"}`}>{title}</span>
                <span className={`  col-start-1 duration-500 row-start-1  ease-in-out ${scroll ? "opacity-100": "opacity-0"}`}> {secondTitle}</span>
                
                </h1>
              
            </div>
            <section  className="bg-black w-90% max-w-xl justify-self-center p-10 mb-11 rounded-3xl duration-200 rotate-x-50 rotate-z-45 shadow-2xl flex gap-2 h-80 ">
             <img className=" max-w-60 aspect-square min-w-20 w-full flex-1 object-cover" src={scroll ?"/potrait.jpg" :"https://images-bonnier.imgix.net/files/dif/production/2024/06/21001348/shutterstock_747746974-8AHmisn2PxMvebjZDNT9WQ_xx9708-scaled.jpg?auto=compress,format"} alt="" />
             <form className=" flex flex-col gap-3 " action="">
                <input readOnly className=" border-b border-e-amber-50 text-amber-50 p-0.5 outline-0" type="text" name="" placeholder={scroll ? "John Doe": "Name"} id="" />
                <input readOnly className=" border-b border-e-amber-50 text-amber-50 p-0.5 outline-0" type="text" placeholder={scroll ? "JohnDoe@gmail.com": "E-mail"} />
                <p></p>
             </form>
            </section>

        </article>
    )
}