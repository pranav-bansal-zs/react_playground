import { createContext } from "react";
import React from "react";
export const ThemeContextProvider = createContext();

export const ThemeContextProviderComponent = ({ children }) => {
  const colors = ['#FF0000', '#008000', '#0000FF', '#000000', '#800080', '#FFC0CB'];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <ThemeContextProvider.Provider value={{ colors, getRandomColor }}>
      {children}
    </ThemeContextProvider.Provider>
  );
};
