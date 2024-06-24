import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Ccounter from './components/Ccounter'



function App() {

  return (
    <>
      <Navbar/>
      {/* <Carousel/> */}
      <Ccounter/> 
    </>
  )
}

export default App
