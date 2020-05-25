'use strict';
module.exports = (sequelize, DataTypes) => {
  const LangCategory = sequelize.define(
    'LangCategory',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
    },
    {}
  );
  LangCategory.associate = function (models) {
    // associations can be defined here
  };
  return LangCategory;
};
