import './Parent.css';
import Child from './Child';
import React,{ useContext } from 'react';
import { ThemeContext } from './ThemeContext';
function Parent() {

  const { color, toggleColor } = useContext(ThemeContext);

  return (
    <div className="container1">
      <div className="main-container1" style={{backgroundColor:color }}>
        <button className="switch-btn" onClick={toggleColor}>
          Switch
        </button>
        <div className="child1">
          <Child />
        </div>
        <div className="child2">
          <Child />
        </div>
        <div className="child3">
          <Child />
        </div>
        <div className="child4">
          <Child />
        </div>
      </div>
    </div>
  );
}

export default Parent;