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