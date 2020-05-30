'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define(
    'Job',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      company: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      site: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      link: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
      response: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {}
  );
  Job.associate = function (models) {
    // associations can be defined here
  };
  return Job;
};
