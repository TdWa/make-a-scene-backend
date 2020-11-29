"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "phrases",
      [
        {
          actorId: 1,
          index: 0,
          text: "Phrase one",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 2,
          index: 1,
          text: "Phrase two",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 2,
          index: 2,
          text: "Phrase three",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 1,
          index: 3,
          text: "Phrase four",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 2,
          index: 4,
          text: "Phrase five",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 3,
          index: 0,
          text: "Hey Hello Hi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 3,
          index: 1,
          text: "What's up",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 5,
          index: 0,
          text: "Me me me me me me me me me me me, this is all about me",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("phrases", null, {});
  },
};
