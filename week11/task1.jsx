function App() {
  const isLoggedIn = true
  return (
    <div>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please login</h2>}
    </div>
  )
}

export default App