import React, { useState } from 'react';
import AddPersonForm from './component/AddPersonForm'
import PeopleList from './component/PeopleList'
import './component/style.css';

function App() {
  const [contacts, setContacts] = useState(["James Smith", "Thomas Anderson", "Bruce Wayne"]);
  const [person, setPerson] = useState("");
  let parentIndex= null;
  const [count, setCount] = useState(null);

  function handleChange(e) {
    setCount(null)
    setPerson(e.target.value);

  }
  function handleSubmit(e) {
    e.preventDefault();
    
    if(person){
    setContacts([...contacts, person]);
    setCount(null)

    }
    else{
      alert("contact cannot be empty");
    }

    e.target.reset();
    
    // setPerson('');
   
  }
 

  const deleteFunc = (e)=>{
    let parentName = e.target.parentNode;
     parentIndex = parentName.getAttribute('value');
     setTimeout(() => {
       setCount(parentIndex)
     }, 200);
     
  }

  return (
    <div className="App">
      <h1>Contact Manager From Sololearn</h1>
      <AddPersonForm person={person} handleChange={handleChange} handleSubmit={handleSubmit} ></AddPersonForm>
      <PeopleList data={contacts} deleteFunc={deleteFunc} count={count}/>
    </div>
  );
}

export default App;
