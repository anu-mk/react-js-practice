import React, { useState } from "react";

function UseCounter() {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return [count,increment,decrement,reset]
}

export default UseCounter;
