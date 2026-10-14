import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

const Counter = () => {
  let [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reload() {
    setCount(0);
  }
  return (
    <div>
      <div className="main">
      <button className='Add'onClick={increment}>
        <IoIosAdd />
      </button>
      <button className='Minus' onClick={decrement}>
        <FaMinus />
      </button>
      <button className='Reload' onClick={reload}>
        <IoReload />
      </button>
      <h1>{count}</h1>
      </div>
    </div>
  );
};

export default Counter;
