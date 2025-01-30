import { useEffect, useState } from "react";

const useCompsize = ({ ref }) => {
  const [compwidth, setCompwidth] = useState(0);
  const [compheight, setCompheight] = useState(0);
  useEffect(() => {
    let ref1=ref.current;
    const updateSize = () => {
      if (ref1) {
        setCompwidth(ref.current.offsetWidth);
        setCompheight(ref.current.offsetHeight);
      }
    };
    updateSize();
    const resizeobserver=new ResizeObserver(updateSize);
    if(ref1){
      resizeobserver.observe(ref1);
    }
    return () => {
      if(ref1){
        resizeobserver.unobserve(ref1);
      }
    };
  },[]);
  return [compwidth,compheight];
};

export default useCompsize;
