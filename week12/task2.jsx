import { useState } from "react"

function Child({ count, onIncrement }) {
  return (
    <div>
      <p>Count from parent: {count}</p>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Parent Count: {count}</h2>
      <Child count={count} onIncrement={() => setCount(count + 1)} />
    </div>
  )
}

export default App