'use strict';
module.exports = (sequelize, DataTypes) => {
  const Problem = sequelize.define('Problem', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Problem.associate = function(models) {
    // associations can be defined here
  };
  return Problem;
};