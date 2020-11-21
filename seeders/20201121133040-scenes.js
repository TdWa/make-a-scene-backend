"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "scenes",
      [
        {
          spaceId: 1,
          name: "The benefits of React part 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spaceId: 1,
          name: "The benefits of React part 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spaceId: 2,
          name: "My birth",
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
