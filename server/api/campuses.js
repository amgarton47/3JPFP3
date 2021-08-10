const campuses = require("express").Router();
const { Campus } = require("../db");

campuses.get("/", (req, res, next) => {
  Campus.findAll()
    .then((campuses) => res.send(campuses))
    .catch((err) => next(err));
});

module.exports = campuses;
