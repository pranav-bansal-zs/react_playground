import './Button.css';
import { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0); 
  const [clickedButtons, setClickedButtons] = useState(Array(9).fill(false)); 
  const [buttonArray, setButtonArray] = useState([]); 

  const handleClick = (index) => {
    if (count > 3) {
      setTimeout(() => {
        const reversedArray = [...buttonArray].reverse();
        reversedArray.forEach((value, i) => {
          setTimeout(() => {
            setClickedButtons((prev) => {
              const newClickedButtons = [...prev];
              newClickedButtons[value] = false;
              return newClickedButtons;
            });
          }, 2000 * i);
        });
        setTimeout(() => {
          setButtonArray([]);
          setCount(0);
        }, 2000 * reversedArray.length);
      }, 5000);
    }

    if (count < 4 && !clickedButtons[index]) {
      setClickedButtons((prev) => {
        const newClickedButtons = [...prev];
        newClickedButtons[index] = true;
        return newClickedButtons;
      });

      setButtonArray((prev) => {
        const newButtonArray = [...prev, index];
        setCount(newButtonArray.length);
        return newButtonArray;
      });
    }
  };

  return (
    <div className="container">
      <div className="button-grid">
        {[...Array(9)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`grid-button ${clickedButtons[index] ? 'color_change' : ''}`}
          >
            Button {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Button;
