const students = require("express").Router();
const { Student, Campus } = require("../db");

students.get("/", (req, res, next) => {
  Student.findAll()
    .then((students) => res.send(students))
    .catch((err) => next(err));
});

students.get("/:id", (req, res, next) => {
  Student.findByPk(req.params.id, { include: Campus })
    .then((student) => {
      if (student) res.send(student);
      else res.sendStatus(404);
    })
    .catch((err) => next(err));
});

students.post("/", (req, res, next) => {
  Student.create(req.body)
    .then((student) => res.student)
    .catch((err) => next(err));
});

module.exports = students;
