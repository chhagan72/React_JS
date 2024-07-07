import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
      alert("Welcome to my React js application ...")
    },[])

    // useEffect(() =>{
    //   const interval =setInterval(()=>{
    //     setCount(count => count + 1);
    //     alert("The Count was changed.......")
    //   }, 3000)
    //   return()=>{
    //     clearInterval(interval)
    //   }
    // },[])

  return (
    <div>
      <h1>UseEffect</h1>
      <p>Count: {count}</p>
    </div>
  )
}

export default UseEffect