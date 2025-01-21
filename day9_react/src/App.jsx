import  {useRef} from "react";
import "./App.css";
import useWindowsize from "./useWindowSize";
import useIsmounted from './useIsmounted';
import useCompsize from "./useCompSize";

function App() {
  const isMounted=useIsmounted();
  const [windowwidth,windowheight]=useWindowsize();
  const compref=useRef(null);
  const [compwidth,compheight]=useCompsize({ref:compref});
  return (
    <div className="container" ref={compref} style={{backgroundColor:"palegreen", border:"3px solid"}}>
      <h1>component width:{compwidth}</h1>
      <h1>component height:{compheight}</h1>
      <h1>{isMounted ? "Mounted" : "Not Mounted"}</h1>
      <h1>Window Height:{windowheight}</h1>
      <br/>
      <h1>Window Width:{windowwidth}</h1>
      </div>
  );
}

export default App;
