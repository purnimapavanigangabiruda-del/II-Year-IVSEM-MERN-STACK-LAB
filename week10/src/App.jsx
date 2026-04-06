// Task 2

// function App() {
//   const name = "Karthik"
//   const age = 21
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <p>Age: {age}</p>
//     </div>
//   )
// }

// export default App

// Task 3

import { useState } from "react"

function Student(props) {
  return <p>Student: {props.name}</p>
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Student name="Karthik" />
      <Student name="Ravi" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  )
}

export default App