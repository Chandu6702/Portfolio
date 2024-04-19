import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import './index.css'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='' element={<App/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path='contact' element={<Contact/>}></Route>
  </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
