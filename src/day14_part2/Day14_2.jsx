import React,{ useRef, useState, useEffect } from "react";
import "./Day14_2.css";

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

function Day14_2() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible((prev) =>!prev);
  };

  return (
    <div className="main-wrapper">
      {align.map((item, i) => (
        <div className="card-item" key={i}>
          {i % 2 === 0 ? (
            <Button data={item} num={i} toggleSidebar={toggleSidebar} />
          ) : (
            <Hover data={item} />
          )}
        </div>
      ))}
      {isSidebarVisible && (<Sidebar setIsSidebarVisible={setIsSidebarVisible}/>)}
    </div>
  );
}

export default Day14_2;

const Sidebar = ({setIsSidebarVisible}) => {
  function handleSidebarClick(e){
    if(e.target.id=="sidebar-container" || e.target.id=="sidebar-close"){
      setIsSidebarVisible(false);
    }
  }
  return (
    <div className="sidebar-container" id="sidebar-container" onClick={(e)=>handleSidebarClick(e)}>
      <div className="sidebar-modal-content">
        <button id="sidebar-close" onClick={handleSidebarClick}>❌</button>
        <div className="sidebar-description">
          <h3>HTML</h3>
          <p>HTML stands for HyperText Markup Language. 
            It is the standard language used to create and structure content on the web. 
            It tells the web browser how to display text, links, images, and other forms of multimedia on a webpage. 
            HTML sets up the basic structure of a website, and then CSS and JavaScript add style and interactivity to make it look and function better.</p>
        </div>
      </div>
    </div>
  );
};

const Tooltip = ({ isClicked = false, data, toggleSidebar, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  function handleClickOutside(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    if(isVisible){
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className="tooltip-wrapper"
      onClick={isClicked ? ()=> setIsVisible((prev) => !prev) : undefined}
      onMouseOver={!isClicked ? () => setIsVisible(true) : undefined}
      onMouseOut={!isClicked ? () => setIsVisible(false) : undefined}
    >
      {children}
      {isVisible && <div className={`tooltip-box ${data.alignment}`}>{data.text}</div>}
    </div>
  );
};

const Button = ({ data, num, toggleSidebar }) => {
  return (
    <Tooltip isClicked={true} data={data}>
      <button className="action-button" onClick={()=>{if(num === 4){ toggleSidebar();}}}>
        {`button ${num}`}
      </button>
    </Tooltip>
  );
};

const Hover = ({ data }) => {
  return (
    <Tooltip data={data}>
      <span className="hover-text">Hover over me</span>
    </Tooltip>
  );
};
