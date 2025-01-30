import './App.css';
import { useState } from 'react';
import Day6 from './day6/day6';

function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="container">
      {selectedDay === null && (
        <button className="day-button" onClick={() => setSelectedDay(6)}>
          Day 6
        </button>
      )}

      <div className="content">
        {selectedDay === 6 && <Day6 />}
      </div>
    </div>
  );
}

export default App;
