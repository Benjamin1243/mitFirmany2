"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { ImCross } from "react-icons/im";


export default function Header(){
    const [burgermenu, setBurgerMenu] = useState(false)
    const [menuClick, setMenuClick] = useState(false)
    useEffect(()=>{
        window.addEventListener("resize", checkWindow)
        function checkWindow(){
        const windowSize : number = window.innerWidth;
        if(windowSize < 768){
            setBurgerMenu(true)
            setMenuClick(false)
        }else{
            setBurgerMenu(false)
            setMenuClick(true)
        }}
       checkWindow()

    },[])

    function closeBurgermenuOnLink(){
        if(window.innerWidth < 768){
            setMenuClick(false)
        }
    }
    return(
<header className=" fixed w-full  z-100   " style={menuClick ? {backgroundColor: "white"}: {backgroundColor: "transparent"}}>
    <div  className=" flex justify-between px-[2%] py-1 bg-background" style={ burgermenu ? {display: "flex"}: {display: "none"}}>
    <Link href={"/"} className=" text-3xl font-black font-sans">VenligWeb</Link>
    <button aria-label="Toggle navigation" className=" z-110 text-2xl" onClick={()=>{
        
       menuClick ? setMenuClick(false): setMenuClick(true)
    }} > { menuClick ? <ImCross />: <CiMenuBurger />}
  </button>
    </div>
    <nav className=" h-full fixed top-0 w-full duration-200 md:h-15 left-0 px-[2%] backdrop-blur-sm bg-white md:bg-transparent" style={menuClick ? {marginLeft: "0%"}: {marginLeft: "100%"}} >
        <ul className=" flex   items-center py-3 flex-col md:flex-row justify-between pt-10 gap-24 md:justify-end md:gap-10 md:pt-1 ">
            <li className=" md:mr-auto"> <Link  href={"/"} onClick={closeBurgermenuOnLink} className=" text-6xl md:text-3xl font-black font-sans">VenligWeb</Link></li>
             <li><Link onClick={closeBurgermenuOnLink} className=" font-sans text-3xl md:text-lg" href="offers">Tilbud</Link></li>
            <li><Link onClick={closeBurgermenuOnLink} className=" font-sans text-3xl md:text-lg" href="about-us">Hvem er vi</Link></li>
            <li><Link onClick={closeBurgermenuOnLink} className=" font-sans text-3xl md:text-lg" href="contact">Kontakt Os</Link></li>
            
        </ul>
    </nav>
</header>
    )
}
