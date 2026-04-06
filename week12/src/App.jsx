// Task 1

// import { useState, useEffect } from "react"

// function App() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     document.title = "Count is " + count
//   }, [count])

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }

// export default App

// Task 2

// import { useState } from "react"

// function Child({ count, onIncrement }) {
//   return (
//     <div>
//       <p>Count from parent: {count}</p>
//       <button onClick={onIncrement}>Increment from Child</button>
//     </div>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <h2>Parent Count: {count}</h2>
//       <Child count={count} onIncrement={() => setCount(count + 1)} />
//     </div>
//   )
// }

// export default App

// Task 3

import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  function addTodo() {
    if (input.trim() === "") return
    setTodos([...todos, input])
    setInput("")
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add task" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo} <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App