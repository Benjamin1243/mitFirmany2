import { ComponentType } from "react";
import { IconType } from "react-icons";
import { FaWordpress, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";


interface Icons {
    wordpress: IconType
    react: IconType,
    nextjs : IconType,

}

interface Props {
    icon: string
}
export default function DynamicIcon({icon} : Props){
    const icons : Icons = {
        wordpress : FaWordpress,
        react: FaReact,
        nextjs: RiNextjsFill
    }
    const Component : IconType  = icons[icon as keyof Icons] 

    return(
        <Component className=" text-9xl text-center mx-auto"></Component>
    )

    
}