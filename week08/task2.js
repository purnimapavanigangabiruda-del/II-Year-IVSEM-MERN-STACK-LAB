const express = require("express")
const bcrypt = require("bcryptjs")
const app = express()
app.use(express.json())

let users = []

app.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10)
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