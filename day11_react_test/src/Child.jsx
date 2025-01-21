import './Child.css';
import React, { useState, useEffect } from 'react';

const Child = ({ number }) => {
  const images = ["/dice1.png","/dice2.png","/dice3.png","/dice4.png","/dice5.png","/dice6.png"];

  const finalimages = images.slice(0, number);
  const [loadedimages, setLoadedimages] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (number === 0) {
      setLoader(false);
      setLoadedimages([]);
      return;
    }

    setLoader(true);

    const loaderTimeout = setTimeout(() => {
      setLoader(false);
      finalimages.forEach((image, i) => {
        setTimeout(() => {
          setLoadedimages((prev) => [...prev, image]);
        },1000*i);
      });
    }, 2000);

    return () => {
      clearTimeout(loaderTimeout);
      setLoadedimages([])
    };
  }, [number]);

  return (
    <div className="main-container">
      {loader ? (
        <img src='loader.gif' className='loader'></img>
      ) : (
        loadedimages.map((value, index) => (
          <img key={index} src={value} />
        ))
      )}
    </div>
  );
};

export default Child;
