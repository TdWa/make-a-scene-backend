"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "phrases",
      [
        {
          actorId: 1,
          index: 0,
          text: "Hello! ...How do you do?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 2,
          index: 1,
          text: "I'm not sure.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 1,
          index: 2,
          text: "What do you mean, you're not sure?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 2,
          index: 3,
          text: "I just don't really think about the how. I just do.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 1,
          index: 4,
          text: "I see.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 4,
          index: 0,
          text: "Do you know how you do?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actorId: 3,
          index: 1,
          text: "Yes, like so.",
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
