import { useEffect, useState } from "react";

const useIsmounted=()=>{
    const [mounted,isMounted]=useState(false);
    useEffect(()=>{
        isMounted(true);
    },[])
    return mounted;
}
export default useIsmounted;