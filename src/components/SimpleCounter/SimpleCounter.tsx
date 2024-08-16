import { useState } from 'react'
import './SimpleCounter.css'

function SimpleCounter() {
    const [counter, setCounter] = useState(0)
  return (
    <div className='contador-container'>
      <div className='contador'>
        <button className="botao-contador botao-mais" onClick={() => setCounter(counter + 1)}>+</button>
        <h1>{counter}</h1>
        <button className="botao-contador botao-menos" onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </div>
  )
}

export default SimpleCounter