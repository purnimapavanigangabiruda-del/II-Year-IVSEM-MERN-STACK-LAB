const express = require("express")
const session = require("express-session")
const app = express()

app.use(session({
  secret: "mySecret",
  resave: false,
  saveUninitialized: true
}))

app.get("/login", (req, res) => {
  req.session.user = "Karthik"
  res.send("Logged in, session saved")
})

app.get("/profile", (req, res) => {
  if (req.session.user) {
    res.send("Welcome " + req.session.user)
  } else {
    res.send("Please login first")
  }
})

app.get("/logout", (req, res) => {
  req.session.destroy()
  res.send("Logged out")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})