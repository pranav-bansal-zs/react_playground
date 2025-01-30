import React from 'react'
import Parent from './Parent'
import { ThemeProvider } from './ThemeContext'
const Day15 = () => {
  return (
    <div>
        <ThemeProvider>
    <Parent/>
    </ThemeProvider>
    </div>
  )
}

export default Day15
