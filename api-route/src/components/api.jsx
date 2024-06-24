import React, {useState, useEffect } from 'react'

const Api = () => {
    const [count, setCount] = useState(()=>{
        const saveCount = localStorage.getItem('count')
        return saveCount !== null ? parseInt(saveCount, 10 ): 0;
    });

    useEffect(()=>{
        localStorage.setItem('count',count);
        console.log(count)
    })

  return (
    <>
        <h1>API</h1>
        <p>You clicked {count} Time</p>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
        <button onClick={()=> setCount(count - 1)}>Decrement</button>

    </>
  )
}

export default Api;