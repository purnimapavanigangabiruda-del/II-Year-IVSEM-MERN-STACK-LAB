const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("form")
})

app.post("/submit", (req, res) => {
  res.send("Form submitted by " + req.body.name)
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})