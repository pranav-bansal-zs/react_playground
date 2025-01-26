import { useRef, useState, useEffect } from "react";
import "./App.css";

const align = [
  { text: "This is Button 0", alignment: "left" },
  { text: "This is Hover 1", alignment: "top" },
  { text: "This is Button 2", alignment: "right" },
  { text: "This is Hover 2", alignment: "left" },
  { text: "This is Button 4", alignment: "top" },
  { text: "This is Hover 3", alignment: "right" },
  { text: "This is Button 5", alignment: "left" },
  { text: "This is Hover 4", alignment: "top" },
  { text: "This is Button 6", alignment: "right" },
];

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <main>
      {align.map((item, i) => (
        <div className="card" key={i}>
          {i % 2 === 0 ? (
            <Button props={item} num={i} toggleSidebar={toggleSidebar} />
          ) : (
            <Hover props={item} />
          )}
        </div>
      ))}
        {isSidebarVisible && (<Sidebar setIsSidebarVisible={setIsSidebarVisible}/>)}
    </main>
  );
}

export default App;

const Sidebar = ({setIsSidebarVisible}) => {
  function handlesidebar(e){
    if(e.target.id=="sidebar-div" || e.target.id=="sidebar-remove"){
      setIsSidebarVisible(false);
    }
  }
  return (
    <div className="sidebar" id="sidebar-div" onClick={(e)=>handlesidebar(e)}>
      <div className="sidebar-modal">
      <button id="sidebar-remove" onClick={handlesidebar}>❌</button>
      <div className="content">
        <h3>HTML</h3>
        <h4>HTML stands for HyperText Markup Language.
          It is the standard language used to create and structure content on the web.
          It tells the web browser how to display text, links, images, and other forms of 
          multimedia on a webpage. HTML sets up the basic structure of a website, and then 
          CSS and JavaScript add style and interactivity to make it look and function better.</h4>
        </div>
        </div>
    </div>
  );
};

const Tooltip = ({ isclicked = false, props, toggleSidebar, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  function handleClickOutside(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    if(isVisible){
    document.addEventListener("click", handleClickOutside);}
    else{
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`tooltip-container ${props.alignment}`}
      onClick={isclicked ? ()=> setIsVisible((prev) => !prev) : undefined}
      onMouseOver={!isclicked ? () => setIsVisible(true) : undefined}
      onMouseOut={!isclicked ? () => setIsVisible(false) : undefined}
    >
      {children}
      {isVisible && <div className="tooltip">{props.text}</div>}
    </div>
  );
};

const Button = ({ props, num, toggleSidebar }) => {
  return (
    <Tooltip isclicked={true} props={props}>
      <button onClick={()=>{if(num === 4){
      toggleSidebar();
    }}}>{`button ${num}`}</button>
    </Tooltip>
  );
};

const Hover = ({ props }) => {
  return (
    <Tooltip props={props}>
      <span>Hover over me</span>
    </Tooltip>
  );
};
