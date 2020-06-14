'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      firstName: {
        allowNull: false,
        validate: {
          is: ['^[a-z]+$', 'i'],
        },
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        validate: {
          is: ['^[a-z]+$', 'i'],
        },
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        validate: {
          isEmail: true,
        },
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
