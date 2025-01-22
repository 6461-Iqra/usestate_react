import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className='con'>
      <h1>Counter</h1>
    <div>
      {}
      <h2>Counter: {count}</h2>
      {}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
    </div>
  );
}

export default Counter;
