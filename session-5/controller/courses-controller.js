let { courses } = require("../data/courses");

const getAllCourses = (req, res) => {
  res.json(courses);
};

const getCourse = (req, res) => {
  console.log(req.params);
  const course = courses.find((course) => course.id === +req.params.id);
  if (!course) {
    return res.status(404).json({ msg: "course not found" });
  }
  res.json(course);
};

const addCourse = (req, res) => {
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
};

const updateCourse = (req, res) => {
  const id = +req.params.id;
  let course = courses.find((course) => course.id === id);
  if (!course) {
    return res.status(404).json({ msg: "course not found" });
  }

  course = { ...course, ...req.body };

  res.status(200).json(course);
};

const deleteCourse = (req, res) => {
  const id = +req.params.id;
  //filterinf course to delete a targeted course
  courses = courses.filter((course) => course.id != id);

  res.status(200).json({ success: true });
};

module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
