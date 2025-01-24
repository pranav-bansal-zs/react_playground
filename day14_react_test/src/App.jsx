import { useRef } from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const align = [
  { text: "This is button1", alignment: "left" },
  { text: "This is Hover1", alignment: "top" },
  { text: "This is button2", alignment: "right" },
  { text: "This is Hover2", alignment: "left" },
  { text: "This is button3", alignment: "top" },
  { text: "This is Hover3", alignment: "right" },
  { text: "This is Button4", alignment: "left" },
  { text: "This is Hover4", alignment: "top" },
  { text: "This is Button5", alignment: "right" },
];
function App() {

  return (
    <main>
      {Array.from({ length: 9 }).map((_, i) => (
        <div className="card" key={i}>
          {i % 2 === 0 ? (
            <Button props={align[i]} num={i}/>
          ) : (
            <Hover props={align[i]} />
          )}
        </div>
      ))}
    </main>
  );
}

export default App;

const Tooltip = ({ isclicked = false, props, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref=useRef();

  function handleclick(e){
    if(ref.current && !ref.current.contains(e.target)){
      setIsVisible(false);
    }
  }
  
  useEffect(()=>{
    document.addEventListener("click",handleclick);

    return()=>{
      document.removeEventListener("click",handleclick);
    }
  },[])
  return (
    <div ref={ref}
      className={`tooltip-container ${props.alignment}`}
      {
        ...(isclicked
          ? {
              onClick:  () => setIsVisible((prev)=>!prev)
            }
          : {
              onMouseOver: () => setIsVisible((prev)=>!prev),
              onMouseOut: () => setIsVisible((prev)=>!prev),
            })
      }
    >
      {children}
      {isVisible && <div className="tooltip">{props.text}</div>}
    </div>
  );
};

const Button = ({ props ,num }) => {
  
  return (
    <Tooltip isclicked={true} props={props}>
      <button>
        {`button ${num}`}
      </button>
    </Tooltip>
  );
};

const Hover = ({ props }) => {
  return (
    <Tooltip isClicked={false} props={props}>
      <span>Hover over me</span>
    </Tooltip>
  );
};
