
import React,{ createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState('white');

  const toggleColor = () => {
    const newColor =color=='beige'?'lightblue' :'beige';
    setColor(newColor);
    return newColor;
  };

  return (
    <ThemeContext.Provider value={{ color, toggleColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
