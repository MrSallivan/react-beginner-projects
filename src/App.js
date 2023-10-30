import './index.scss';
import React, { useState } from "react"

function App() {
  const [count, setCounter] = useState(0)

	const increement = () => {
		setCounter(count + 1)
	}
	const dicreement = () => {
    setCounter(count - 1)
  }
	
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={dicreement} className="minus">
          - Минус
        </button>
        <button onClick={increement} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  )
}

export default App;
