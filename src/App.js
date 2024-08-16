import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[nameInput, setNameInput] = useState("")
  const[placeInput,setPlaceInput]=useState("")
  const[ageInput,setAgeInput]=useState("")

  const[name, setName] = useState("");
  const[age, setAge] = useState();
  const[place, setPlace] = useState("");
  function saveData(){
    setName(nameInput);
    setPlace(placeInput);
    setAge(ageInput)
  }
  function resetData(){
    setName("");
    setAge();
    setPlace("");
    setNameInput("");
    setPlaceInput("");
    setAgeInput("");
  }

  return (
    <div>
      Name:
      <input type="text" value={nameInput} onChange={ (e)=>setNameInput(e.target.value)}></input><br/>
      place:
      <input type="text"value={placeInput} onChange={(e)=> setPlaceInput(e.target.value)}></input><br/>
      age:
      <input type="text"value={ageInput} onChange={(e)=> setAgeInput(e.target.value)}></input><br/>
      <button onClick={saveData}>Save</button>
      <button onClick={resetData}>RESET</button>
      <p>My name is {name}</p>
      <p>I am coming from {place}</p>
      <p>i am {age} old</p>
      
    </div>
  );
}

export default App;
