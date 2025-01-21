const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();

const coursesRouter = require("./routes/courses.router");

// use body parser for express to handle json post

app.use(express.json());
app.use("/api/courses", coursesRouter);
let { courses } = require("./data/courses");
//get all courses

app.listen("5000", () => {
  console.log("listening on port 5000");
});
