<<<<<<< HEAD:src/day10/Day10.jsx
import React from 'react'
import Child from './Child';
const Day10 = () => {
=======

import Child from './Child';

const App = () => {
>>>>>>> 9095328 (React test 20 Jan 2025 4:30 PM):day10_react_test/src/App.jsx
    const data = {
        image: 'https://campus.epam.com/static/news/255/self-study_03375353.png',
        title: 'React Test',
        description: 'Create a parent component which passes a props to child component such as image,title,description'
    };
    return (
        <div>
            <Child image={data.image} title={data.title} description={data.description}/>
        </div>
    );
}

export default Day10