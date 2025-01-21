const coursesController = require("../controller/courses-controller");
const { body } = require("express-validator");

const express = require("express");

const router = express.Router();

router.get("/", coursesController.getAllCourses);

//get single course
router.get("/:id", coursesController.getCourse);

/***************add new course (post) */

router.post(
  "/",
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

router.patch("/:id", coursesController.updateCourse);

// delete course
router.delete("/:id", coursesController.deleteCourse);

module.exports = router;
