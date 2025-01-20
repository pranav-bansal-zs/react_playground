import { useEffect, useState } from "react";

const useIsMounted=()=>{
    const [mounted,isMounted]=useState(false);
    useEffect(()=>{
        isMounted(true);
    },[])
    return mounted;
}
export default useIsMounted;