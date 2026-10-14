import React, { createContext, useContext } from 'react'

let userContext=createContext();
const App = () => {
    let msg="Hello React";
  return (
    <div>
    <userContext.Provider value={msg}>
        <Com1/>

    </userContext.Provider>
    </div>
  )
}

const Com1 = () => {
  return (
    <div>Comp1
        <Com2/>
    </div>
  )
}

const Com2 = () => {
  return (
    <div>Comp2
        <Com3/>
    </div>
  )
}

const Com3 = () => {
    let data=useContext(userContext);
  return (
    <div>Comp3
        <p>I got {data}</p>
    </div>
  )
}

export default App;



