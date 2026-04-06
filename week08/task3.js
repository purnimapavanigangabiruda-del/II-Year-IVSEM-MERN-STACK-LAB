const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://root:root@cluster0.kfqi5wg.mongodb.net/?appName=Cluster0")

const Student = mongoose.model("Student", {
  name: String,
  age: Number
})

app.post("/students", async (req, res) => {
  const student = new Student(req.body)
  await student.save()
  res.send("Student saved")
})

app.get("/students", async (req, res) => {
  const students = await Student.find()
  res.json(students.map(s => ({name: s.name, age: s.age})))
})

app.put("/students/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body)
  res.send("Student updated")
})

app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id)
  res.send("Student deleted")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})