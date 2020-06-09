'use strict';
module.exports = (sequelize, DataTypes) => {
  const Problem = sequelize.define(
    'Problem',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  Problem.associate = function (models) {
    // associations can be defined here
    Problem.belongsTo(models.User, { foreignKey: 'userId' });
    Problem.belongsTo(models.LangCategory, { foreignKey: 'langId' });
    Problem.hasMany(models.Solution, { foreignKey: 'problemId' });
  };
  return Problem;
};
