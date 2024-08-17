import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  // let Counter = 15;

  const addValue = () => {
  
    setCounter(counter + 1);
  }

  const removeValue = () => {

    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur react{ counter }</h1>
      <h2>Counter Value:{counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value{counter}</button>
    </>
  )
}

export default App
