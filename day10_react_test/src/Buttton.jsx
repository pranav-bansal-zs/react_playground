import { useRef, useState } from 'react';
import './Button.css';
import useWindowSize from './useWindowSize';
import useIsMounted from './useIsMounted';
import useCompSize from './useCompSize';

function Button() {
  const isMounted=useIsMounted();
  const [count, setCount] = useState(0); 
  const [clickedButtons, setClickedButtons] = useState(Array(9).fill(false)); 
  const [buttonArray, setButtonArray] = useState([]); 
  const [windowheight,windowwidth]=useWindowSize();
  const compref=useRef(null);
  const compsize=useCompSize({ref:compref});

  

  const handleClick = (index) => {
    if (count>3) {
      setTimeout(() => {const reversedArray = [...buttonArray].reverse();
        reversedArray.forEach((value,i) => {
          setTimeout(() => {
            setClickedButtons((prev)=>{
              const newClickedButtons = [...prev];
              newClickedButtons[value] = false;
              return newClickedButtons});
          },2000*i); 
          setButtonArray([]);
          setCount(0);
        });}, 5000); 
    }
      if (count < 4 && !clickedButtons[index]) {
        const newClickedButtons = [...clickedButtons];
        const newButtonArray = [...buttonArray];
  
        newClickedButtons[index] = true;
        newButtonArray.push(index);
  
        setClickedButtons(newClickedButtons);
        setButtonArray(newButtonArray);
        setCount(newButtonArray.length);
      }
     
  };
  return (
    
    <div className="container" ref={compref}>
      <h1>component size:{compsize}</h1>
      <h1>{isMounted ? "Mounted" : "Not Mounted"}</h1>
      <h1>Window Height:{windowheight}</h1>
      <br/>
      <h1>Window Width:{windowwidth}</h1>
      
      <div className="button-grid">
        {[...Array(9)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={clickedButtons[index] ? 'color_change' : ''}
          >
            Button {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Button;