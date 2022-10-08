'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { DataTypes } = Sequelize;
    return await queryInterface.createTable('users', {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      patronymic: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(256),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }

    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('users');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
