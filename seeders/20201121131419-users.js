"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Tim",
          email: "tim@tim.com",
          password: bcrypt.hashSync("tim", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "François",
          email: "fran@fran.com",
          password: bcrypt.hashSync("fran", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
