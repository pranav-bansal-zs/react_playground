import { createContext, useState } from "react";

export const ThemeContextProvider = createContext();

export const ThemeContextProviderWrapper = ({ children }) => {
  const colors = [
    "#FF0000",
    "#008000",
    "#0000FF", 
    "#000000",
    "#800080",
    "#FFC0CB",  
  ];

  const [currentColor, setCurrentColor] = useState("#FFFFFF");

  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random()*colors.length);
    setCurrentColor(colors[randomIndex]);
  };

  return (
    <ThemeContextProvider.Provider value={{ currentColor,generateRandomColor }}>
      {children}
    </ThemeContextProvider.Provider>
  );
};
