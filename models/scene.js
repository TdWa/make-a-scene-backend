"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class scene extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      scene.belongsTo(models.space);
      scene.hasMany(models.actor);
      scene.hasMany(models.comment);
    }
  }
  scene.init(
    {
      spaceId: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "scene",
    }
  );
  return scene;
};
