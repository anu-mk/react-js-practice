import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { IoReload } from "react-icons/io5";


const test = () => {
   let [count,setCount]=useState(0);
   function increment(){
    setCount(count +1)
   }
   function decrement(){
    setCount(count -1)
}
   function reset(){
    setCount(0)
   }
  return (
    <div>
    {/* <div className="Demo"></div> */}
       <button onClick={increment} >
        <IOIosAdd/>
        </button>
        <button onClick={decrement} >
            <FaMinus/>
        </button>
        <button onClick={reset} >
            <IoReload/>
        </button>
<h1> {count}</h1>
    </div>
    
  )
}

export default test