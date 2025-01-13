const express = require("express");

const app = express();

// use body parser for express to handle json post

app.use(express.json());
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

/***************add new course (post) */

app.post("/api/courses", (req, res) => {
  console.log(req.body);

  //test cases
  if (!req.body.title) {
    return res.status(400).json({ msg: "title not provided" });
  }
  if (!req.body.price) {
    return res.status(400).json({ msg: "price not provided" });
  }

  courses.push({ id: courses.length + 1, ...req.body });
  res.status(201).json(courses);
});

app.listen("5000", () => {
  console.log("listening on port 5000");
});
