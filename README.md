# MERN Stack — Full Lab Revision
### Aditya University — B.Tech AI & ML
### Repo: https://github.com/anjiduda77-afk/MERN-STACK-PRACTICE.git

> One place for all 12 weeks. Concepts + code. Read this before any lab exam.

---

## Index

| Week | Topic |
|------|-------|
| [Week 01](#week-01--html-basics) | Lists, Links, Images, Tables, Forms |
| [Week 02](#week-02--html5--css-fundamentals) | HTML5 Tags, Audio/Video, CSS Colors, Box Model |
| [Week 03](#week-03--css-selectors--javascript-intro) | CSS Selectors, Internal/External JS, Output Methods |
| [Week 04](#week-04--javascript-objects-conditionals-loops) | JS Objects, Conditionals, Loops |
| [Week 05](#week-05--javascript-functions--nodejs) | Functions, Node.js HTTP Server, File System |
| [Week 06](#week-06--typescript) | TypeScript Types, Function Signatures |
| [Week 07](#week-07--expressjs-routing--templating) | Express Routing, HTTP Methods, EJS |
| [Week 08](#week-08--expressjs-auth--mongodb) | Sessions, Auth, MongoDB CRUD |
| [Week 09](#week-09--expressjs-forms--sessions) | EJS Lists, Form Data, Session Flow |
| [Week 10](#week-10--react-basics) | React Render, JSX, Props, State |
| [Week 11](#week-11--react-lists-conditions--routing) | Conditional Render, Lists, React Router |
| [Week 12](#week-12--react-hooks--components) | Hooks, Shared State, To-Do App |
| [How to Run](#how-to-run) | Run commands for every file type |
| [MongoDB Setup](#mongodb-setup) | Local and Atlas setup |

---

## Week 01 — HTML Basics

**Files:** [week01/](https://github.com/karthik-ryali/mern-stack/tree/main/week01)
**Run:** Open `.html` directly in browser.

---

### Lists — task1.html

Three types of lists. They can be nested inside each other.

```html
<!-- Ordered list — numbered -->
<ol>
  <li>HTML</li>
  <li>CSS</li>
</ol>

<!-- Unordered list — bullets -->
<ul>
  <li>React</li>
  <li>Node</li>
</ul>

<!-- Nested — ol inside ul -->
<ul>
  <li>Frontend
    <ol>
      <li>HTML</li>
      <li>CSS</li>
    </ol>
  </li>
</ul>

<!-- Definition list — term + description -->
<dl>
  <dt>HTML</dt>
  <dd>Markup language</dd>
</dl>
```

---

### Links — task2.html

`<a>` tag creates links. `href` is the destination. `target="_blank"` opens in new tab.

```html
<!-- Text link -->
<a href="https://www.aec.edu.in/" target="_blank">Visit College</a>

<!-- Image as a link — wrap img inside a -->
<a href="https://www.aec.edu.in/?p=Gallery" target="_blank">
  <img src="college.jpg" width="200" height="100" alt="College">
</a>
```

---

### Images — task3.html

`<img>` embeds an image. Wrap in `<a>` to make it clickable.

```html
<a href="https://github.com/myprofile">
  <img src="p1.jpg" width="150" height="150" alt="My Photo">
</a>

<a href="https://github.com/friendprofile">
  <img src="p2.jpg" width="150" height="150" alt="Friend Photo">
</a>
```

---

### Tables — task4.html

`<table>` is the container. `<tr>` = row, `<th>` = header cell, `<td>` = data cell.
`colspan` spans columns, `rowspan` spans rows.

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th colspan="2">Marks</th>   <!-- spans 2 columns -->
  </tr>
  <tr>
    <td rowspan="2">Karthik</td>  <!-- spans 2 rows -->
    <td>Math</td>
    <td>90</td>
  </tr>
  <tr>
    <td>Science</td>
    <td>85</td>
  </tr>
</table>
```

---

### Forms — task5.html

`<form>` wraps inputs. `type` attribute changes what the input does.

```html
<form>
  <label>Name:     <input type="text"     name="name"></label><br>
  <label>Password: <input type="password" name="password"></label><br>
  <label>Age:      <input type="number"   name="age"></label><br>
  <label>DOB:      <input type="date"     name="dob"></label><br>
  <input type="submit" value="Register">
</form>
```

---

## Week 02 — HTML5 & CSS Fundamentals

**Files:** [week02/](https://github.com/karthik-ryali/mern-stack/tree/main/week02)
**Run:** Open `.html` directly in browser.

---

### HTML5 Semantic Tags — task1.html

Semantic tags describe the purpose of content. Search engines and screen readers understand them.

```html
<header><h1>My Website</h1></header>

<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>

<main>
  <section>
    <article>
      <h2>Article Title</h2>
      <p>Content here</p>
    </article>
    <aside>Related info</aside>
  </section>

  <figure>
    <img src="photo.png" width="200" alt="photo">
    <figcaption>Caption here</figcaption>
  </figure>

  <div>
    <span>Inline text inside block</span>
  </div>
</main>

<footer><p>Footer content</p></footer>
```

> `div` = generic block container. `span` = generic inline container. Use semantic tags when possible.

---

### Audio and Video — task2.html

Both use `controls` attribute to show play/pause buttons. `<source>` specifies the file.

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>

<video width="400" controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

---

### CSS Colors — task3.html

Five ways to write a color in CSS:

```html
<style>
  .named  { color: red; }
  .hex    { color: #ff6600; }         /* R G B in base-16 */
  .rgb    { color: rgb(0, 128, 255); }
  .rgba   { color: rgba(0, 128, 0, 0.5); } /* 4th value = opacity 0-1 */
  .hsl    { color: hsl(240, 100%, 50%); }  /* hue, saturation, lightness */
</style>
```

---

### CSS Box Model — task4.html

Every element is a box. From inside out: **content → padding → border → margin**

```html
<style>
  .box {
    width: 200px;           /* content area */
    padding: 20px;          /* space inside, between content and border */
    border: 5px solid black;
    margin: 30px;           /* space outside, between this and other elements */
    background-color: lightblue;
  }
</style>

<div class="box">Box Model Demo</div>
```

---

## Week 03 — CSS Selectors & JavaScript Intro

**Files:** [week03/](https://github.com/karthik-ryali/mern-stack/tree/main/week03)
**Run:** Open `.html` in browser. `task3.html` loads `task3.js` externally.

---

### CSS Selectors — task1.html

```html
<style>
  p           { color: blue; }       /* element — all <p> tags */
  #main       { font-size: 20px; }   /* id — only element with id="main" */
  .highlight  { background: yellow; }/* class — all with class="highlight" */
  h1, h2      { color: green; }      /* group — applies to both */
  *           { font-family: Arial; }/* universal — every element */

  div p       { color: red; }        /* descendant — <p> anywhere inside <div> */
  div > p     { font-weight: bold; } /* child — <p> direct child of <div> only */
  h1 + p      { color: orange; }     /* adjacent sibling — <p> right after <h1> */
  h1 ~ p      { color: purple; }     /* general sibling — all <p> after <h1> */
</style>
```

---

### Internal JavaScript — task2.html

JS written inside `<script>` tag in the HTML file itself.

```html
<head>
  <script>
    function greet() {
      alert("Hello from internal JS!")
    }
  </script>
</head>
<body>
  <button onclick="greet()">Click Me</button>
</body>
```

---

### External JavaScript — task3.html + task3.js

JS in a separate file, linked with `src`. Keeps HTML clean. File can be reused.

```js
// task3.js
function greet() {
  alert("Hello from external JS!")
}
```
```html
<!-- task3.html -->
<head>
  <script src="task3.js"></script>
</head>
<body>
  <button onclick="greet()">Click Me</button>
</body>
```

---

### Output Methods — task4.html

```html
<body>
  <p id="demo"></p>
  <script>
    console.log("Prints in browser console — for debugging")
    alert("Pops up a dialog box")
    document.write("Writes into the HTML document")
    document.getElementById("demo").innerHTML = "Sets content of an element"
  </script>
</body>
```

---

## Week 04 — JavaScript Objects, Conditionals, Loops

**Files:** [week04/](https://github.com/karthik-ryali/mern-stack/tree/main/week04)
**Run:** Open `.html` in browser.

---

### Built-in Objects — task1.html

```html
<script>
  // window — the browser tab itself
  console.log(window.innerWidth)   // viewport width in pixels

  // document — the HTML page
  console.log(document.title)      // page title

  // Math — math utility, no need to create it
  console.log(Math.max(10, 20))    // 20
  console.log(Math.sqrt(16))       // 4
  console.log(Math.PI)             // 3.14159...

  // String methods — called on any string variable
  let str = "hello world"
  console.log(str.toUpperCase())   // HELLO WORLD
  console.log(str.length)          // 11
  console.log(str.includes("world")) // true
</script>
```

---

### Largest of Three — task2.html

`prompt()` gets input from user as a string. `parseInt()` converts it to a number.

```html
<script>
  let a = parseInt(prompt("Enter first number"))
  let b = parseInt(prompt("Enter second number"))
  let c = parseInt(prompt("Enter third number"))

  if (a === b && b === c) {
    document.write("<p>EQUAL NUMBERS</p>")
  } else if (a >= b && a >= c) {
    document.write("<p>" + a + " LARGER NUMBER</p>")
  } else if (b >= a && b >= c) {
    document.write("<p>" + b + " LARGER NUMBER</p>")
  } else {
    document.write("<p>" + c + " LARGER NUMBER</p>")
  }
</script>
```

---

### Loops — task3.html

```html
<script>
  // for — when you know the count
  for (let i = 1; i <= 10; i++) {
    document.write(i + " ")
  }

  // while — checks condition before running
  let i = 1
  while (i <= 10) {
    document.write(i + " ")
    i++
  }

  // do-while — runs at least once, checks condition after
  let j = 1
  do {
    document.write(j + " ")
    j++
  } while (j <= 10)
</script>
```

---

## Week 05 — JavaScript Functions & Node.js

**Files:** [week05/](https://github.com/karthik-ryali/mern-stack/tree/main/week05)
**Run:** `task1.html` → browser. Others → `node filename.js`

---

### Functions — task1.html

Recursive function calls itself with a smaller input until it hits the base case.

```html
<script>
  let n = parseInt(prompt("Enter a number"))

  // Recursive — factorial: 5! = 5 × 4 × 3 × 2 × 1
  function factorial(n) {
    if (n === 0) return 1          // base case
    return n * factorial(n - 1)   // recursive call
  }

  // Iterative — fibonacci: 0 1 1 2 3 5 8...
  function fibonacci(n) {
    let a = 0, b = 1
    document.write("Fibonacci: ")
    for (let i = 0; i < n; i++) {
      document.write(a + " ")
      let temp = a + b
      a = b
      b = temp
    }
  }

  document.write("<p>Factorial of " + n + " = " + factorial(n) + "</p>")
  fibonacci(n)
</script>
```

---

### Node.js HTTP Server — task2.js

`http.createServer()` listens for requests and sends responses.

```js
const http = require("http")

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js server")
})

server.listen(3000, () => {
  console.log("Server running on port 3000")
})
```

---

### HTTP Data Transfer — task3.js

`res.write()` sends data in chunks. `res.end()` finishes the response.

```js
const http = require("http")

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.write("Name: Karthik\n")
  res.write("College: Aditya University\n")
  res.end()
})

server.listen(3000, () => {
  console.log("Server running on port 3000")
})
```

---

### File System — task4.js

`fs.readFile()` reads a file asynchronously — doesn't block the program.

```js
const fs = require("fs")

// src.txt contains: HTML, CSS, Javascript, Typescript, MongoDB, Express js, React js, Node.js
fs.readFile("src.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file")
    return
  }
  console.log("File contents:", data)
})
```

---

## Week 06 — TypeScript

**Files:** [week06/](https://github.com/karthik-ryali/mern-stack/tree/main/week06)
**Run:** `npx tsc filename.ts` → `node filename.js`

TypeScript = JavaScript + type annotations. Catches type errors before runtime. Compiles to plain JS.

---

### Types — task1.ts

```ts
let name: string = "Karthik"
let age: number = 21
let isStudent: boolean = true
let score: null = null
let data: undefined = undefined
let anything: any = "any type works here"   // disables type checking

// union type — can be string OR number
let mixed: string | number = "hello"
mixed = 42   // also valid

console.log(name, age, isStudent)

export {}   // needed to treat file as a module
```

---

### Function Types — task2.ts

```ts
// parameter types and return type
function add(a: number, b: number): number {
  return a + b
}

function greet(name: string): string {
  return "Hello " + name
}

// void = function returns nothing
function printMessage(msg: string): void {
  console.log(msg)
}

console.log(add(10, 20))       // 30
console.log(greet("Karthik"))  // Hello Karthik
printMessage("TypeScript!")
```

---

## Week 07 — Express.js Routing & Templating

**Files:** [week07/](https://github.com/karthik-ryali/mern-stack/tree/main/week07)
**Run:** `node filename.js` → `http://localhost:3000`

Express is a Node.js web framework. Simplifies routing and middleware compared to raw `http` module.

---

### Routes, Params, Query — task1.js

```js
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.get("/about", (req, res) => {
  res.send("About Page")
})

// route parameter — :id captures value from URL
// visit: /user/42  →  req.params.id = "42"
app.get("/user/:id", (req, res) => {
  res.send("User ID is " + req.params.id)
})

// query parameter — ?q=value
// visit: /search?q=hello  →  req.query.q = "hello"
app.get("/search", (req, res) => {
  res.send("Search query: " + req.query.q)
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
```

---

### HTTP Methods — task2.js

`express.json()` middleware parses JSON request body into `req.body`.

```js
const express = require("express")
const app = express()
app.use(express.json())   // must add this to read req.body

let students = [
  { id: 1, name: "Karthik" },
  { id: 2, name: "Ravi" }
]

app.get("/students", (req, res) => {
  res.json(students)
})

app.post("/students", (req, res) => {
  students.push(req.body)
  res.send("Student added")
})

app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id)
  res.send("Student deleted")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
```

---

### EJS Templating — task3.js

EJS renders HTML with dynamic data. `<%= %>` outputs a value. `<% %>` runs code.

```js
// task3.js
const express = require("express")
const app = express()
app.set("view engine", "ejs")   // tell express to use EJS

app.get("/", (req, res) => {
  res.render("index", { name: "Karthik", college: "Aditya University" })
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
```

```html
<!-- views/index.ejs -->
<!DOCTYPE html>
<html>
<body>
  <h1>Hello <%= name %></h1>
  <p>Welcome to <%= college %></p>
</body>
</html>
```

---

## Week 08 — Express.js Auth & MongoDB

**Files:** [week08/](https://github.com/karthik-ryali/mern-stack/tree/main/week08)
**Run:** MongoDB running → `node filename.js` → test with Thunder Client / Postman

---

### Sessions — task1.js

HTTP is stateless. Sessions store user data on the server between requests.

```js
const express = require("express")
const session = require("express-session")
const app = express()

app.use(session({
  secret: "mySecret",       // used to sign the session ID cookie
  resave: false,
  saveUninitialized: true
}))

app.get("/login", (req, res) => {
  req.session.user = "Karthik"   // store in session
  res.send("Logged in")
})

app.get("/profile", (req, res) => {
  if (req.session.user) {
    res.send("Welcome " + req.session.user)
  } else {
    res.send("Please login first")
  }
})

app.get("/logout", (req, res) => {
  req.session.destroy()   // clear session
  res.send("Logged out")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
```

---

### Authentication — task2.js

Never store plain text passwords. `bcrypt.hash()` creates a one-way hash. `bcrypt.compare()` verifies it.

```js
const express = require("express")
const bcrypt = require("bcryptjs")
const app = express()
app.use(express.json())

let users = []

app.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10)  // 10 = salt rounds
  users.push({ username: req.body.username, password: hashed })
  res.send("User registered")
})

app.post("/login", async (req, res) => {
  const user = users.find(u => u.username === req.body.username)
  if (!user) return res.send("User not found")

  const match = await bcrypt.compare(req.body.password, user.password)
  if (match) res.send("Login successful")
  else res.send("Wrong password")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
```

---

### MongoDB CRUD with Mongoose — task3.js

MongoDB stores data as JSON-like documents. Mongoose adds schemas and models on top.

```js
const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

// connect to MongoDB (local or Atlas — only this line changes)
mongoose.connect("mongodb://localhost:27017/studentdb")

// schema defines the shape of documents
// model is the interface to the collection
const Student = mongoose.model("Student", {
  name: String,
  age: Number
})

// CREATE
app.post("/students", async (req, res) => {
  const student = new Student(req.body)
  await student.save()
  res.send("Student saved")
})

// READ
app.get("/students", async (req, res) => {
  const students = await Student.find()
  res.json(students)
})

// UPDATE
app.put("/students/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body)
  res.send("Student updated")
})

// DELETE
app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id)
  res.send("Student deleted")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
```

---

## Week 09 — Express.js Forms & Sessions

**Files:** [week09/](https://github.com/karthik-ryali/mern-stack/tree/main/week09)
**Run:** `node filename.js` → `http://localhost:3000`

---

### EJS with a List — task1.js

```js
const express = require("express")
const app = express()
app.set("view engine", "ejs")

app.get("/students", (req, res) => {
  const students = [
    { name: "Karthik", age: 21 },
    { name: "Ravi", age: 22 }
  ]
  res.render("students", { students })
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
```

```html
<!-- views/students.ejs -->
<ul>
  <% students.forEach(s => { %>       <!-- <% %> runs JS, no output -->
    <li><%= s.name %> — Age: <%= s.age %></li>  <!-- <%= %> outputs value -->
  <% }) %>
</ul>
```

---

### Form Data — task2.js

`express.urlencoded` parses form POST body. Field values come from `req.body.fieldname`.

```js
const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))  // parses HTML form POST data
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("form")
})

app.post("/submit", (req, res) => {
  res.send("Form submitted by " + req.body.name)  // req.body.name matches input name="name"
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
```

```html
<!-- views/form.ejs -->
<form action="/submit" method="POST">
  <input type="text" name="name" placeholder="Enter name">
  <input type="submit" value="Submit">
</form>
```

---

### Sessions — task3.js

Same concept as Week 08 task1. See [Week 08 Sessions](#sessions--task1js).

---

## Week 10 — React Basics

**Files:** [week10/](https://github.com/karthik-ryali/mern-stack/tree/main/week10)
**Run:** `cd week10` → `npm run dev` → `http://localhost:5173`
**Edit:** Paste code into `src/App.jsx`, save, browser auto-updates.

---

### Render HTML — task1.jsx

React attaches to a real DOM element. `createRoot` + `render` is the entry point.

```jsx
import React from "react"
import ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById("root")).render(
  <h1>Hello from React</h1>
)
```

---

### JSX — task2.jsx

JSX = HTML-like syntax inside JS. Use `{}` to embed JS expressions. Use `className` not `class`.

```jsx
function App() {
  const name = "Karthik"
  const age = 21
  return (
    <div>
      <h1>Name: {name}</h1>        {/* {} embeds JS expression */}
      <p>Age: {age}</p>
      <p>Year: {2024 + 1}</p>      {/* any JS expression works */}
    </div>
  )
}

export default App
```

---

### Props and State — task3.jsx

Props = data passed from parent to child (read-only). State = data that belongs to a component and can change.

```jsx
import { useState } from "react"

// Component receives props from parent
function Student(props) {
  return <p>Student: {props.name}</p>
}

function App() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0)

  return (
    <div>
      <Student name="Karthik" />          {/* passing props */}
      <Student name="Ravi" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      {/* setCount triggers re-render with new value */}
    </div>
  )
}

export default App
```

---

## Week 11 — React Lists, Conditions & Routing

**Files:** [week11/](https://github.com/karthik-ryali/mern-stack/tree/main/week11)
**Run:** `cd week11` → `npm run dev` → `http://localhost:5173`

---

### Conditional Rendering — task1.jsx

Use ternary operator or `&&` to conditionally show JSX.

```jsx
function App() {
  const isLoggedIn = true

  return (
    <div>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please login</h2>}
      {/* ternary: condition ? show_if_true : show_if_false */}

      {isLoggedIn && <p>You have 3 new messages</p>}
      {/* && : only renders if condition is true */}
    </div>
  )
}

export default App
```

---

### Rendering Lists — task2.jsx

`.map()` transforms array items into JSX. Each needs a unique `key` prop so React can track changes.

```jsx
function App() {
  const students = ["Karthik", "Ravi", "Priya"]

  return (
    <ul>
      {students.map((name, index) => (
        <li key={index}>{name}</li>
        // key helps React know which item changed/was removed
      ))}
    </ul>
  )
}

export default App
```

---

### React Router — task3.jsx

Client-side routing — URL changes without full page reload. Install: `npm install react-router-dom`

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Home()    { return <h2>Home Page</h2> }
function About()   { return <h2>About Page</h2> }
function Contact() { return <h2>Contact Page</h2> }

function App() {
  return (
    <BrowserRouter>           {/* wraps everything */}
      <nav>
        <Link to="/">Home</Link> |       {/* Link instead of <a> — no page reload */}
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>                {/* container for all routes */}
        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

---

## Week 12 — React Hooks & Components

**Files:** [week12/](https://github.com/karthik-ryali/mern-stack/tree/main/week12)
**Run:** `cd week12` → `npm run dev` → `http://localhost:5173`

---

### useState + useEffect — task1.jsx

`useEffect` runs side effects. Dependency array controls when it runs.

```jsx
import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = "Count is " + count
    // runs after every render where `count` changed
  }, [count])                // dependency array — re-runs when count changes
  // [] empty = run once on mount only
  // no array = run after every render

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App
```

---

### Sharing State — task2.jsx

State lives in parent. Passed down as props. Child triggers update via callback.

```jsx
import { useState } from "react"

// child receives value and callback as props
function Child({ count, onIncrement }) {
  return (
    <div>
      <p>Count from parent: {count}</p>
      <button onClick={onIncrement}>Increment from Child</button>
      {/* clicking calls the function defined in parent */}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Parent Count: {count}</h2>
      <Child count={count} onIncrement={() => setCount(count + 1)} />
      {/* pass state value + setter as props */}
    </div>
  )
}

export default App
```

---

### To-Do List — task3.jsx

Array in state. Add with spread. Remove with filter. Never mutate state directly.

```jsx
import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  function addTodo() {
    if (input.trim() === "") return
    setTodos([...todos, input])   // spread existing + add new — never push() directly
    setInput("")
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index))  // returns new array without that index
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        value={input}                          // controlled input — React owns the value
        onChange={e => setInput(e.target.value)}  // update state on every keystroke
        placeholder="Add task"
      />
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
```

---

## How to Run

| File Type | Command |
|-----------|---------|
| `.html` | Open directly in browser |
| `.js` (Node/Express) | `node filename.js` |
| `.ts` | `npx tsc filename.ts` → `node filename.js` |
| React (week10–12) | `cd weekXX` → `npm run dev` → `http://localhost:5173` |

**Test Express endpoints (week07–09) with Thunder Client** (VS Code extension) or Postman.

---

## MongoDB Setup

### Local
```
1. Download: mongodb.com/try/download/community → Windows MSI → Install
2. Runs as Windows background service automatically
3. Verify: open terminal → mongosh → you see a > prompt = working
4. Connection string in code: mongodb://localhost:27017/studentdb
```

### Atlas (Cloud)
```
1. mongodb.com/atlas → free account
2. Create cluster → M0 Free tier
3. Database Access → Add user (username + password)
4. Network Access → Add IP: 0.0.0.0/0
5. Connect → Drivers → copy the connection string
6. Connection string looks like:
   mongodb+srv://karthik:yourpass@cluster0.xxxxx.mongodb.net/studentdb
```

Only this one line changes in your code:
```js
// local
mongoose.connect("mongodb://localhost:27017/studentdb")

// atlas
mongoose.connect("mongodb+srv://karthik:yourpass@cluster0.xxxxx.mongodb.net/studentdb")
```

Everything else in the code stays exactly the same.

---

*Aditya University — B.Tech AI & ML — MERN Stack Lab*"# MP" 
