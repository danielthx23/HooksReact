import { useState } from 'react'

function SimpleCounter() {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <h1>Contador: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Aumenta</button>
        <button onClick={() => setCounter(counter - 1)}>Diminui</button>
    </div>
  )
}

export default SimpleCounter