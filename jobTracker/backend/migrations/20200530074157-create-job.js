'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      company: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      site: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      responsibility: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      response: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      link: {
        allowNull: false,
        type: Sequelize.TEXT,
        validate: {
          isUrl: true,
        },
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
    return queryInterface.dropTable('Jobs');
  },
};
