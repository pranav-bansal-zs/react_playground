import { useEffect, useState } from "react";

const useCompSize = ({ ref }) => {
  const [compsize, setCompSize] = useState(0);
  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setCompSize(ref.current.offsetWidth);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [ref]);
  return compsize;
};

export default useCompSize;
