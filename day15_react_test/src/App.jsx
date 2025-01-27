import './App.css';
import Child from './Child';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
function App() {

  const { color, toggleColor } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className="main-container" style={{backgroundColor:color }}>
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

export default App;