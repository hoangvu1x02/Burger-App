'use strict';
module.exports = (sequelize, DataTypes) => {
  const burger = sequelize.define('burger', {
    name: DataTypes.STRING,
    isDevoured: DataTypes.BOOLEAN
  }, {});
  burger.associate = function(models) {
    // associations can be defined here
  };
  return burger;
};