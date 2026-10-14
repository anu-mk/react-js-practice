import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Api from './components/Api'
import Counter from './components/Counter'
let router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/api",
        element:<Api/>
      },
      {
        path:"/counter",
        element:<Counter/>
      }
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>

  )
}

export default App;