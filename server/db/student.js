const db = require("./database");
const Sequelize = require("sequelize");

const Student = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true, isEmail: true },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://picsum.photos/200",
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: { isDecimal: true, max: 4.0, min: 0.0 },
  },
});

module.exports = Student;
