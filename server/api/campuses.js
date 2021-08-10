const campuses = require("express").Router();
const { Campus, Student } = require("../db");

campuses.get("/", (req, res, next) => {
  Campus.findAll()
    .then((campuses) => res.send(campuses))
    .catch((err) => next(err));
});

campuses.get("/:id", (req, res, next) => {
  Campus.findByPk(req.params.id, { include: Student })
    .then((campus) => {
      if (campus) res.send(campus);
      else res.sendStatus(404);
    })
    .catch((err) => next(err));
});

campuses.post("/", (req, res, next) => {
  Campus.create(req.body)
    .then((campus) => res.send(campus))
    .catch((err) => next(err));
});

module.exports = campuses;
