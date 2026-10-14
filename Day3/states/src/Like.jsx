import React from 'react'
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

const Like = () => {
    let[count,setcount]=useState(0);
    function increment(){
        setcount(count+1);
    }
    function decrement(){
        setcount(count-1);
    }
    function reload(){
        setcount(0);
    }
  return (
    <div>
        <button onclick={increment}>
            <IoIosAdd />     
        </button>
        <button onclick={decrement}>
            <FaMinus/>     
        </button>
        <button onclick={reload}>
            <IoReload />     
        </button>
        <h1>{count}</h1>

    </div>
  )
}

export default Like