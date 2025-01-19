const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();

// use body parser for express to handle json post

app.use(express.json());
let courses = [
  {
    id: 1,
    title: "js course",
    price: 1000,
  },
  {
    id: 2,
    title: "react course",
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

app.post(
  "/api/courses",
  [
    body("title")
      .notEmpty()
      .withMessage("title is required")
      .isLength({ min: 2 })
      .withMessage("title length is at least 2 characters"),
    body("price")
      .notEmpty()
      .withMessage("price is required")
      .isNumeric()
      .withMessage("price must be a number")
      .isFloat({ min: 0 })
      .withMessage("price must be a non-negative number"),
  ],
  (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      returnres.status(400).json(errors.array());
    }

    //test cases
    // if (!req.body.title) {
    //   return res.status(400).json({ msg: "title not provided" });
    // }
    // if (!req.body.price) {
    //   return res.status(400).json({ msg: "price not provided" });
    // }
    const course = { id: courses.length + 1, ...req.body };
    courses.push(course);
    res.status(201).json(course);
  }
);

//update course

app.patch("/api/courses/:id", (req, res) => {
  const id = +req.params.id;
  let course = courses.find((course) => course.id === id);
  if (!course) {
    return res.status(404).json({ msg: "course not found" });
  }

  course = { ...course, ...req.body };

  res.status(200).json(course);
});

// delete course
app.delete("/api/courses/:id", (req, res) => {
  const id = +req.params.id;
  courses = courses.filter((course) => course.id != id);

  res.status(200).json({ success: true });
});

app.listen("5000", () => {
  console.log("listening on port 5000");
});
