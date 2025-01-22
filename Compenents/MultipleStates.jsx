import { useState } from 'react';

function MultipleStates() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  function handleNameChange(e) {
    setName(e.target.value); 
  }

  function handleAgeChange(e) {
    setAge(e.target.value); 
  }

  return (
    <div className='con'>
      <h1>Multiple States</h1>
    <div>
      {}
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <input
        type="number"
        value={age}
        onChange={handleAgeChange}
        placeholder="Enter your age"
      />
      {}
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
    </div>
  );
}

export default MultipleStates;