import React,{ useContext } from 'react';
import { ThemeContext } from './ThemeContext';
function Child() {
    const { color, toggleColor } = useContext(ThemeContext);
  
    return (
      <div className="child-container" style={{ backgroundColor: color }}>
        <button className="switch-btn" onClick={toggleColor}>
          Switch
        </button>
      </div>
    );
  }

  export default Child;