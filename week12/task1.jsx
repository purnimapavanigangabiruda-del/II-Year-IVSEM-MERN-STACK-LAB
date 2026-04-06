import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = "Count is " + count
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App