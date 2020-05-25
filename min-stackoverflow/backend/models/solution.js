'use strict';
module.exports = (sequelize, DataTypes) => {
  const Solution = sequelize.define(
    'Solution',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      description: DataTypes.TEXT,
    },
    {}
  );
  Solution.associate = function (models) {
    // associations can be defined here
  };
  return Solution;
};
