import React from 'react'
import Lowerdiv from './lowerdiv.jsx';
import { ThemeContextProvider } from './ThemeContextProvide.jsx'
const color=['#FF0000', '#008000', '#0000FF', '#000000', '#800080', '#FFC0CB'];
const Day6 = () => {
  return (
    <div>
     <div style={{display:"flex",alignItems:"center",justifyContent:'center',height:"100vh",backgroundColor:"lightblue"}}>
      <h1>Front Page</h1>
     </div>
     <ThemeContextProvider.Provider value={color}>
     <Lowerdiv />
   </ThemeContextProvider.Provider>
    </div>
  )
}

export default Day6
