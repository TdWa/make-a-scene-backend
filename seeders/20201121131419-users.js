"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Tim",
          email: "tim@tim.com",
          password: bcrypt.hashSync("tim", SALT_ROUNDS),
          about:
            "I'm building the website so I'm just messing about. I had a story about React in my head some day and wanted to build something to be able to share it in a fun way",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "François",
          email: "fran@fran.com",
          password: bcrypt.hashSync("fran", SALT_ROUNDS),
          about:
            "I'm a director based in New York City and this is the best website I've ever seen. My scenes are mostly about post-liberal abstract exhibitionism in the broader context of modern fundamental decreationalism and the destructuring of the psycho-synchronic metasphere",
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
