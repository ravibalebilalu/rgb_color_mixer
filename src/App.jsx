import { useState } from 'react'
import './App.css'
import Color from './components/Color'
import './components/color.css'

function App() {
   

  return (
    <>
      <h1 style={{textAlign:"center", color:"green"}}>RGB Color Mixer</h1>
      <Color/>
    </>
  )
}

export default App
