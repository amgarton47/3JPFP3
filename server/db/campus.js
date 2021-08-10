const db = require("./database");
const Sequelize = require("sequelize");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://picsum.photos/200",
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  description: { type: Sequelize.TEXT },
});

module.exports = Campus;
