"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      actor.belongsTo(models.scene);
      actor.hasMany(models.phrase);
    }
  }
  actor.init(
    {
      sceneId: { type: DataTypes.INTEGER, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      backgroundColor: { type: DataTypes.STRING, allowNull: false },
      color: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "actor",
    }
  );
  return actor;
};
