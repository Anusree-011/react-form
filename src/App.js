import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[nameInput, setNameInput] = useState("")
  const[name, setName] = useState("anusree");
  const[age, setAge] = useState(34);
  const[place, setPlace] = useState("Attenganam")

  return (
    <div>
      Name:
      <input type="text" value={nameInput} onChange={ (e)=>setNameInput(e.target.value)}></input><br/>
      <button onClick={ () => setName(nameInput)}>Save</button>
      <p>My name is {name}</p>
      
    </div>
  );
}

export default App;
