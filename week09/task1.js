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