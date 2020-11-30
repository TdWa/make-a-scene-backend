"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "scenes",
      [
        {
          userId: 1,
          name: "The benefits of React part 1",
          description:
            "This scene is about / inspired by / part of series, see here for part 2 / blablabla",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "The benefits of React part 2",
          description: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "My birth",
          description:
            "Me me me me Me me me me Me me me me Me me me me Me me me me Me me me me ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("scenes", null, {});
  },
};
