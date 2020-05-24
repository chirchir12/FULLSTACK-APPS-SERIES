'use strict';
module.exports = (sequelize, DataTypes) => {
  const LangCategory = sequelize.define('LangCategory', {
    name: DataTypes.STRING
  }, {});
  LangCategory.associate = function(models) {
    // associations can be defined here
  };
  return LangCategory;
};