"use client"

import { useEffect, useState } from "react"

interface Step {
    title: string,
    num: number,
    text: string,
    img: string
}

const steps : Step[] = [{ title: "Du kontakter os", 
        num: 1,
        img: "https://www.lederstof.dk/-/media/lederstof/landscape-1920-x-1280/10-gode-raad_landscape-1920x1280.png?mw=576&hash=83CB92FAC14A1BB012D7F9C85729746B",
        text : "du kontakter os, og i snakker sammen om hvilken vej vi skal"}, 
    {
         title: "Vi bygger", 
        num: 2,
        img:"https://www.shutterstock.com/image-vector/building-construction-worker-line-art-260nw-2619080601.jpg",
        text : "Vi går igang med at bygge din hjemmeside"
    },
{
         title: "Du tjekker igennem", 
        num: 3,
        img:"https://thumbs.dreamstime.com/b/one-line-drawing-man-working-laptop-computer-behind-desk-young-male-focus-thinking-sitting-front-computer-one-182499971.jpg",
        text : "Vi sender vores bedste udlag til dig, og du tjekker den igennem."
    }, 
{
         title: "Din hjemmeside er online", 
        num: 4,
        img:"https://thewebsitearchitect.com/wp-content/uploads/2021/02/How-do-you-draw-a-website-wireframe.jpg",
        text : "du kontakter os, og i snakker sammen om hvilken vej vi skal"
    }  ]
export default function ToturialSection(){
    
    const [actual, setActual] = useState(steps[0])


  

    
    return(
    <article className=" mt-30 mb-30">
        <h2 className="text-center text-4xl font-sans mb-10">Hvordan Laver vi din side</h2>
        <div className=" flex flex-col md:flex-row  w-full  gap-10  ">
            <ol className=" grid grid-cols-2 gap-2.5 gap-y-10 grid-rows-2 w-full md:w-7/12">
                <li className={` flex gap-2 `}>
                    <button className={` w-full rounded-sm p-3.5 duration-700 ${ actual.num == 1 ? "bg-black text-white": ""}`} onClick={(event)=>{setActual(steps[0])}}>
                    <span className={` text-6xl font-sans  `}>1</span>
                    <div> <h3 className=" text-2xl font-bold">Du kontakter os</h3>
                    <p>du kontakter os, og i snakker sammen om hvilken vej vi skal</p></div>
                    </button>
                </li>
                 <li className={` flex gap-2 `}>
                    <button className={` w-full rounded-sm p-3.5 duration-700 ${ actual.num == 2 ? "bg-black text-white": ""}`} onClick={(event)=>{setActual(steps[1])}}>
                    <span className=" text-6xl font-sans ">2</span>
                    <div> <h3 className=" text-2xl font-bold">Vi bygger</h3>
                    <p>Vi går igang med at bygge din hjemmeside</p></div>
                    </button>
                </li>
                 <li className={` flex gap-2 `}>
                    <button className={` w-full rounded-sm p-3.5 duration-700 ${ actual.num == 3 ? "bg-black text-white": ""}`} onClick={(event)=>{setActual(steps[2])}}>
                    <span className=" text-6xl font-sans ">3</span>
                    <div> <h3 className=" text-2xl font-bold">Du tjekker den igennem</h3>
                    <p>Vi sender vores bedste udlag til dig, og du tjekker den og sender rettelser eller godkendelse</p></div>
                    </button>
                </li>
                 <li className={` flex gap-2 `}>
                    <button className={` w-full rounded-sm duration-700 p-3.5 ${ actual.num == 4 ? "bg-black text-white": ""}`} onClick={(event)=>{setActual(steps[3])}}>
                    <span className=" text-6xl font-sans ">4</span>
                    <div> <h3 className=" text-2xl font-bold">Din hjemmeside er online</h3>
                    <p>du kontakter os, og i snakker sammen om hvilken vej vi skal</p></div>
                    </button>
                </li>

            </ol>
            <div className=" w-full md:w-5/12">
            <p className=" text-center text-7xl font-sans">{actual.num}</p>
                <h3 className=" text-center font-roboto text-3xl">{actual.title}</h3>
                <p className=" text-center">{actual.text}</p>
                <img   className=" mx-auto w-80" src={actual.img} alt="" />
            </div>
        </div>
        
    </article>)
}
