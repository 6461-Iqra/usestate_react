import { useState } from 'react';
import './style.css'

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    setIsToggled(!isToggled); 
  }

  return (
    <div>
          <div className='con'>
      <h1>Toggle Button</h1>
      {}
      <button onClick={handleToggle}>
        {isToggled ? 'ON' : 'OFF'}
      </button>
    </div>
    </div>
  );
}

export default ToggleButton;