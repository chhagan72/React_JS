import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Chhagan")
  const [form, setForm] = useState({email: "", phone: ""})
  const handleclick = () => {
    alert("Hey I am Clicked")
  }
  const handleMouseover = () => {
    alert('Hey I am a mouse over')
  }
  const handleonChange = (e) => {
    // setName(e.target.value)
    // alert("The value is changed")
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <>
      <div className="App">
        <button onClick={handleclick}>Submit</button>
      </div>
      <div className="ck">
        <button onMouseOver={handleMouseover}>Submit</button>
      </div>
      <div className="ck1">
        {/* <input type="text" value={name} onChange={handleonChange} /> */}
        <input type="text" name='email' value={form.email} onChange={handleonChange} />
        <input type="text" name='phone' value={form.phone} onChange={handleonChange} />
      </div>
    </>
  );
}

export default App;
