'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { DataTypes } = Sequelize;
    return await queryInterface.createTable('roles', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.ENUM('user', 'hr', 'admin', 'chief'),
        defaultValue: 'user',
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('roles');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
