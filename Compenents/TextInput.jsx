import { useState } from 'react';

function TextInput() {
  const [inputText, setInputText] = useState('');

  function handleChange(e) {
    setInputText(e.target.value);
  }

  return (
    <div className='con'>
      <div className='textin'>
      <h1>Text Input</h1> 
      <input type="text" value={inputText} onChange={handleChange} style={{width:'150px'}}/>
      {}
      <h2>{inputText}</h2>
    </div>
    </div>
  );
}

export default TextInput;