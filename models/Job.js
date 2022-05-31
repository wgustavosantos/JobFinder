const Sequelize = require("sequelize");
const db = require("../db/connection");

let job = db.define("job", {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.DOUBLE,
  },
  company: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  newJob: {
    type: Sequelize.INTEGER,
  },
});

module.exports = job;