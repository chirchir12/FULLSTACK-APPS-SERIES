'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10).then(hashedPw => {
      user.password = hashedPw;
    });
  })

  User.associate = function (models) {
    // associations can be defined here
    User.hasOne(models.Profile, { foreignKey: 'userId' });
  };
  return User;
};
