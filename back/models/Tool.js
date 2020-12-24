const { DataTypes, Model } = require("sequelize");
const database = require("../config/db");

class Tool extends Model {}

Tool.init(
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize: database,
    modelName: "tool",
  }
);

module.exports = Tool;