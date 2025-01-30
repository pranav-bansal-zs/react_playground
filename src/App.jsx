import './App.css';
import { useState } from 'react';
import Day6 from './day6/day6';
import Day7 from './day7/day7';
import Button from './day8_button/Buttton';
import Form from './day8_form/Form';
import Day9 from './day9/Day9';
function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div>
    {selectedDay===null && (<div className="container">
      {selectedDay === null && (
        <div className='button-container'>
        <button className="day-button" onClick={() => setSelectedDay(6)}>
          Day 6
        </button>
         <button className="day-button" onClick={() => setSelectedDay(7)}>
         Day 7
       </button>
       <button className="day-button" onClick={() => setSelectedDay(8)}>
         Day 8_button
       </button>
       <button className="day-button" onClick={() => setSelectedDay(9)}>
         Day 8_Form
       </button>
       <button className="day-button" onClick={() => setSelectedDay(10)}>
         Day 9
       </button>
       </div>
        ) 
      }
</div>)}
      <div>
        {selectedDay === 6 && <Day6 />}
      </div>
      <div>
        {selectedDay === 7 && <Day7 />}
      </div>
      <div>
        {selectedDay === 8 && <Button/>}
      </div>
      <div>
        {selectedDay === 9 && <Form/>}
      </div>
      <div>
        {selectedDay === 10 && <Day9/>}
      </div>
    </div>
  );
}

export default App;
