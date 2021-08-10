const students = require("express").Router();
const { Student } = require("../db");

students.get("/", (req, res, next) => {
  Student.findAll()
    .then((students) => res.send(students))
    .catch((err) => next(err));
});

module.exports = students;
