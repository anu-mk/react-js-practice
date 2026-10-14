import React from 'react'
import UseCounter from './UseCounter'
import './Counter.css'



const Counter = () => {
    let[count,increment,decrement,reset]=UseCounter();
  return (
    <div>
        <link rel="stylesheet" href="./Counter.css" />
        <h1>counter App</h1>
        <h1>{count}</h1>
        <button className='btn1' onClick={increment}>+</button>
         <button className='btn1'onClick={decrement}>-</button>
          <button className='btn1'onClick={reset}>reset</button>
    </div>
  )
}

export default Counter;