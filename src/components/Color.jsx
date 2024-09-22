import React, { useState } from 'react'
import './color.css'

const Color = () => {

    const [red,setRed]  = useState("00")
    const [green,setGreen]  = useState("00")
    const [blue,setBlue]  = useState("00")




  return (
    <div>

   <div className='text-display'>
   <p style={{color:"red"}}> RED <span style={{color:"#FFF"}}> : {red}</span></p>
    <p style={{color:"green"}}> GREEN <span style={{color:"#FFF"}}> : {green}</span></p>
    <p style={{color:"blue"}}>BLUE <span style={{color:"#FFF"}}> : {blue}</span></p>
   </div>

    <div>
        <form >
            <input type="range" 
            name='red' 
            min={0}
            max={255}
            value={red}
            onChange={(e)=>{setRed(e.target.value)}}
            />
        </form>

        <form >
            <input type="range" 
            name='green' 
            min={0}
            max={255}
            value={green}
            onChange={(e)=>{setGreen(e.target.value)}}
            />
        </form>

        <form >
            <input type="range" 
            name='blue' 
            min={0}
            max={255}
            value={blue}
            onChange={(e)=>{setBlue(e.target.value)}}
            />
        </form>
    </div>

    </div>
  )
}

export default Color