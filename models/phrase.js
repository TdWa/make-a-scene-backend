"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class phrase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      phrase.belongsTo(models.actor);
    }
  }
  phrase.init(
    {
      actorId: { type: DataTypes.INTEGER, allowNull: false },
      index: { type: DataTypes.INTEGER, allowNull: false },
      text: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "phrase",
    }
  );
  return phrase;
};
