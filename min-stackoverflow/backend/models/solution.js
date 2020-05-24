'use strict';
module.exports = (sequelize, DataTypes) => {
  const Solution = sequelize.define('Solution', {
    description: DataTypes.TEXT
  }, {});
  Solution.associate = function(models) {
    // associations can be defined here
  };
  return Solution;
};