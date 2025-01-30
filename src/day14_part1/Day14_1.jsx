import React,{ useRef, useState, useEffect } from "react";
import "./Day14_1.css";

const alignments = [
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

function Day14_1() {
  return (
    <main className="grid-container">
      {alignments.map((item, index) => (
        <div className="grid-card" key={index}>
          {index % 2 === 0 ? (
            <Button props={item} num={index} />
          ) : (
            <Hover props={item} />
          )}
        </div>
      ))}
    </main>
  );
}

export default Day14_1;

const Tooltip = ({ isClicked = false, props, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  function handleClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`tooltip-wrapper ${props.alignment}`}
      {...(isClicked
        ? { onClick: () => setIsVisible((prev) => !prev) }
        : {
            onMouseOver: () => setIsVisible(true),
            onMouseOut: () => setIsVisible(false),
          })}
    >
      {children}
      {isVisible && <div className="tooltip-box">{props.text}</div>}
    </div>
  );
};

const Button = ({ props, num }) => {
  return (
    <Tooltip isClicked={true} props={props}>
      <button className="custom-btn">{`Button ${num}`}</button>
    </Tooltip>
  );
};

const Hover = ({ props }) => {
  return (
    <Tooltip isClicked={false} props={props}>
      <span className="hover-text">Hover over me</span>
    </Tooltip>
  );
};
