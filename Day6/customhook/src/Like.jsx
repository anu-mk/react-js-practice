import React from 'react'
import UseCounter from './UseCounter'
import './Like.css'

const Like = () => {
    let [count,increment,decrement,reset]=UseCounter();
  return (
    <div>
        <h1>Like App</h1>
        <h1>{count}</h1>
        <button className='btn2'onClick={increment}>+</button>
        <button className='btn2'onClick={decrement}>-</button>
        <button className='btn2'onClick={reset}>reset</button>


    </div>
  )
}

export default Like