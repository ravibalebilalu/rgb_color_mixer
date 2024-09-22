import React, { useState,useEffect } from 'react'
import './color.css'

const Color = () => {

    const [red,setRed]  = useState("0")
    const [green,setGreen]  = useState("0")
    const [blue,setBlue]  = useState("0")
    const [decimal,setDecimal] = useState("rgb(0,0,0)")
    const [hexaDicimal,setHexaDecimal] = useState("#000000")


 const decimalMixer = ()=>{
    return `rgb(${red} ,${green},${blue})`
 }
 const hexMixer = ()=>{
    return `#${parseInt(red).toString(16).padStart(2,'0')}${parseInt(green).toString(16).padStart(2,'0')}${parseInt(blue).toString(16).padStart(2,'0')}`
 }
 
 useEffect(() => {
     setDecimal(decimalMixer())
     setHexaDecimal(hexMixer())
      
     
    
 
   
 }, [red,green,blue])
 

  return (
    <div className='container'>

  
    <div className='input-form'>
        <form >
        
            <input type="range" 
            name='red' 
            min={0}
            max={255}
            value={red}
            onChange={(e)=>{
                setRed(e.target.value)}}
                list='cvalues'
            />
            <datalist id='cvalues'>
                <option value="0" label="0">00</option>
                <option value="32" label="32">32</option>
                <option value="64" label="64">64</option>
                <option value="96" label="96">96</option>
                <option value="128" label="128">128</option>
                <option value="160" label="160">160</option>
                <option value="192" label="192">192</option>
                <option value="224" label="224">224</option>
                <option value="255" label="255">255</option>
            </datalist>
            <div className="range-labels">
                 <p>0</p>
                 <p>32</p>
                 <p>64</p>
                 <p>96</p>
                 <p>128</p>
                 <p>160</p>
                 <p>192</p>
                 <p>224</p>
                 <p>255</p>
            </div>
        </form>

        <form >
            <input type="range" 
            name='green' 
            min={0}
            max={255}
            value={green}
            onChange={(e)=>{setGreen(e.target.value)}}
            list='cvalues'
            />

<datalist id='cvalues'>
                <option value="0" label="0">00</option>
                <option value="32" label="32">32</option>
                <option value="64" label="64">64</option>
                <option value="96" label="96">96</option>
                <option value="128" label="128">128</option>
                <option value="160" label="160">160</option>
                <option value="192" label="192">192</option>
                <option value="224" label="224">224</option>
                <option value="255" label="255">255</option>
            </datalist>
            <div className="range-labels">
                 <p>0</p>
                 <p>32</p>
                 <p>64</p>
                 <p>96</p>
                 <p>128</p>
                 <p>160</p>
                 <p>192</p>
                 <p>224</p>
                 <p>255</p>
            </div>
        </form>

        <form >
            <input type="range" 
            name='blue' 
            min={0}
            max={255}
            value={blue}
            onChange={(e)=>{setBlue(e.target.value)}}
            list='cvalues'
            />
             <datalist id='cvalues'>
                <option value="0" label="0">00</option>
                <option value="32" label="32">32</option>
                <option value="64" label="64">64</option>
                <option value="96" label="96">96</option>
                <option value="128" label="128">128</option>
                <option value="160" label="160">160</option>
                <option value="192" label="192">192</option>
                <option value="224" label="224">224</option>
                <option value="255" label="255">255</option>
            </datalist>
            <div className="range-labels">
                 <p>0</p>
                 <p>32</p>
                 <p>64</p>
                 <p>96</p>
                 <p>128</p>
                 <p>160</p>
                 <p>192</p>
                 <p>224</p>
                 <p>255</p>
            </div>
        </form>
    </div>
    <div className="display" style={ {background:decimal }}>
        <div className='text-display'>
            <div className="dec">
                <p>RGB Decimal :  {decimal}</p>
                <button>Copy</button>
            </div>
            <div className="hex">
                <p>RGB Hexadicimal :{hexaDicimal} </p>
                <button>Copy</button>
            </div>
        </div>

 </div>
</div>
  )
}

export default Color