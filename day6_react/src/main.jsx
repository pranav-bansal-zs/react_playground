import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from './ThemeContextProvide.jsx'
import Self_useState from './Self_useState.jsx';
const color=['#FF0000', '#008000', '#0000FF', '#000000', '#800080', '#FFC0CB'];
const [getIsOpen, setIsOpen] = Self_useState(true);

createRoot(document.getElementById('root')).render(
  <>
  <div className='checking_the_usestate'>
  <h1>Initial value:{getIsOpen() ? "Open" : "Closed"}</h1>
        {setIsOpen(false)}
       <h2>after update :{getIsOpen() ? "Open" : "Closed"}</h2>
  </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:'center',height:"100vh",backgroundColor:"lightblue"}}>
      <h1>Front Page</h1>
    </div>
    <ThemeContextProvider.Provider value={color}>
    <App />
    </ThemeContextProvider.Provider>
    </>
)
