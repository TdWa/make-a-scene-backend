"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "actors",
      [
        {
          sceneId: 1,
          type: "male",
          name: '<div id="Antonio" >',
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sceneId: 1,
          type: "female",
          name: '<div id="Eva" >',
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sceneId: 2,
          type: "male",
          name: '<div id="Antonio" >',
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sceneId: 2,
          type: "female",
          name: '<div id="Eva" >',
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sceneId: 3,
          type: "male",
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
