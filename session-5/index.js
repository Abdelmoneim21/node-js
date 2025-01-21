const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();

// use body parser for express to handle json post

app.use(express.json());

let { courses } = require("./data/courses");
const coursesController = require("./controller/courses-controller");
//get all courses
app.get("/api/courses", coursesController.getAllCourses);

//get single course
app.get("/api/courses/:id", coursesController.getCourse);

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
  coursesController.addCourse
);

//update course

app.patch("/api/courses/:id", coursesController.updateCourse);

// delete course
app.delete("/api/courses/:id", coursesController.deleteCourse);

app.listen("5000", () => {
  console.log("listening on port 5000");
});
