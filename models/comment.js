"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.scene);
      comment.belongsTo(models.user);
    }
  }
  comment.init(
    {
      sceneId: { type: DataTypes.INTEGER, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      text: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
