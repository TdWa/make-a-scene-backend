"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          sceneId: 1,
          userId: 2,
          text: "That was the worst thing I have ever seen in my life.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sceneId: 1,
          userId: 1,
          text: "Thanks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sceneId: 3,
          userId: 2,
          text: "Very inspiring, if I may say so myself.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
