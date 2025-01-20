import { useState } from "react"

const useWindowSize=()=>{
    const[height,setHeight]=useState(window.innerHeight);
    const[width,setWidth]=useState(window.innerWidth);
    window.addEventListener("resize",()=>{
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    })
   
    return [height,width];
}
export default useWindowSize;