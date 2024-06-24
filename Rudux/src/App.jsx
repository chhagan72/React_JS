import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counter/counterSlice'


function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <Navbar/>
      <div className="count">
        <button className='btn btn danger' onClick={() => dispatch(decrement())}>-</button>
        <p>Count: {count}</p>
        <button className='btn btn danger' onClick={() => dispatch(increment())}>+</button>
      </div>
      <Post/>
    </>
  )
}

export default App
