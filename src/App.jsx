import React from 'react';
import './App.css';
import { useState } from 'react';
import Day6 from './day6/day6';
import Day7 from './day7/day7';
import Button from './day8_button/Buttton';
import Form from './day8_form/Form';
import Day9 from './day9/Day9';
import Day10 from './day10/Day10';
import Day11_1 from './day11_part1/Day11_1';
import Day11_2 from './day11_part2/Day11_2';
import Day11_3 from './day11_part3/Day11_3';
import Day12 from './day12/Day12';
import Modal from './day13/Modal';
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
       {/* <button className="day-button" onClick={() => setSelectedDay(11)}>
         Day 10
       </button> */}
      <button className="day-button" onClick={() => setSelectedDay(12)}>
         Day 11 Part-1
       </button>
       <button className="day-button" onClick={() => setSelectedDay(13)}>
         Day 11 Part-2
       </button>
       <button className="day-button" onClick={() => setSelectedDay(14)}>
         Day 11 Part-3
       </button>
       <button className="day-button" onClick={() => setSelectedDay(15)}>
         Day 12
       </button>
       <button className="day-button" onClick={() => setSelectedDay(16)}>
         Day 13
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
      <div>
        {selectedDay === 11 && <Day10/>}
      </div>
      <div>
        {selectedDay === 12 && <Day11_1/>}
      </div>
      <div>
        {selectedDay === 13 && <Day11_2/>}
      </div>
      <div>
        {selectedDay === 14 && <Day11_3/>}
      </div>
      <div>
        {selectedDay === 15 && <Day12/>}
      </div>
      <div>
        {selectedDay === 16 && <Modal/>}
      </div>

    </div>
  );
}

export default App;
