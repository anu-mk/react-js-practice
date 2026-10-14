import React from 'react'
import Anu from './Anu'
const App = () => {
  let marker="Camlin"
  return (
    <div>I am App passing marker
      <Anu M={marker} />
    </div>
  )
}

export default App