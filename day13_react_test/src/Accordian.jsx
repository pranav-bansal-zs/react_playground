import { useState } from "react";
import "./App.css";
const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        {title}
        <div
          className={
            isOpen ? "accordion-icon accordion-icon-rotated" : "accordion-icon"
          }
        ></div>
      </h3>
      {isOpen && <p>{description}</p>}
    </div>
  );
};

export default Accordion;
