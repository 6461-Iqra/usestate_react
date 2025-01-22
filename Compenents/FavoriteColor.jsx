import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
        <div className='con'>
<h1>My Favorite Color</h1>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button" onClick={() => setColor("Purple")}>Purple</button>
        </div>
    </>
  )
}

export default FavoriteColor