const Sequelize = require("sequelize");
const db = require("../db");

const ItemUserList = db.define("itemUserList", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  purchased: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      notEmpty: true,
    },
  },
  paid: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = ItemUserList;
