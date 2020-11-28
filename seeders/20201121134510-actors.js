"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "actors",
      [
        {
          sceneId: 1,
          type: "man",
          name: '<div id="Antonio" >',
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sceneId: 1,
          type: "woman",
          name: '<div id="Eva" >',
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sceneId: 2,
          type: "man",
          name: '<div id="Antonio" >',
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sceneId: 2,
          type: "woman",
          name: '<div id="Eva" >',
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sceneId: 3,
          type: "man",
          name: "Me",
          backgroundColor: "#000000",
          color: "#ffffff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("actors", null, {});
  },
};
