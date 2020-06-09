'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        allowNull: false,
        validate: {
          is: ['^[a-z]+$', 'i'],
        },
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        validate: {
          is: ['^[a-z]+$', 'i'],
        },
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        validate: {
          isEmail: true,
        },
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10).then((hashedPw) => {
      user.password = hashedPw;
    });
  });
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Problem, { foreignKey: 'userId' });
    User.hasMany(models.Solution, { foreignKey: 'userId' });
  };
  return User;
};
