import React, {useState} from 'react'

const UseState = () => {
    const [name, setName] = useState("Chhagan Kumawat");
    const [age, setAge ]= useState(24);
  return (
    <div>
        <h1>This is a useState</h1>

        <p>My name is : <span onChange={(e)=> setName(e.target.value)}>{name}</span></p>
        <p>My age is : <span onChange={(e)=> setAge(e.target.value)}>{age}</span></p>
    </div>
  )
}

export default UseState