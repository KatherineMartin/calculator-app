import { useState } from 'react'
import calculateValue from './calculateValue'
import './App.css'

// This is limited to one calculation at a time
// C (Clear) is used to clear the input box
function App() {
  const [value, setValue] = useState('')
  const clear = () => setValue('')

  const handleClick = e => setValue(value.concat(e.target.id))
  const handleDelete = () => setValue(value.slice(0, -1))

  const equal = () => {
    try {
      setValue(calculateValue(value))
    } catch (error) {
      setValue('Please enter a value input')
    }
  }

  return (
    <>
      <h1>Calculator App</h1>

      <div className="calculator">
        <input className="input" type="text" value={value} disabled />

        <div className="buttons">

          <div className="buttonRow">
            <button id="7" onClick={handleClick}>
              7
            </button>
            <button id="8" onClick={handleClick}>
              8
            </button>
            <button id="9" onClick={handleClick}>
              9
            </button>
            <button onClick={handleDelete}>
              del
            </button>
          </div>

          <div className="buttonRow">
            <button id="4" onClick={handleClick}>
              4
            </button>
            <button id="5" onClick={handleClick}>
              5
            </button>
            <button id="6" onClick={handleClick}>
              6
            </button>
            <button  id="+" onClick={handleClick}>
              +
            </button>
          </div>

          <div className="buttonRow">
            <button id="1" onClick={handleClick}>
              1
            </button>
            <button id="2" onClick={handleClick}>
              2
            </button>
            <button id="3" onClick={handleClick}>
              3
            </button>
            <button  id="-" onClick={handleClick}>
              -
            </button>
          </div>

          <div className="buttonRow">
            <button id="." onClick={handleClick}>
              .
            </button>
            <button id="0" onClick={handleClick}>
              0
            </button>
            <button  id="/" onClick={handleClick}>
              /
            </button>
            <button id="*" onClick={handleClick}>
              x
            </button>
          </div>

          <div className="buttonRow">
            <button id="(" onClick={handleClick}>
              (
            </button>
            <button id=")" onClick={handleClick}>
              )
            </button>
            <button onClick={clear}>
              C
            </button>
            <button onClick={equal}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
