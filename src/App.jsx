import './App.css';
import { useState } from 'react';
import Day6 from './day6/day6';
import Day7 from './day7/day7';
import Button from './day8_button/Buttton';
function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="container">
      {selectedDay === null && (
        <div className='button-container'>
        <button className="day-button" onClick={() => setSelectedDay(6)}>
          Day 6
        </button>
         <button className="day-button" onClick={() => setSelectedDay(7)}>
         Day 7
       </button>
       </div>
        ) 
      }

      <div className="content">
        {selectedDay === 6 && <Day6 />}
      </div>
      <div className="content">
        {selectedDay === 7 && <Day7 />}
      </div>
      <div className="content">
        {selectedDay === 8 && <Button/>}
      </div>
    </div>
  );
}

export default App;
