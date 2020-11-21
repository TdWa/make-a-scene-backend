"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "phrases",
      [
        {
          actorId: 1,
          index: 0,
          text: "Hey babe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 2,
          index: 1,
          text: "....hey",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 2,
          index: 2,
          text: "What's up?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 1,
          index: 3,
          text:
            "Riiight.. I don't think that's how it works.. but let's not get hung up on the details",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 2,
          index: 4,
          text: "Right.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 3,
          index: 0,
          text: "Props kiddo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 3,
          index: 1,
          text: "...........",
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
