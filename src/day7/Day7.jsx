import React from "react";
import { ThemeContextProviderComponent } from "./ThemeContextProvide.jsx";
import Lowerdiv from './Lowerdiv.jsx';


const Day7 = () => {
  return (
    <div>
       <>
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "lightblue",
      }}
    >
      <h1>Front Page</h1>
    </div>
    <ThemeContextProviderComponent>
      <Lowerdiv/>
    </ThemeContextProviderComponent>
  </>
    </div>
  )
}

export default Day7

