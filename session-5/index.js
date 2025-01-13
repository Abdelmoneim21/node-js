const express = require("express");

const app = express();

const courses = [
  {
    id: 1,
    title: "js course",
    price: 1000,
  },
  {
    id: 2,
    title: "rect course",
    price: 800,
  },
  {
    id: 3,
    title: "nodeJs course",
    price: 800,
  },
];

//get all courses
app.get("/api/courses", (req, res) => {
  res.json(courses);
});

//get single course
app.get("/api/courses/:id", (req, res) => {
  console.log(req.params);
  const course = courses.find((course) => course.id === +req.params.id);
  if (!course) {
    return res.status(404).json({ msg: "course not found" });
  }
  res.json(course);
});

app.listen("5000", () => {
  console.log("listening on port 5000");
});
