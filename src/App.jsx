import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Crew from './components/Crew'
import Destination from './components/Destination'
import Home from './components/Home'
import Technology from './components/Technology'

function App() {


  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Destination' element={<Destination />} />
        <Route path='/Crew' element={<Crew />} />
        <Route path='/Technology' element={<Technology />} />
      </Routes>
      
    </div>
  )
}

export default App
