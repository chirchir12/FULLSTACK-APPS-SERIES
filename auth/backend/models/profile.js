'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    'Profile',
    {
      avatar: DataTypes.STRING,
      dob: DataTypes.DATE,
      address: DataTypes.STRING,
      residence: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {}
  );
  Profile.associate = function (models) {
    // associations can be defined here
    Profile.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Profile;
};
