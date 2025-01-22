import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TextInput from '../Compenents/TextInput.jsx'
import ToggleButton from '../Compenents/ToggleButton.jsx'
import Counter from '../Compenents/Counter.jsx'
import MultipleStates from '../Compenents/MultipleStates.jsx'
import FavoriteColor from '../Compenents/FavoriteColor.jsx'
import TodoList from '../Compenents/TodoList.jsx'

createRoot(document.getElementById('root')).render(
  <div className='grid_con'>
  <TextInput/>
  <ToggleButton/>
  <Counter/>
  <MultipleStates/>
  <FavoriteColor/>
  <TodoList/>
  </div>
)
