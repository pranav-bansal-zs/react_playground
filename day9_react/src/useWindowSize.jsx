import { useEffect, useState } from "react"

const useWindowsize=()=>{
    const[height,setHeight]=useState(window.innerHeight);
    const[width,setWidth]=useState(window.innerWidth);
    useEffect(()=>{
        const windowSize = () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
          };
        window.addEventListener("resize",windowSize)
        return () => {
            window.removeEventListener("resize", windowSize);
          };
    },[])
   
    return [width,height];
}
export default useWindowsize;