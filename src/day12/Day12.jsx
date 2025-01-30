import React from 'react'
import Accordion from './Accordian';
const Day12 = () => {
    const accordionData = [
        {
          title: "HTML",
          description: "HTML is the markup language for creating web pages. This is a test by Aniruddha.",
        },
        {
          title: "CSS",
          description: "CSS is used to style web pages. This is a test by Aniruddha.",
        },
        {
          title: "JavaScript",
          description: "JavaScript adds interactivity to websites. This is a test by Aniruddha.",
        },
      ];
    
      return (
        <div className="accordian-container">
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title} description={item.description} />
          ))}
        </div>
      );
}

export default Day12
