const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.get("/about", (req, res) => {
  res.send("About Page")
})

// Route parameter
app.get("/user/:id", (req, res) => {
  res.send("User ID is " + req.params.id)
})

// Query parameter
app.get("/search", (req, res) => {
  res.send("Search query: " + req.query.q)
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})