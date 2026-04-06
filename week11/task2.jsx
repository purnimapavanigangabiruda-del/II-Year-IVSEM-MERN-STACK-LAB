function App() {
  const students = ["Karthik", "Ravi", "Priya"]
  return (
    <ul>
      {students.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  )
}

export default App