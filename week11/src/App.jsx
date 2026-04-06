// Task 1

// function App() {
//   const isLoggedIn = true
//   return (
//     <div>
//       {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please login</h2>}
//     </div>
//   )
// }

// export default App

// Task 2

// function App() {
//   const students = ["Karthik", "Ravi", "Priya"]
//   return (
//     <ul>
//       {students.map((name, index) => (
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
//   )
// }

// export default App

// Task 3 

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Home() { return <h2>Home Page</h2> }
function About() { return <h2>About Page</h2> }
function Contact() { return <h2>Contact Page</h2> }

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App