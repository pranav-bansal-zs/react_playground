import  {useRef} from "react";
import "./App.css";
import useWindowSize from './useWindowSize';
import useIsMounted from './useIsMounted';
import useCompSize from './useCompSize';

function App() {
  const isMounted=useIsMounted();
  const [windowheight,windowwidth]=useWindowSize();
  const compref=useRef(null);
  const compsize=useCompSize({ref:compref});
  return (
    <div className="container" ref={compref} style={{backgroundColor:"palegreen"}}>
      <h1>component size:{compsize}</h1>
      <h1>{isMounted ? "Mounted" : "Not Mounted"}</h1>
      <h1>Window Height:{windowheight}</h1>
      <br/>
      <h1>Window Width:{windowwidth}</h1>
      </div>
  );
}

export default App;
