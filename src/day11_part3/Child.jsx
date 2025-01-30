import './Child.css';
import React from 'react';

const Child = ({ number }) => {
  const images = ["/dice1.png","/dice2.png","/dice3.png","/dice4.png","/dice5.png","/dice6.png"];

  function generateimagearray(number) {
    const array1 = Array.from({ length: number-1}, (_, i) => i + 1); 
    const array2=[...array1].reverse();
    const finalarray=[];
    for(let i=0;i<number;i++){
        if (array1[i] <= images.length && array2[i] <= images.length) { 
            console.log(images[array1[i]])
        finalarray.push(array1[i],array2[i]);}
    }
    return finalarray;
  };
  return (
    <div className="main-container">
        {
        generateimagearray(number).map((value, index) => (
          <img key={index} src={images[value-1]} />
        ))}
    </div>
  );
};

export default Child;

