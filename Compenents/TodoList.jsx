import React, { useState } from 'react';

function TodoList() {
  // Declare state variables
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); // Clear the input field
    }
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
        <div className='con'>

      <h1>Todo List</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>  
  );
}

export default TodoList;
