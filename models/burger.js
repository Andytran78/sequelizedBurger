'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("burgers", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
      },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Burgers;
};